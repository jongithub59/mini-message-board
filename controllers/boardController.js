const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const alphaNumericErr = "must not contain special characters";
const lengthErr = "must be between 3 and 12 characters";
const messageLengthErr = "must not exceed 200 characters";

const validateUser = [
  body("userField")
    .trim()
    .isAlphanumeric()
    .withMessage(`Username ${alphaNumericErr}`)
    .isLength({ min: 3, max: 12 })
    .withMessage(`Username ${lengthErr}`),
  body("messageField")
    .trim()
    .isLength({ max: 200 })
    .withMessage(`Message ${messageLengthErr}`),
];

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

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).render("new", {
      text: text,
      user: user,
      errors: errors.array(),
    });

  await db.insertMessage(text, user);

  res.redirect("/");
}

async function board_details(req, res) {
  const message = await db.findMessage(req.params.id);
  res.render("message", { message });
}

module.exports = {
  validateUser,
  board_index,
  board_new,
  board_new_post,
  board_details,
};
