const express = require("express")
const db = require("../data/config")
const router = express.Router()

//GET ALL
router.get("/", async (req, res, next) => {
    try {
        res.json(await db("resources"))
    } catch (error) {
        next(error)
    }
})

//GET BY :ID
router.get("/:id", async (req, res, next) => {
    try {
        const resource = await db("resources").where("id", req.params.id).first()//limit 1

        if (!resource) {
            return res.status(404).json({message: "resource by said ID not found"})
        }
        res.json(resource)
    } catch (error) {
        next(error)
    }
})


//POST
router.post("/", async (req, res, next) => {
    try {
        await db("resources").insert(req.body)
        res.status(201).json(req.body)
    } catch (error) {
        next(error)
    }
})

//DELETE


router.delete("/:id", async (req, res, next) => {
	try {
		await db("resources").where("id", req.params.id).del()
		res.status(204).end()
	} catch (error) {
		next(error)
	}
})

module.exports = router