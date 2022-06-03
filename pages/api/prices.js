import Prices from "../../models/prices";
import connectDb from "../../utils/db";

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "GET") {
    Prices.find({})
      .then((data) => {
        res.status(200).json({ success: true, data: data });
      })
      .catch((err) => {
        res.status(500).json({ success: false });
      });
  }
  if (req.method === "PUT") {
    const { id, amount, product } = req.body;
    const data = {};
    switch (product) {
      case "msand":
        data["msand"] = amount;
        break;
      case "psand":
        data["psand"] = amount;
        break;
      case "halfJally":
        data["halfJally"] = amount;
        break;
      case "onehalfJally":
        data["onehalfJally"] = amount;
        break;
      case "threebyfourJally":
        data["threebyfourJally"] = amount;
        break;
      case "powder":
        data["powder"] = amount;
        break;
      case "chips":
        data["chips"] = amount;
        break;
    }
    Prices.findOneAndUpdate({ _id: id }, data).then(() => {
      res.status(200).json({ success: true });
    });
  }
}
