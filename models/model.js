import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },

    redirectURL: {
      type: String,
      required: true,
    },

    totalClicks: {
      type: {
        visitHistory: [
          {
            timeStamp: { type: Number }
          }
        ]
      },
      default: {
        visitHistory: []
      }
    }
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);
export default URL;
