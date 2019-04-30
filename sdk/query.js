let multichain = require("multichain-node")({
    port: 7174,
    host: 'localhost',
    user: "multichainrpc",
    pass: "3AvypeyNhVGZZiVFhvWJMkGCwfjqQUD4B7KcAhDF7Nut"     
});
var marks

function readAllRequest(params) {
    
    return new Promise((resolve) => {
        var scoreDetails = [];
        var scoreDetail = [];
       // var key = params.key
       // console.log("key------>",'"'+key+'"')
        var response;     
    multichain.listStreamItems({stream: "result"}, (err, res) => {
        console.log("res----->",res)
        if(err == null){

            for (let i = 0; i < res.length;i++) {
                var string = '';
                var data=res[i].data;
                for (var j = 0; j < data.length; j += 2) {
                   string += String.fromCharCode(parseInt(data.substr(j, 2), 16))
                    }
                  
                console.log("res----->",res)
                scoreDetails.push({
                                            "publishers": res[i].publishers[0],
                                            "RollNo": res[i].keys,
                                            "Data": string,
                                            "confirmations": res[i].confirmations,
                                            "blocktime": res[i].blocktime,
                                            "txid": res[i].txid,
                                            
                                        });
                

    //     console.log("scoreDetails------->>",scoreDetails);
    //     for (i=0; i<= scoreDetails.length; i++){
    //         console.log(i)
    //         marks = scoreDetails[i].Score
    //         console.log("marks--->", marks)
        
    //     if (marks <= 1) {
    //         status = "Fail"
    //     } else {
    //         status = "Pass"
    //     }
    // }

    scoreDetail.push({
        "publishers": res[i].publishers[0],
        "RollNo": res[i].keys,
        "Score": string,
       // "Status": status,
        "confirmations": res[i].confirmations,
        "blocktime": res[i].blocktime,
        "txid": res[i].txid,
        
    });

}
         return resolve({response:scoreDetail});
        }else{
            console.log(err)
        }
    })

})
   
}

function readRequest(params) {
    
    return new Promise((resolve) => {
        var requestid = params.requestid;   
        var policyDetails = [];
        var response;    
    multichain.listStreamKeyItems({stream: "result","key": key}, (err, res) => {
        console.log("res--->",res)
        if(err == null){

            
                var string = '';
                var data=res[0].data;
                for (var j = 0; j < data.length; j += 2) {
                   string += String.fromCharCode(parseInt(data.substr(j, 2), 16))
                    }
                  
                
                result.push({
                                            "publishers": res[0].publishers[0],
                                            "key": res[0].key,
                                            "data": string,
                                            "confirmations": res[0].confirmations,
                                            "blocktime": res[0].blocktime,
                                            "txid": res[0].txid,
                                            
                                        });
                   

    

         return resolve({response:result});
        }else{
            console.log(err)
        }
    })

})
   
}



module.exports = {
    readAllRequest: readAllRequest,
    readRequest:readRequest
    

};
