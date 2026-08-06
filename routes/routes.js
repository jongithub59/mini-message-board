const express = require("express");
const boardController = require("../controllers/boardController.js");

const router = express.Router();

router.get("/", boardController.board_index);

module.exports = router;
