const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");
const { makeQueryWithCatch } = require("../../utils/router-util.js");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // Return all tags with  assoc. Product data
  makeQueryWithCatch(
    res,
    Tag.findAll({
      include: [{ model: Product }],
    })
  );
});

router.get("/:id", (req, res) => {
  // Return single single tag by `id` with assoc. Product data
  makeQueryWithCatch(
    res,
    Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
  );
});

router.post("/", (req, res) => {
  // create a new tag
  makeQueryWithCatch(res, Tag.create(req.body));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  makeQueryWithCatch(
    res,
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
  );
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  makeQueryWithCatch(
    res,
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
  );
});

module.exports = router;
