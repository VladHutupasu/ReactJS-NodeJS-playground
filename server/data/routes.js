import { Router } from "express";
import { readFile } from "fs";

const router = new Router();

router.get("/codes", (req, res) => {
  readFile("./data/codes.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    }
    res.status(200).send(JSON.parse(data));
  });
});

router.get("/pair/:fromCurrency/:toCurrency", async (req, res) => {
  const { fromCurrency, toCurrency } = req.params;
  const { amount } = req.query;

  if (!fromCurrency || !toCurrency || !amount) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  res.status(200).json({ convertedAmount: Math.random() });
});

export default router;
