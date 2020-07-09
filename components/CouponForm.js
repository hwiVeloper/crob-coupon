import { Grid, Paper, TextField, Button, makeStyles } from "@material-ui/core";

export default function CouponForm(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper>
          <TextField
            label="쿠폰코드"
            style={{ padding: 8 }}
            placeholder="16자리"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              maxLength: 16,
              style: {
                textTransform: "uppercase",
                fontSize: "larger",
              },
            }}
            variant="outlined"
            value={props.couponCode}
            onChange={(event) => props.handleSetCouponCode(event.target.value)}
            required
          />
          <TextField
            label="게임 ID"
            placeholder="한줄에 ID 1개 입력 (ex. QLTQT4578)"
            style={{ padding: 8 }}
            multiline
            fullWidth
            rows={30}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              style: {
                textTransform: "uppercase",
              },
            }}
            value={props.mids}
            onChange={(event) =>
              props.handleSetMids(event.target.value.toUpperCase())
            }
            required
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.buttonArea}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => props.handleSubmit()}
          >
            쿠폰 입력하기
          </Button>
          <Button
            variant="contained"
            size="large"
            color="default"
            onClick={() => props.handleReset()}
          >
            초기화
          </Button>
        </div>
        <Paper>
          <TextField
            label="결과"
            placeholder="쿠폰 입력결과"
            style={{ padding: 8 }}
            multiline
            fullWidth
            rows={30}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              style: {
                textTransform: "uppercase",
              },
            }}
            value={props.result}
            onChange={(event) => props.handleSetResult(event.target.value)}
            readOnly={true}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  buttonArea: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: 21,
    paddingBottom: 21,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
