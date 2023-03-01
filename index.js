// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const admin = require('firebase-admin');
const express = require('express');
const app = express();


var serviceAccount = require("./paperlessapp-dbf5a-firebase-adminsdk-adyp8-f6acf86472.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(express.json());

app.post('/sendnotification', (req , res)=>{
    console.log(req.body)
    // const message = {
    //     notification : {title : "Paperless Cart Updated" , body: "Click to Open"},
    //     token : "eV2jjNDjR6StekTOxKW0pZ:APA91bFzGGljoX8Gf9Qcr7FORjbp_xlF_HQ3Q4sZwE65m0D4_HdXp-wHa5xikoz0nbcg4mDOVbRXjoMx0LN8yOoQXw6cmNsQgj_NJstjhkf6lufQYgkz6imZPKiDdCWjjPyv1BZLESf3",
    // }
    
    // admin.messaging().send(message).then(resp=>{
    //     console.log('notification send')
    // }).catch(err=>console.log(err))

})

app.listen('5050', ()=>{
    console.log('server running on port 5050')
})
