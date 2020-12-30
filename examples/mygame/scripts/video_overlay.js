document.getElementById("id-panel").addEventListener("dblclick", function () {
    event.stopPropagation();
}, false);

// Adjust layout for the theater mode

if (window.Twitch.ext) {

    window.Twitch.ext.onContext(function (context, contextFields) {
        // console.log(context);
        // console.log(contextFields);
        if (context.isTheatreMode == true) {
            document.getElementById("id-panel").classList.add("mygame-panel--theater");
        }
        else {
            document.getElementById("id-panel").classList.remove("mygame-panel--theater");
        }
    });

}

// Simulate the loading state

window.addEventListener("load", function () {
    document.getElementById("id-inventory").style.display = "none";
    showLoader = setTimeout(function () {
        InventoryLoaded();
    }, 3000);
});

function InventoryLoaded() {
    document.getElementById("id-loader").style.display = "none";
    document.getElementById("id-inventory").style.display = "initial";
}

// Hide and show the extension on mouse over the video display area

document.getElementById("id-canvas").addEventListener("mouseover", function () {
    ShowPanel();
}, false);

function ShowPanel() {
    document.getElementById("id-panel").style.animationName = "ani-slide-right";
}

document.getElementById("id-canvas").addEventListener("mouseout", function () {
    HidePanel();
}, false);

function HidePanel() {
    document.getElementById("id-panel").style.animationName = "ani-slide-out-left";
}


// Hide and show the details panel

document.getElementById("id-item-01").addEventListener("mouseenter", function () {
    ShowDetails01();
}, false);

document.getElementById("id-details-panel").addEventListener("mouseenter", function () {
    clearTimeout(delayDetails);
    ShowDetails01();
}, false);

function ShowDetails01() {
    document.getElementById("id-details-panel").classList.remove("hide");
    document.getElementById("id-details-panel").classList.add("ani-fade-in");
}

document.getElementById("id-item-01").addEventListener("mouseleave", function () {
    delayDetails = setTimeout(function () {
        HideDetails01();
    }, 300); // Allow time to move mouse onto the details window
});

document.getElementById("id-details-panel").addEventListener("mouseleave", function () {
    document.getElementById("id-details-panel").classList.add("hide");
}, false);

function HideDetails01() {
    document.getElementById("id-details-panel").classList.remove("ani-fade-in");
    document.getElementById("id-details-panel").classList.add("hide");
}
