const { Client } = require("pg");

// populate db with a table and some values (meant to run once only to create table)
const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text TEXT NOT NULL,
        username VARCHAR(100) NOT NULL,
        added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );

    INSERT INTO messages (text, username)
    VALUES
        ('About time someone called me', 'Shiv'),
        ('Let''s see what this book can do...', 'Abrams'),
        ('Today... I try a hot dog...', 'Mirage');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://postgres:admin@localhost:5432/board_messages",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
