const router = require("express").Router();
const { Category, Product } = require("../../models");
const { makeQueryWithCatch } = require("../../utils/router-util.js");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // Return all Category records with assoc. Products
  makeQueryWithCatch(res, Category.findAll({ include: [{ model: Product }] }));
});

router.get("/:id", async (req, res) => {
  // Find single category record with assoc. Products via passed Id parameter
  makeQueryWithCatch(
    res,
    Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
  );
});

router.post("/", (req, res) => {
  // create a new category
  makeQueryWithCatch(res, Category.create(req.body));
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  makeQueryWithCatch(
    res,
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
  );
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  makeQueryWithCatch(
    res,
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
  );
});

module.exports = router;
