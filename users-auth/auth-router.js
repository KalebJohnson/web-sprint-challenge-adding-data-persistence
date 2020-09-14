const router = require('express').Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("./auth-model")

router.post('/register', async (req, res, next) => {
	try {
		const { username, password} = req.body
		const user = await Users.findBy({ username }).first()

		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newUser = await Users.add({
			username,
			password: await bcrypt.hash(password, 5),
			
		})

		res.status(201).json({message: `Welcome, ${newUser.username}!`})
	} catch(err) {
		next(err)
	}
});


router.post('/login', async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await Users.findBy({ username }).first()
		
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}


		const passwordValid = await bcrypt.compare(password, user.password)


		if (!passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}


		const token = jwt.sign({
			userID: user.id,
			userRole: user.department,
    }, "envVAR")
    //should be a hidden env variable but this isnt used code soooo


		res.json({
            message: `Welcome back, ${user.username}!`,
            token
		})
	} catch(err) {
		next(err)
	}
});

//GET ALL USERS
router.get("/users", async (req, res, next) => {
    try {

		const users = await Users.find()

        res.json(users)
    } catch (error) {
        next(error)
    }
})

//GET USER BY :ID
router.get("/user/:id", async (req, res, next) => {
    try {
		const { id } = req.params
        const user = await Users.findById(id)

        if (!user) {
            return res.status(404).json({message: "User not found"})
		}
		
		

        res.json({message: user.username})
    } catch (error) {
        next(error)
	}
})

//GET USER INFO
router.get("/user/:id", async (req, res, next) => {
    try {
		const { id } = req.params
        const user = await Users.findById(id)

        if (!user) {
            return res.status(404).json({message: "User not found"})
		}
		
		

        res.json({message: user.username})
    } catch (error) {
        next(error)
	}
})

//DELETE BY :ID
router.delete("/user/del/:id", async (req, res, next) => {
	try {
		const { id } = req.params
        const user = await Users.findById(id).del()

        if (!user) {
            return res.status(404).json({message: "User not found"})
		}
		
		res.status(204).end()
	} catch (error) {
		next(error)
	}
})
module.exports = router;