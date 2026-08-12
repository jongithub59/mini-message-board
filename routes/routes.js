const express = require("express");
const boardController = require("../controllers/boardController.js");

const router = express.Router();

router.get("/", boardController.board_index);

router.get("/new", boardController.board_new);

router.get("/message/:id", boardController.board_details);

router.post("/new", boardController.board_new_post);

module.exports = router;
