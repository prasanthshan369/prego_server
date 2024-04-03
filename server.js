const express = require("express");
const app = express();
require('dotenv').config()
app.get('/get',(rea,res)=>{
    console.log(process.env.PORT);
    res.send("its Working")
})
app.get("/catchOauthToken", (req, res) => {
  const authorizationCode = req.query.code;
  if (authorizationCode) {
    console.log("Received Authorization Code:", authorizationCode);
      res.json(authorizationCode)
  } else {
    res.send("Error: No authorization code provided.");
  }
});
app.listen(process.env.PORT||3000, () => {
  console.log("Server is running and waiting for the authorization code.");
});
