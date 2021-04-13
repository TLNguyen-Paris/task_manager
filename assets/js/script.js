const modal = document.getElementById("myModal");

const span = document.getElementsByClassName("close")[0];

const btns = document.getElementsByClassName("toggle_modal");

for (const btn of btns) {
    btn.onclick = function(){
        console.log("yes");
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
