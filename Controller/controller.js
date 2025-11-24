import pkg from 'shortid';
const {shortid} = pkg;
import URL from '../models/model.js';


async function generateShortUrl(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'})
    const shortID = shortid();
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],

    });

    return res.json({id: shortID});
}

export {generateShortUrl};