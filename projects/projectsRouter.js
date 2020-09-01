const express = require("express")
const db = require("../data/config")
const router = express.Router()

//GET ALL
router.get("/", async (req, res, next) => {
    try {
        res.json(await db("projects"))
    } catch (error) {
        next(error)
    }
})

//GET BY :ID
router.get("/:id", async (req, res, next) => {
    try {
        const project = await db("projects").where("id", req.params.id).first()//limit 1

        if (!project) {
            return res.status(404).json({message: "project with said ID not found"})
        }

        res.json(project)
    } catch (error) {
        next(error)
    }
})

//POST 
router.post("/", async (req, res, next) => {
    try {
        await db("projects").insert(req.body)
        res.status(201).json(req.body)
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async (req, res, next) => {
	try {
		await db("projects").where("id", req.params.id).del()
		res.status(204).end()
	} catch (error) {
		next(error)
	}
})

module.exports = router