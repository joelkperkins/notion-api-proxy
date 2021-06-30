import moment from "moment";

/**
 * @function generateTimeStamp30DaysAgo generates a timestamp 30 days before cthe current time using the library "moment"
 *
 * @returns {object} Returns timestamp <YYYY-MM-DDT0000:00:00Z>
 */

const generateTimeStamp30DaysAgo = () =>
  moment().subtract(30, "days").format().slice(0, 10);

const validReaction = (reaction) => {
  return reaction === "like" || reaction === "dislike";
};

const validMessageId = (messageId) => {
  return typeof messageId === "string";
};

module.exports = {
  generateTimeStamp30DaysAgo,
  validReaction,
  validMessageId,
};
