// Exercise 02: Write a JS program to get the extesion of a file name

// 1º SOLUTION
const fileName = "index.html"
const getFileExtension = (nameFile) => {
    for (let char of nameFile) {
        if (char === ".") {
            const extension = nameFile.slice(nameFile.indexOf(char) + 1)
            console.log(extension)
        }
    }}
getFileExtension(fileName)

// 2º SOLUTION
const nameExtension = (strFile) => {
    const result = strFile.slice(strFile.lastIndexOf(".") + 1)
    console.log(result)
}
const fileName2 = "webpack.config.js"
nameExtension(fileName2)