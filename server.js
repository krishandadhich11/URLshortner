import express from "express";
import urlRoute from "./Route/router.js";
import { connectToMongoDB } from "./ConnectDB/connectDB.js";
import URL from "./Models/model.js";
import { globalLimiter } from "./RateLimit/rateLimit.js";

const app = express();
const PORT = 3000;

app.use(express.json());

connectToMongoDB(
  "mongodb+srv://krishna1100rd:6K8Y6IbKSAMHN1dV@cluster0.b0kzqix.mongodb.net/URLshortner"
).then(() => console.log("Mongodb connected"));

app.use("/url", globalLimiter, urlRoute);

app.get("/:shortID", async (req, res) => {
  const shortID = req.params.shortID;
  const entry = await URL.findOneAndUpdate(
    {
      shortID,
    },
    {
      $push: {
        "totalClicks.visitHistory": { timeStamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
