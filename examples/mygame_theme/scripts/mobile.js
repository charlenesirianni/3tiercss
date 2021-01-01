// Hide and show the details overlay

document.getElementById("id-item-01").addEventListener("click", function () {
    ShowDetails();
}, false);


function ShowDetails() {
    document.getElementById("id-details-overlay").classList.remove("hide");
    document.getElementById("id-details-overlay").classList.add("ani-slide-up");
}

document.getElementById("id-details-close").addEventListener("click", function () {
    HideDetails();
}, false);

function HideDetails() {
    document.getElementById("id-details-overlay").classList.remove("ani-slide-up");
    document.getElementById("id-details-overlay").classList.add("hide");
}