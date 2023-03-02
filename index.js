import { createRequire } from "module";
const require = createRequire(import.meta.url);
import NotificationRouter from './router/Notifications.js'

const admin = require('firebase-admin');
const express = require('express');
const app = express();
const cors = require('cors')



var serviceAccount = require("./paperlessapp-dbf5a-firebase-adminsdk-adyp8-f6acf86472.json");
// const { NotificationRouter } = require('./router/Notifications.js');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(express.json());
// app.use('/api/v1', NotificationRouter);
app.use(cors())

app.post('https://gorgeous-deer-onesies.cyclic.app/sendnotification', (req , res)=>{
  // console.log(req.body.tokens)
  const message = {
      notification : {title : "Paperless Cart Updated" , body: "Click to Open"},
      token : req.body.tokens
      // token : 'eV2jjNDjR6StekTOxKW0pZ:APA91bFzGGljoX8Gf9Qcr7FORjbp_xlF_HQ3Q4sZwE65m0D4_HdXp-wHa5xikoz0nbcg4mDOVbRXjoMx0LN8yOoQXw6cmNsQgj_NJstjhkf6lufQYgkz6imZPKiDdCWjjPyv1BZLESf3'
  }
  
  admin.messaging().sendMulticast(message).then(resp=>{
      console.log('notification send')
  }).catch(err=>console.log(err))
  
}) 


app.get('/', (req,res)=>{
  res.send('Notification Server running...')
})

app.listen('5050', ()=>{
    console.log('server running on port 5050')
})
