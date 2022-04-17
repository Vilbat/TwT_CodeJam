var oldButton
let counter = 0

function newButton() {
    if (oldButton != undefined) {
        oldButton.parentElement.removeChild(oldButton)
    }

    oldButton = document.createElement("button")
    oldButton.innerHTML = "click this"
    document.body.appendChild(oldButton)

    let height = 500
    let width= 1080

    let randY = Math.floor((Math.random() * height) + 1);
    let randX = Math.floor((Math.random() * width) + 1);
    oldButton.style.transform = `translate(${randX}px, ${randY}px)`;

    if (counter >= 5) {
        window.location.href = "Result/index.html"
    }

    counter += 1
}

setInterval(newButton, 1000)