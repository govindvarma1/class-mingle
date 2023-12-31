const router = require("express").Router();
const { CreateClassRoom, JoinClassRoom, addPost, deletePost, fetchPeople, OpenClassRoom } = require("../controllers/classRoomController");

router.post("/create/", CreateClassRoom);
router.post("/join/", JoinClassRoom);
router.post("/open/", OpenClassRoom);
router.post("/addpost/", addPost);
router.post("/deletepost/", deletePost);
router.post("/fetchpeople/", fetchPeople);

module.exports = router;