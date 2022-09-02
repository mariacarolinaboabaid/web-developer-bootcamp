const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];

// WHAT ID MADISON MARSHALL'S USER ID?
const idMadMarshall = users.forEach((person) => {
    if (person["firstName"] === "Madison" && person["lastName"] === "Marshall"){
        console.log(`The UserId of Madison Marshall is: ${person["id"]}.`)
    }
})
console.log("END 1º EXERCISE -------------------------------------------------------------------------------")
// WHO WROTE THE FIRST COMMENT:
const userIdComment = comments[0]["userId"]
const result = users.forEach((person) =>{
    if (person["id"] === userIdComment){
        console.log(`${person["firstName"]} ${person["lastName"]} wrote the first comment.`)
    }
})
console.log("END 2º EXERCISE -------------------------------------------------------------------------------")
// WHICH USER COMMENTED "OK great thanks"
const idUser = comments.filter((comment) => {
    if (comment["text"] === "OK great thanks"){
        return comment
    }
}).map((comment) => comment["userId"])

const nameUser = users.forEach((person)=>{
    if (person["id"] === idUser[0]){
        console.log(`${person["firstName"]} ${person["lastName"]} who commented.`)
    }
})
console.log("END 3º EXERCISE -------------------------------------------------------------------------------")
// ADD THE USER`S FIRST AND LAST NAME TO EACH COMMENT IN THE COMMENTS ARRAY:
const addNames = users.forEach((person)=>{
    for (let comment in comments){
        if (person["id"] === comments[comment]["userId"]){
            comments[comment]["firstName"] = person["firstName"]
            comments[comment]["lastName"] = person["lastName"]
        }
    }
})
console.log(comments)
console.log("END 4º EXERCISE -------------------------------------------------------------------------------")
// GET THE LIST OF USERS THAT DID NOT COMMENT:
const idComments = comments.map((comment)=> (
    comment["userId"]
))

const userNoComment = users.filter((person) =>{
    const arrayBoolean = []
    for (let id of idComments){
        if (person["id"] === id){
            arrayBoolean.push(true)
        }
    }
    if (arrayBoolean.length === 0){
        return person
    }
})
for (let user of userNoComment){
    console.log(`${user["firstName"]} ${user["lastName"]} did not comment.`)
}
console.log("END 5º EXERCISE -------------------------------------------------------------------------------")