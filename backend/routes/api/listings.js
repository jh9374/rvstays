const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Listing } = require('../../db/models');

const {
    singleMulterUpload,
    singlePublicFileUpload,
    multipleMulterUpload,
    multiplePublicFileUpload,
} = require("../../awsS3");

const router = require('./users');



router.get("/listings", async(req, res) => {
    const listings = await Listing.findAll();
    console.log("here is the listings", listings)
    res.json({listings})
})

//uploading image
router.post(
    "/listings",
    singleMulterUpload("image"),
    // validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const imageUrl = await singlePublicFileUpload(req.file);
        const user = await User.signup({
            username,
            email,
            password,
            imageUrls: imageUrl,
        });

        setTokenCookie(res, user);

        return res.json({
            user,
        });
    })
);

module.exports = router;