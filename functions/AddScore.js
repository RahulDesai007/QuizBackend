'use strict';

const doc = require('../models/motorsavepolicy');
var bcSdk = require('../sdk/invoke'); //involeSdk
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '200cd9c0',
    apiSecret: 'GKXGSSYsGR3cF7ss',
  });

exports.AddScore = (rollNo, score, name, mobNo) =>{
console.log("score============>",score)
 return new Promise((resolve, reject) => {
     var marks=0;
     var status;
    doc.find({}).then(results=>{
        for(let i=0;i<results.length;i++){

            if(results[i]._doc.value===score[i]){
                marks++
                console.log(marks)
                if (marks <= 2) {
                    status = "Fail"
                } else {
                    status = "Pass"
                }
            }else{
                console.log("Wrong Answer")
            }

            if(i==results.length-1){

        var result= ({
            rollNo: rollNo,
           score: marks,
           status: status,
            created_at: new Date()
       })

       console.log("result---->", result)

       const message = {
        content: {
          type: 'Marks',
          text: result.score,
        },
      };
    //   const from = 'Exam Score'
    //   const to = '919820724476'
    //   const text = 'Hello Your Child has Scored' + message.content.text + 'Marks in Exam'
    //   nexmo.message.sendSms(from, to, text, {type : 'unicode'},
    //   (err, responseData)=> {
    //       if(err){
    //           console.log("err from nexmo",err);
    //       } else {
    //           console.log ("--->",responseData)
    //       }
    //   })

       bcSdk.addData({
            
            result: result
           
            
        }).then((result) =>{
            
            return resolve({
                "status": 200,
                "message": "Your Information is stored into blockchain",
                "score":marks
            })
        
    })
    .catch(err => {


        reject({
            "status": 500,
            "message": 'Something went wrong please try again later!!'
        });

    });

            }
        }
    
    })

           
        

        
                });
            }