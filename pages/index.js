import CouponForm from "../components/CouponForm";
import { useState } from "react";
import * as axios from "axios";

export default function Index() {
  const [mids, setMids] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [result, setResult] = useState("");

  const _submit = () => {
    if (mids.length === 0 || couponCode.length === 0) {
      alert("빈값은 허용되지 않습니다.");
      return;
    }

    if (couponCode.length < 16) {
      alert("쿠폰은 16자리입니다.");
      return;
    }

    console.log(couponCode);
    console.log(mids);

    let arrMid = new Array();
    arrMid = mids.split("\n");
    console.log(arrMid);
    for (let i = 0; i < arrMid.length; i++) {
      if (arrMid[i].length !== 9) {
        alert("아이디는 9자리입니다.");
        return;
      }
    }

    let arrResult = new Array();

    for (let i = 0; i < arrMid.length; i++) {
      const formData = new FormData();
      formData.set("mid", arrMid[i]);
      formData.set("coupon_code", couponCode);
      formData.set("combo_name", "dc_coupon");

      // axios({
      //   method: "post",
      //   url: "https://coupon.devsgb.com/coupon/use",
      //   data: formData,
      //   headers: {
      //     accept: "application/json, text/plain, */*",
      //     "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      //     "access-control-allow-origin": "*",
      //     "content-type": "application/x-www-form-urlencoded",
      //     // "sec-fetch-dest": "empty",
      //     // "sec-fetch-mode": "cors",
      //     // "sec-fetch-site": "cross-site",
      //   },
      //   referrer: "https://www.cookierun.com/ko/coupon",
      //   referrerPolicy: "no-referrer-when-downgrade",
      //   body: "mid=QLTQT4578&coupon_code=STRIKELIKEANINJA&combo_name=dc_coupon",
      //   method: "POST",
      //   mode: "cors",
      //   credentials: "omit",
      // })
      axios
        .post("https://coupon.devsgb.com/coupon/use", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    //   fetch("https://coupon.devsgb.com/coupon/use", {
    //   "headers": {
    //     "accept": "application/json, text/plain, */*",
    //     "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    //     "access-control-allow-origin": "*",
    //     "content-type": "application/x-www-form-urlencoded",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "cross-site"
    //   },
    //   "referrer": "https://www.cookierun.com/ko/coupon",
    //   "referrerPolicy": "no-referrer-when-downgrade",
    //   "body": "mid=QLTQT4578&coupon_code=STRIKELIKEANINJA&combo_name=dc_coupon",
    //   "method": "POST",
    //   "mode": "cors",
    //   "credentials": "omit"
    // });
  };

  const _reset = () => {
    setMids("");
    setCouponCode("");
    setResult("");
  };

  return (
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
  );
}
