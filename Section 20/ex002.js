function capitalize (str){
    if (!str){
        return false;
    }
    else{
        let strCapitalize = str[0].toUpperCase(); 
        let restStr = str.slice(1).toLowerCase();
        let result = strCapitalize + restStr;
        return result
    }
}

let result = capitalize('aMor');
console.log(result)

