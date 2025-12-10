const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
const Teacher =require("./models/teacher")
const Staff = require("./models/Staff")
const User = require("./models/User")
const Student = require("./models/Student")
const mongoose = require('mongoose');
const Exam = require("./models/exam");
const teacher = require('./models/teacher');
mongoose.connect("mongodb://127.0.0.1:27017/db_LMS")
  .then(() => {
    console.log("mongo db is successfully connected ");
  }).catch((error) => {
    console.log(error);
  })
// register
app.post('/auth/register', async (req, res) => {
  const user = new User(req.body);
  await user.save()
  return res.status(200).json({
    status: true,
    message: "user register",
    user: user,
  });
});
// login
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({
      status: false,
      message: 'user not find'
    })
  }
  if (user.password !== password) {
    return res.status(401).json({
      status: false,
      message: "invalid"
    })
  }
  return res.status(200).json({
    status: true,
    message: "Login successfully"
  })
})
app.post("/student", async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    const student = new Student(req.body);
    await student.save();

    return res.status(200).json({
      status: true,
      message: "Student Profile Saved Successfully",
      data: student
    });

  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      status: false,
      message: "Failed to save student",
      error: error.message
    });
  }
});
// exam
app.post("/exam", async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    // Create Exam Document
    const newExam = new Exam(req.body);

    // Save in Database
    await newExam.save();

    res.status(200).json({
      status: true,
      message: "Student Result Saved Successfully",
      data: newExam
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      status: false,
      message: "Failed to save student",
      error: error.message
    });
  }
});

// detail
app.post("/detail", async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    const student = new Student(req.body);
    await student.save();

    return res.status(200).json({
      status: true,
      message: "Student Profile Saved Successfully",
      data: student
    });

  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      status: false,
      message: "Failed to save student",
      error: error.message
    });
  }
});
// nstaff
app.post("/staf", async (req, res) => {
  try {
    console.log("Receied Data", req.body);
    const staff = new Staff(req.body);
    await staff.save();
    return res.status(200).json({
      status: true,
      message: "Profile Saved Successfully",
      data: staff
    });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({
      status: false,
      message: "failed to saved",
      error: error.message
    })
  }
});

// teacher
app.post("/teacher", async (req, res) => {
  try {
    console.log("received data", req.body);
    const teacher = new Teacher(req.body);
    await teacher.save();
    return res.status(200).json({
      status:true,
      message:"profile saved successfuly",
      data:teacher
    });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({
      status:false,
      message:"failed to saved",
      error:error.message
    })
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
