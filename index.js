// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const admin = require('firebase-admin');
const express = require('express');
const app = express();
const cors = require('cors')


var serviceAccount = require("./paperlessapp-dbf5a-firebase-adminsdk-adyp8-f6acf86472.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(express.json());
app.use(cors())

app.post('/sendnotification', (req , res)=>{
  console.log(req.body)
    // const message = {
    //     notification : {title : "Paperless Cart Updated" , body: "Click to Open"},
    //     tokens : req.body.tokens
    // }
    
    // admin.messaging().sendToDevice(message).then(resp=>{
    //     console.log('notification send')
    // }).catch(err=>console.log(err))

}) 
app.get('/', (req,res)=>{
  res.send('Notification Server running...')
})

app.listen('5050', ()=>{
    console.log('server running on port 5050')
})
