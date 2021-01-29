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

//creating a listing with an image attached
router.post(
    "/listings",
    singleMulterUpload("image"),
    // validateSignup,
    asyncHandler(async (req, res) => {
        const { hostId, content, dailyPrice, city, state, zipcode } = req.body;
        const imageUrl = await singlePublicFileUpload(req.file);
        const user = await Listing.create({
            hostId,
            content,
            dailyPrice,
            city,
            state,
            zipcode,
            imageUrls: [imageUrl],
        });

        setTokenCookie(res, user);

        return res.json({
            user,
        });
    })
);

module.exports = router;