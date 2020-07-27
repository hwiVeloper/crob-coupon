import {
  Button, Dialog,


  DialogActions, DialogContent,


  DialogContentText, DialogTitle,




  List,
  ListItem,
  ListItemText,

  makeStyles, Typography
} from "@material-ui/core";
import React from "react";
import { updateContent } from "../constants/UpdateContent";

export const VersionInfo = (props) => {
  const { open, handleOpen, handleClose } = props;
  const classes = useStyle();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
    >
      <DialogTitle id="scroll-dialog-title">버전 정보</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          업데이트 현황
        </DialogContentText>
        <List>
          {updateContent.map((item) => (
            <ListItem>
              <ListItemText
                primary={"v" + item.version + " (" + item.date + ")"}
                secondary={
                  <Typography className={classes.versionDesc}>
                    {item.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyle = makeStyles((theme) => ({
  versionDesc: {
    whiteSpace: "pre-line",
  },
}));
