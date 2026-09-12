const protect = require("../middleware/authMiddleware");
const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
router.use(protect);

//CREATE
router.post("/", async (req, res) => {
    try {
        if (!req.body.title) {
            return res.status(400).json({
                message: "Title is required",
            });
        }

        const task = await Task.create({
            title: req.body.title,
            user: req.user,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

// READ
router.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        const tasks = await Task.find({
            user: req.user,
        })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const totalTasks = await Task.countDocuments({
            user: req.user,
        });

        const totalPages = Math.ceil(totalTasks / limit);

        res.json({
            tasks,
            currentPage: page,
            totalPages,
            totalTasks,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user
            },
            req.body,
            {
                new: true,
                runValidators: true,
            });

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            user: req.user
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        res.json({
            message: "Task deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});



module.exports = router;
