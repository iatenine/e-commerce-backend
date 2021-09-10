const router = require("express").Router();
const { Tag, Product } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const results = await Tag.findAll({
      include: [Product],
    });
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const response = await Tag.findByPk(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);
    tag.destroy();
    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
