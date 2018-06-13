'use strict';

const doc = require('../models/motorsavepolicy');
var bcSdk = require('../sdk/invoke'); //involeSdk

exports.AddScore = (rollNo, score) =>{
console.log("score============>",score)
 return new Promise((resolve, reject) => {
     var marks=0;
    doc.find({}).then(results=>{
        for(let i=0;i<results.length;i++){

            if(results[i]._doc.value===score[i]){
                marks++
                console.log(marks)
            }else{
                console.log("Wrong Answer")
            }

            if(i==results.length-1){

        var result = ({
            rollNo: rollNo,
           score: marks,
            created_at: new Date()
       })
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