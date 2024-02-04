//get reference to the button
const columnTwo = document.getElementById("two");
const btn_Toogle = document.getElementById("button");


//listen for events
btn_Toogle.addEventListener("click", toggleColumn);

let isHidden = true;


function toggleColumn() {
    if (isHidden) {
        columnTwo.classList.add("hidden");
    } else {
        columnTwo.classList.remove("hidden");
    }
    isHidden = !isHidden;
    console.log("hi!!!");
}