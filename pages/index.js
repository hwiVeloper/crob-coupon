import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import * as axios from "axios";
import { useState } from "react";
import CouponForm from "../components/CouponForm";

export default function Index() {
  const [mids, setMids] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const _submit = async () => {
    if (mids.length === 0 || couponCode.length === 0) {
      alert("빈값은 허용되지 않습니다.");
      return;
    }

    if (couponCode.length < 16) {
      alert("쿠폰은 16자리입니다.");
      return;
    }

    let arrMid = new Array();
    arrMid = mids.split("\n");
    for (let i = 0; i < arrMid.length; i++) {
      let tmpMid = arrMid[i].trim();
      if (tmpMid.length == 0) {
        continue;
      }
      if (arrMid[i].trim().length !== 9) {
        alert("아이디는 9자리입니다.");
        return;
      }
    }

    setOpen(true);

    let arrResult = new Array();
    arrResult.push("*** " + couponCode + " 입력결과 ***");
    for (let i = 0; i < arrMid.length; i++) {
      if (arrMid[i].trim().length === 0) continue;

      let tmpMid = arrMid[i].trim();

      const formData = new FormData();

      formData.set("mid", tmpMid);
      formData.set("coupon_code", couponCode);
      formData.set("combo_name", "dc_coupon");

      await axios
        .post("https://coupon.devsgb.com/coupon/use", formData)
        .then((res) => {
          arrResult.push(tmpMid + " 입력 성공!");
        })
        .catch((err) => {
          // already_used: false
          // error_msg: ""
          // expired: false
          // too_many_err: false
          // use_limit_over: 0
          const errData = err.response.data;
          if (errData.use_limit_over > 0) {
            arrResult.push(tmpMid + " 이미 사용한 쿠폰 ㅠㅠ");
          } else if (errData.expired === true) {
            arrResult.push(tmpMid + " 만료된 쿠폰 ㅠㅠ");
          } else {
            arrResult.push(tmpMid + " 알 수 없는 오류 ㅠㅠ");
          }
        })
        .finally(() => {});
    }

    setOpen(false);

    if (arrResult.length > 0) setResult(arrResult.join("\n"));
    else setResult("결과가 없습니다 ㅠㅠ");
  };

  const _reset = () => {
    setMids("");
    setCouponCode("");
    setResult("");
  };

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <CouponForm
        mids={mids}
        handleSetMids={setMids}
        couponCode={couponCode}
        handleSetCouponCode={setCouponCode}
        result={result}
        handleSetResult={setResult}
        handleSubmit={_submit}
        handleReset={_reset}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 999999,
    color: "#fff",
  },
}));
