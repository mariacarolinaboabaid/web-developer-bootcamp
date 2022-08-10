function callTwice (f){
    f()
    f()
}

function name(){
    console.log("Hey, Maria!")
}

function name2(){
    console.log("Hey, Carolina!")
}

callTwice(name); 
callTwice(name2); 
