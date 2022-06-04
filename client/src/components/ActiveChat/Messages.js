import React, { useMemo } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from ".";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const getLastReadMessageId = useMemo(() => {
    for (let index = messages.length - 1; index >= 0; index--) {
      if (messages[index].isRead && messages[index].senderId === userId) {
        return index;
      }
    }
    return 0;
  }, [messages, userId]);

  console.log(messages);
  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            lastReadMessageId={getLastReadMessageId}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
