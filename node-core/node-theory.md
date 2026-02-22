we removed all the dom manipulation/UI related kaam sab nikaal dia node.js mei 
toh window vagera will not work/ not available with node.js

because we need only server side things 

so we cannot just say that pura V8 engine nikaal ke C++ embedd krdia 
bohto kuch add kara hai and bohot kuch remove bhi kia hai 

especially DOM related sab nikaal dia 

like in c++ we use #include 
in javascript we use import-export 

for node.js we use 
require()
to import/ use modules 

modules are individual file 
if we do only require("")
"..." then it will start finding that module in his built in packages 
but if we want to find that module in our own codebase we will use 
const math  = require("./math")


if we don't use export the functions in the file remain private 
usko public that is accessible to other krna ho toh 
default use karna padega 

require is not in js 
it is only in node.js

require is used to import modules 
and store that module in a variable 

module.exports()
is export

require is import 
""
built in packages dekh sakte hai 
eg:fs for file handling 
http to make web servers