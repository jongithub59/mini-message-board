const date = new Date();
const messages = [
  {
    text: "About time someone called me",
    user: "Shiv",
    added: date.toLocaleString(),
    addedFull: date.toString(),
  },
  {
    text: "No more games...",
    user: "Mirage",
    added: date.toLocaleString(),
    addedFull: date.toString(),
  },
  {
    text: "Let's see what this book can do...",
    user: "Abrams",
    added: date.toLocaleString(),
    addedFull: date.toString(),
  },
];

const board_index = (req, res) => {
  res.render("index", { messages: messages });
};

const board_new = (req, res) => {
  res.render("new");
};

const board_new_post = (req, res) => {
  //get content of form through req
  const text = req.body.messageField;
  const user = req.body.userField;
  const postDate = new Date();

  messages.push({
    text: text,
    user: user,
    added: postDate.toLocaleString(),
    addedFull: postDate.toString(),
  });

  res.redirect("/");
};

const board_details = (req, res) => {
  const message = messages[req.params.id];
  res.render("message", { message });
};

module.exports = { board_index, board_new, board_new_post, board_details };
