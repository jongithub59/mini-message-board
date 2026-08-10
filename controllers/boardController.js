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
    text: "Let's see what this book an do...",
    user: "Abrams",
    added: new Date().toDateString(),
  },
];

const board_index = (req, res) => {
  res.render("index", { messages: messages });
};

module.exports = { board_index };
