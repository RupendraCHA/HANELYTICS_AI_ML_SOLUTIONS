const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require("./Models/Employee")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const { MongoClient } = require("mongodb")

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
        credentials: true
    }
))

app.use(cookieParser())


const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
        return res.json("The token was not available!")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return res.json("Token is wrong!")
            next()
        })
    }
}

async function fetchData() {


}

app.get("/getInventoryData", async (req, res) => {
    const uri = 'mongodb+srv://rupendrachandaluri:R9912192624r@cluster0.iqrea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(uri)

    try {
        await client.connect()

        const database = client.db("Inventory_Predictions_Database")
        const collection = database.collection("Predicted_Results")

        const allDocuments = await collection.find().toArray()
        return res.json(allDocuments)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
})

app.get("/getRevenueData", async (req, res) => {
    const uri = 'mongodb+srv://rupendrachandaluri:R9912192624r@cluster0.iqrea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(uri)

    try {
        await client.connect()

        const database = client.db("database_of_revenue_details")
        const collection = database.collection("predicted_revenue_results")
        // const database = client.db("revenue_dataset")
        // const collection = database.collection("revenue_results")

        const allDocuments = await collection.find().toArray()
        return res.json(allDocuments)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
})

app.get("/getEquipmentData", async (req, res) => {
    const uri = 'mongodb+srv://rupendrachandaluri:R9912192624r@cluster0.iqrea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(uri)

    try {
        await client.connect()

        const database = client.db("Equipment_Data_With_Random_Regressor")
        const collection = database.collection("predicted_cycles")

        const allDocuments = await collection.find().toArray()
        return res.json(allDocuments)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
})

app.get("/getClinicalData", async (req, res) => {
    const uri = 'mongodb+srv://rupendrachandaluri:R9912192624r@cluster0.iqrea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(uri)

    try {
        await client.connect()

        const database = client.db("database_of_clinical_details")
        const collection = database.collection("predicted_clinical_data")

        const allDocuments = await collection.find().toArray()
        return res.json(allDocuments)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
})

app.get("/home", verifyUser, (req, res) => {
    return res.json("Successful")
})

app.get("/logout", (req, res) => {
    res.clearCookie("token")
    return res.json("Logout Successful!")
})

app.post("/login", (req, res) => {
    const { email, password } = req.body
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "1d" })
                        res.cookie("token", token)
                        // localStorage.setItem("Token", token)
                        res.json("Login Successful!")
                    }
                    else {
                        res.json("Password is Incorrect.")
                    }
                })
            } else {
                res.json("User doesn't exist, Register and try Login again!")
            }
        })
})

// app.post("/login", async (req, res) => {
//     const {email, password} = req.body
//     try {
//         const user = await EmployeeModel.findOne({email})

//         const isMatched = await bcrypt.compare(password, user.password)

//         if (!isMatched) {
//             // return res.json({success: false, message: "Password is Incorrect"})
//             // res.json("User doesn't exist, Register and try Login again!")
//             return res.json("Password is Incorrect.")

//         }

//         // Checking user registered or not
//         if (!user) {
//             // return res.json({success: false, message: "User doesn't exist"})
//             return res.json("User doesn't exist, Register and try Login again!")

//         } else {
//             const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "1d" })
//             res.cookie("token", token)
//             return res.json("Login Successful!")
//         }

//     }
//     catch (error) {
//         console.log(error)
//         res.json({success: false, message: "Error"})
//     }
// })

app.post('/register', (req, res) => {

    const { name, email, password } = req.body
    bcrypt.hash(password, 10)
        .then(hash => {
            EmployeeModel.create({ name, email, password: hash })
                .then(employees => res.json(employees))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))

})

// app.post("/register", async (req, res) => {
//     const {name, email, password} = req.body

//     try {
//         const exists = await EmployeeModel.findOne({email})

//         // Checking, is user already exists
//         if (exists) {
//             return res.json({success: false, message: "User already exists"})
//         }
//         //hashing the password
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt)

//         const newUser = new EmployeeModel({
//             name: name,
//             email: email,
//             password: hashedPassword
//         })

//         const user = await newUser.save()
//         // const token = createToken(user._id)
//         res.json({success: true, token, name})

//     }
//     catch (error) {
//         console.log(error.message)
//         // res.json({success: false, message: "Error"})
//     }
// }
// )

app.get("/", (req, res) => {
    res.send("API is Working");
})

const port = 3001;

const connectToMongoDB = async () => {

    await mongoose.connect("mongodb+srv://rupendrachandaluri:R9912192624r@cluster0.iqrea.mongodb.net/Hanelytics_Database?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("Connected to MongoDB is Successful!")
        }).catch((err) => {
            console.log(err)
        })
    app.listen(port, () => {
        console.log(`Server is started on http://localhost:${port}`)
    })
}

connectToMongoDB()