'use strict';
const http = require('http');
const fs = require('fs');


class Cuexpress{

  constructor(){
    this.server=http.createServer();
    this.handlers={};
  }
  get(url,handler){
    this.handlers[url]=handler;
  }

  listen(port,callback){

     this.server.listen(port);
     callback();
     this.init();


 }


  init(){
     this.server.on('request', (request, response)=>{
     //    let requestBody = [];

    //     request.on('data', (chunk) => {

    //         requestBody.push(chunk);

    //       }).on('end', () => {

    //         requestBody = Buffer.concat(requestBody).toString();

    //         response.on('error', (err) => {
    //             console.error(err);
    //         });

    // });
      response.send=function(str){
      response.write(str);
      response.end();
      }
      if(request.url!="/favicon.ico"){
        var callback2=this.handlers[request.url];
       console.log("this url is :" +request.url);
       callback2(request, response);
      }


  });
 }
}

module.exports = Cuexpress;