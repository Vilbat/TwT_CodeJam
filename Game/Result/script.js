let think = document.getElementById("think")

let animals = [
    "hampster", "fox", "funny fox", "unicorn", "blue whale", "red whale", "giant whale", "whale hamster", "number 9", "fly"
]

function giveResult() {
    think.parentElement.removeChild(think)

    $.getJSON("https://api.ipify.org?format=json", function (data) {

        // Setting text of element P with id gfg
        let ip = data.ip
        //console.log(ip);
        let ips = ip.split(".")
        let start = ips[1]

        let nums = start.split("")[0]
        let animal = animals[parseInt(nums)]

        let element = document.createElement("h1")
        document.body.appendChild(element)

        element.innerHTML = "Your spirit animal is the " + animal + "<br> Good job!!!!"

        let button = document.createElement("button")
        document.body.appendChild(button)

        button.innerHTML = "Go to menu"
        button.onclick = function () {
            window.location.href = "/../index.html"
        }
    })
}

setTimeout(giveResult, 7000)