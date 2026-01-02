import shortid from "shortid";

import URL from "../Models/model.js";

async function generateShortUrl(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  const shortID = shortid();

  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    totalClicks: {
      visitHistory: [], // ✔ matches schema
    },
  });

  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID;
  const result = await URL.findOne({ shortID });
  return res.json({
    totalClicks: result.totalClicks.visitHistory.length,
    analytics: result.totalClicks.visitHistory,
  });
}

export { generateShortUrl, handleGetAnalytics };
