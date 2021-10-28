const express = require('express');
const ShortUrl = require("../models/ShortLink");
const {nanoid} = require("nanoid");
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const url = await ShortUrl.findOne();
        res.send(url);
    } catch (e) {
        res.sendStatus(500);
    }
});


router.post('/', async (req, res) => {
    console.log(req.body);
    if (!req.body.url) {
        return res.status(400).send({error: 'Data not valid'});
    }

    const newUrl = {
        originalUrl: req.body.url,
        shortUrl: nanoid(7)
    }

    const url = new ShortUrl(newUrl);
    try {
        const response = await url.save();
        res.send(response);
        console.log(response);
    } catch (e) {
        res.status(400).send({error: 'Data Not Valid'});
    }
});

module.exports = router;