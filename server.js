const express = require("express");
const app = express();
require('dotenv').config()

app.get('/',(req,res)=>{
  const {code,state} =req.query
  console.log(code,state);
  res.redirect(`https://prego-server.onrender.com/catchOauthToken?code=${code}&state=${state}`)
  
})

app.get('/get',(rea,res)=>{
    console.log(process.env.PORT);
})
app.get("/catchOauthToken", (req, res) => {
  const authorizationCode = req.query.code;
  if (authorizationCode) {
    console.log("Received Authorization Code:", authorizationCode);
    // res.json(authorizationCode)
    res.redirect('https://pregoclient.netlify.app/?token='+authorizationCode);
  } else {
    res.send("Error: No authorization code provided.");
  }
});
app.listen(process.env.PORT||3000, () => {
  console.log("Server is running and waiting for the authorization code.");
});
 //----------------------local connection uri----------------
//  const express = require("express");
// const app = express();
// require('dotenv').config()

// app.get('/',(req,res)=>{
//   const {code,state} =req.query
//   console.log(code,state);
//   res.redirect(`https://prego-server.onrender.com/catchOauthToken?code=${code}&state=${state}`)
  
// })

// app.get('/get',(rea,res)=>{
//     console.log(process.env.PORT);
// })
// app.get("/catchOauthToken", (req, res) => {
//   const authorizationCode = req.query.code;
//   if (authorizationCode) {
//     console.log("Received Authorization Code:", authorizationCode);
//     // res.json(authorizationCode)
//     res.redirect('http://localhost:3000?token='+authorizationCode);
//   } else {
//     res.send("Error: No authorization code provided.");
//   }
// });
// app.listen(process.env.PORT||3000, () => {
//   console.log("Server is running and waiting for the authorization code.");
// });
