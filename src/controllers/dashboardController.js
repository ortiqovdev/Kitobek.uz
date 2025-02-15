// const books = require("../models/books");
const mongoose = require("mongoose");

exports.dashboard = async (req, res) => {
    res.render('dashboard/dash-index', {
        title: "Kitobek | Dashboard",
        userName: req.user.firstName,
        ProfilePhoto: req.user.profileImage,
        userFull: req.user.displayName,
        userEmail: req.user.email,
    });
};
exports.myProfile = async (req, res) => {
    res.render('dashboard/profile', {
        title: "Kitobek | Mening sahifam",
        ProfilePhoto: req.user.profileImage,
        userFull: req.user.displayName,
        userEmail: req.user.email,
    });
};
exports.allChat = async (req, res) => {

    res.render('dashboard/chat',  {
        title: "Kitobek | Umumiy chat",
        ProfilePhoto: req.user.profileImage,
        userFull: req.user.displayName,
        userEmail: req.user.email,
    });
};
exports.allBooks = async (req, res) => {

    res.render('dashboard/all-books',  {
        title: "Kitobek | Barcha kitoblar",
        ProfilePhoto: req.user.profileImage,
        userFull: req.user.displayName,
        userEmail: req.user.email,
    });
};
exports.setting = async (req, res) => {

    res.render('dashboard/setting',  {
        title: "Kitobek | Sozlamalar",
        ProfilePhoto: req.user.profileImage,
        userFull: req.user.displayName,
        userEmail: req.user.email,
        firstName:req.user.firstName,
        lastName:req.user.lastName
    });
};
// exports.countUsers = async () => {
//     try {
//         const count = await User.countDocuments(); 
//         return count; 
//     } catch (error) {
//         console.error("Foydalanuvchilar sonini hisoblashda xatolik yuz berdi:", error);
//         throw new Error("Foydalanuvchilar sonini hisoblashda xatolik yuz berdi");
//     }
// };