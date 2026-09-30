const date = new Date();
const db = require("../db/queries");

// grab messages from db now and give that to the index route
async function board_index(req, res) {
  const messages = await db.getMessages(); // fetch messages from db, will be an array like before
  res.render("index", { messages: messages });
}

const board_new = (req, res) => {
  res.render("new");
};
async function board_new_post(req, res) {
  //get content of form through req
  const text = req.body.messageField;
  const user = req.body.userField;
  // const postDate = new Date();

  await db.insertMessage(text, user);

  res.redirect("/");
}

async function board_details(req, res) {
  const message = await db.findMessage(req.params.id);
  res.render("message", { message });
}

module.exports = { board_index, board_new, board_new_post, board_details };
