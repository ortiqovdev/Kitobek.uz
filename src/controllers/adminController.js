const mongoose = require("mongoose");

exports.admin = async (req, res) => {
    res.render('admin/index', {
        title: "Kitobek | Admin",
        userName: req.user.firstName,
        ProfilePhoto: req.user.profileImage,
        userFull: req.user.displayName,
        userEmail: req.user.email,
    });
};