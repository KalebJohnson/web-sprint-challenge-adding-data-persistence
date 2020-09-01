const express = require("express")
const db = require("../data/config")
const tasks = require("./taskmodel")

const router = express.Router()

//GET ALL

router.get("/", async (req, res, next) => {
    tasks
    .findTasks()// with projects!
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch((err) => next(err))
})

//GET BY :ID

router.get("/:id", async (req, res, next) => {
    try {
        const task = await db("tasks").where("id", req.params.id).first()//limit 1

        if (!task) {
            return res.status(404).json({message: "task by said ID not found"})
        }
        res.json(task)
    } catch (error) {
        next(error)
    }
})

//POST

router.post("/", async (req, res, next) => {
    try {
        await db("tasks").insert(req.body)
        res.status(201).json(req.body)
    } catch (error) {
        next(error)
    }
})

//DELETE

router.delete("/:id", async (req, res, next) => {
	try {
		await db("tasks").where("id", req.params.id).del()
		res.status(204).end()
	} catch (error) {
		next(error)
	}
})

module.exports = router