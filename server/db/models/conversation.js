const db = require("../db");
const Message = require("./message");
const Sequelize = require("sequelize");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (userId, convoId) {
  const conversation = await Conversation.findOne({
    where: {
      userId,
      conversationId: convoId,
    },
  });
  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;

