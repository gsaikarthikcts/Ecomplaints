var express = require("express")
var app = express();
const bodyParser = require("body-parser")
const cors = require('cors');
// npm install cors
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connection of mongoose
//Step 1 (npm install mongoose) get api
var mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1/testing',{
    useNewUrlParser: true,
    useUnifiedTopology: false
}).then(() => {
    console.log('DB Connection Successfull')
}).catch((err) => {
    console.error(err);
});

//get request for complaint details
//step 3
var empModel = require('./models/emp.model')
app.get("/userDetails",async (req,res)=>{
    const result = await empModel.find();
    console.log(result);
    res.send(result);
})

//get request for feedback
var getfeedModel = require('./models/getfeed.model')
app.get("/feedback",async (req,res)=>{
    const resultfeed = await getfeedModel.find();
    console.log(resultfeed);
    res.send(resultfeed);
})


//post request for complaint details
var postModel = require('./models/post.model')
//post api(npm install body-parser)
app.route("/addEmp").post(async (req, res) => {
    console.log(req.body);
    let user = new postModel({
        name : req.body.name,
        phonenumber : req.body.phonenumber,
        complaintid : req.body.complaintid,
        email : req.body.email,
        subject : req.body.subject,
        complaint : req.body.complaint
    });
    user.save().then((_) => {
        res.json({success:true, message:"Employee Details Added"})
    })
        .catch((error) => {
            res.json({success:false, message:"Something went wrong"})
        });
})





//post request for feedback
var postfeedModel = require('./models/postfeed.model')
app.route("/addReq").post(async (req, res) => {
    console.log(req.body);
    let user1 = new postfeedModel({
        feedback : req.body.feedback
    });
    user1.save().then((_) => {
        res.json({success:true, message:"Feedback Added"})
    })
        .catch((error) => {
            res.json({success:false, message:"Something went wrong"})
        });
})


//post request for registration
var postsigninModel = require('./models/postsignin.model')
app.route("/signin").post(async (req, res) => {
    console.log(req.body);
    let user2 = new postsigninModel({
        email : req.body.email,
        password : req.body.password
    });
    user2.save().then((_) => {
        res.json({success:true, message:"Registeration Successfully Done!"})
    })
        .catch((error) => {
            res.json({success:false, message:"Something went wrong"})
        });
})


//admin login for verification
var Admin = require('./models/admin.model'); 
  app.post('/adminlogin', (req, res) => {
    const { username, password } = req.body;
    Admin.findOne({ username: username, password: password })
      .exec() // Add .exec() to execute the query
      .then((admin) => {
        if (!admin) {
          res.status(401).json({ message: 'Invalid username or password' });
        } else {
          res.status(200).json({ message: 'Login successful' });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: 'Internal server error' });
      });
  });
  

//customer login for varification
  var Customer = require('./models/customer.model'); 
  app.post('/customerlogin', (req, res) => {
    const { username, password } = req.body;
    Customer.findOne({ username: username, password: password })
      .exec() // Add .exec() to execute the query
      .then((admin) => {
        if (!admin) {
          res.status(401).json({ message: 'Invalid username or password' });
        } else {
          res.status(200).json({ message: 'Login successful' });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: 'Internal server error' });
      });
  });




// PUT request for updating complaint details
app.put("/userDetails/:complaintid", async (req, res) => {
  const { complaintid } = req.params;
  const { priority, status } = req.body;
  try {
    const updatedEmp = await empModel.findOneAndUpdate(
      { complaintid: complaintid },
      { priority: priority, status: status },
      { new: true }
    );
    if (updatedEmp) {
      res.json({
        success: true,
        message: "Employee Details Updated",
        data: updatedEmp,
      });
    } else {
      res.json({
        success: false,
        message: "Complaint not found",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
    });
  }
});



// PUT request for updating complaint Priority
app.put("/userDetails/:complaintid/priority", async (req, res) => {
  const { complaintid } = req.params;
  const { priority } = req.body;
  try {
    const updatedEmp = await empModel.findOneAndUpdate(
      { complaintid: complaintid },
      { priority: priority },
      { new: true }
    );
    if (updatedEmp) {
      res.json({
        success: true,
        message: "Priority updated successfully",
        data: updatedEmp,
      });
    } else {
      res.json({
        success: false,
        message: "Complaint not found",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
    });
  }
});



// Update the GET request route for complaint details
//complaint status print
app.get("/userDetails/:complaintid", async (req, res) => {
  const { complaintid } = req.params;
  try {
    const result = await empModel.findOne({ complaintid: complaintid });
    if (result) {
      res.json(result);
    } else {
      res.json({
        success: false,
        message: "Complaint not found",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
    });
  }
});


//For Express
// app.get("/userDetails",(req,res)=>{
//     var userObject=[{
//         "userId": 123,
//         "id": 22648,
//         "title": "example",
//         "body": "CTS",
//         "firstName":"SAIKARTHIK"
//     },
//     {
//         "userId": 456,
//         "id": 5667,
//         "title": "example1",
//         "body": "Cognizant",
//         "firstName":"Bobby"
//     }]
//     res.send(userObject)
// })

app.listen(3000);