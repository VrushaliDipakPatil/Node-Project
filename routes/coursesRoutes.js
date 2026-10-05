const express = require("express");
const router = express.Router();
const coursesController = require("../controller/coursesController");

router.post("/add", coursesController.addCourse);
router.get("/addstudentstocourse", coursesController.addStudentstoCourses);

module.exports = router;