const messages = [
  {
    text: "The Baxter Society has your number!",
    user: "Shiv",
    added: new Date().toDateString(),
  },
  {
    text: "No more games...",
    user: "Mirage",
    added: new Date().toDateString(),
  },
  {
    text: "Let's see what this book can do...",
    user: "Abrams",
    added: new Date().toDateString(),
  },
];

const board_index = (req, res) => {
  res.render("index", { messages: messages });
};

const board_new = (req, res) => {
  res.render("new");
};

module.exports = { board_index, board_new };
