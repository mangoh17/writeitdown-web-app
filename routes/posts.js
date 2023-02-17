var express = require("express");
var router = express.Router();
const db = require("../model/helper"); //use helper after set up

//GET posts
router.get("/", async (req, res) => {
  try {
    const response = await db("SELECT * FROM posts");
    const posts = response.data;
    res.send({ posts });
  } catch (err) {
    res.status(500).send(err);
  }
}); // i this working on top of the list route? we cannot access any post w/o list id

//GET POST by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await db(`SELECT xxx`);
    const posts = response.data;
    res.send({ posts });
  } catch (err) {
    res.status(500).send(err);
  }
});


//DELETE POST

router.delete("/id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const response = await db(`SELECT * FROM posts WHERE id = ${id}`);
    const post = response.data[0];

    if(!post) {
      res.status(404).send();
      return;
    }
    await db(`DELETE FROM posts WHERE id = ${id}`)
    res.status(200).send({message: "post deleted"});
  } catch (error) {
    res.status(500).send(error);
  }
});

//POST post

router.post("/", async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;

  try {
    const response = await db(`INSERT INTO posts (title, text)
    value ('${title}', '${text}')`);

    const post = response.data;

    res.send({ post });
  } catch (error) {
    res.status(500).send(error)
  }
})
module.exports = router;
