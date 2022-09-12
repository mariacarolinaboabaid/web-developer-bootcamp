const fakeResquest = (delay, sucess, failure) => {
    if (delay > 500) {
        failure("error")
    }
    else {
        sucess("Ihul it worked!")
    }
}
fakeResquest(400, function (message) {
    console.log("Sucess!!!", message)
    // IF SUCESS, GOING TO THE 2 CALLBACK
    fakeResquest(300, function (message) {
        console.log("Sucess!!!", message)
        // IF SUCESS GOING TO 3 CALLBACK
        fakeResquest(700, function (message) {
            console.log("Sucess!!!", message)
        },
        // IF FAILURE OF THE 3 CALLBACK
            function (message2) {
                console.log("Failure", message2)
            })
    },
        // IF FAILURE OF THE 2 CALLBACK
        function (message2) {
            console.log("Failure", message2)
        })
},
    // IF FAILURE OF THE 1 CALLBACK
    function (message2) {
        console.log("Failure", message2)
    })



