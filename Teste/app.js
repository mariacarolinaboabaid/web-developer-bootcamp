const selection = document.getElementById("test")
const btn = document.querySelector("button")


function clear(select) {
    for (let i = 0; i < select.length; i++) {
        if (select.options[i].selected) {
            select.options[i].selected = false;
        }
    }
}

btn.addEventListener("click", function(){
    clear(selection)
})