const fs = require("fs");

//this module can give you info about your OS 

const os = require("os");

//  ./ se voh apni directory mei dhundhega (apna codebase jispe kaam kar rhe hai)

//this overwrites

fs.writeFileSync("./test.txt", "Hello World");

//but if we want to append

//to locale string isliye kia because it expects string in the arguement
//you can hover the function and see what it expects in the arguement

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString)

//"utf-8" is we are giving the read function heads up that 
//it will be encoded in utf-8 so do accordingly 

const result = fs.readFileSync("./contacts.txt", "utf-8");

console.log(result);

//the sync ones return a result 
//the async ones don't return a result they expect a callback funcition
//to handle it 

//async mei different parameters
//it expects a callback function
//because the async does not return anything 
//the async does not return 
//they both expect a call back function

const result2 = fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
})

//to copy a file
fs.cpSync("./test.txt", "./copy.txt");


//to delete we have unlink
fs.unlinkSync(".copy.txt");


//Async is non-blocking operation 
//Sync is blocking operation 
