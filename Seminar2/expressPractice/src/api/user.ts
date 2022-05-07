import express, { Router } from "express";

const router: Router = express.Router();

router.get(`/`, ((req, res) => {
    return res.status(200).json({
        status: 200,
        message: `success`,
    });
}));

module.exports = router;