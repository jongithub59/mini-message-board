const pool = require("./pool");

// fetch message rows as an array
async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

// insert new message into database, id and date added are handled by db
async function insertMessage(text, username) {
  await pool.query("INSERT INTO messages (text, username)VALUES ($1, $2)", [
    text,
    username,
  ]);
}

// find message by its db id
async function findMessage(index) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    index,
  ]);

  return rows[0];
}

module.exports = { getMessages, insertMessage, findMessage };
