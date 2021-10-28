const express = require('express');
const ShortUrl = require("../models/ShortLink");
const router = express.Router();


router.get('/:id', async (req, res) => {
    console.log('id', req.params.id);
    try {
        const url = await ShortUrl.findOne({shortUrl: req.params.id});

        if (url !== null) {
            return res.status(301).redirect(url.originalUrl);
        }
        res.status(404).send({error: 'Not found'})
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;