const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Listing, User, Review, Message } = require('../../db/models');

const {
    singleMulterUpload,
    singlePublicFileUpload,
    multipleMulterUpload,
    multiplePublicFileUpload,
} = require("../../awsS3");

const router = require('./users');

//Retrieving listings list
router.get("/", async(req, res) => {
    const listings = await Listing.findAll();
    console.log("here are the listings", listings)
    res.json({ listings })
})

//Retrieving listings list for single user
router.get("/user/:id", async (req, res) => {
    const listings = await Listing.findAll({ where: { hostId: req.params.id } });
    console.log("here are the listings", listings)
    res.json({ listings })
})

//creating a listing with an image attached
router.post(
    "/",
    multipleMulterUpload("images"),
    requireAuth,
    asyncHandler(async (req, res) => {
        const images = await multiplePublicFileUpload(req.files);
        const { content, dailyPrice, city, state, zipcode } = req.body;
        console.log(state)
        const listing = await Listing.create({
            hostId:req.user.id,
            content,
            imageUrls:images,
            dailyPrice,
            city,
            state,
            zipcode,
        });

        return res.json({
            listing,
        });
    })
);

module.exports = router;