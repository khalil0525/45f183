import React, { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  boldPreviewText: {
    color: "black",
    fontWeight: "600",
  },
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();
  // useEffect(() => {
  //   console.log(conversation.messages);
  // });
  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={`${
            !conversation.messages[conversation.messages.length - 1].isRead &&
            classes.boldPreviewText
          } ${classes.previewText}`}
        >
          {latestMessageText}
        </Typography>
      </Box>
      <Badge badgeContent={4} color="secondary"></Badge>
    </Box>
  );
};

export default ChatContent;
