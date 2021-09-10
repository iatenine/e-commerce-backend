const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const results = await Category.findAll({
      include: [Product],
    });
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const result = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);
    await category.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
