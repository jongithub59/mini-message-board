const date = new Date();
const messages = [
  {
    text: "The Baxter Society has your number!",
    user: "Shiv",
    added: date.toLocaleDateString(),
    addedFull: date.toLocaleString(),
  },
  {
    text: "No more games...",
    user: "Mirage",
    added: date.toLocaleDateString(),
    addedFull: date.toLocaleString(),
  },
  {
    text: "Let's see what this book can do...",
    user: "Abrams",
    added: date.toLocaleDateString(),
    addedFull: date.toLocaleString(),
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

  messages.push({
    text: text,
    user: user,
    added: new Date().toDateString(),
  });

  res.redirect("/");
};

const board_details = (req, res) => {
  const message = messages[req.params.id];
  res.render("message", { message });
};

module.exports = { board_index, board_new, board_new_post, board_details };
