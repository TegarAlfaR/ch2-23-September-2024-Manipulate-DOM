// document.querySelector("button").addEventListener("click", handleClick);


// function handleClick(tes){
//     alert(`hello FSW 2`);
// }

// handleClick();

// Array.length();

// declare array button
let totalButtons = document.querySelectorAll("button").length;

for (let i = 0; i < totalButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // alert('hello FSW 2');

        // lakukan sesuatu setelah button di klik
        // let audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        // console.log(this);
        // this.style.color = "yellow";

        // this merujuk ke html element yang sedang terjadi di eventListener
        this.innerHTML;

        // add sound if button get clicked
        switch (this.innerHTML) {
            case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();

                // changge the color to blue
                this.style.color = "blue";

                // turn back the color and give time the blue color for 0,5 second
                setTimeout(() => {
                    this.style.color = "#DA0463";
                }, 500);

                break;
            case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();

                // changge the color to blue
                this.style.color = "blue";

                // turn back the color and give time the blue color for 0,5 second
                setTimeout(() => {
                    this.style.color = "#DA0463";
                }, 500);

                break;
            case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();

                // changge the color to blue
                this.style.color = "blue";

                // turn back the color and give time the blue color for 0,5 second
                setTimeout(() => {
                    this.style.color = "#DA0463";
                }, 500);

                break;
            case "d":
                let tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();

                // changge the color to blue
                this.style.color = "blue";

                // turn back the color and give time the blue color for 0,5 second
                setTimeout(() => {
                    this.style.color = "#DA0463";
                }, 500);

                break;
            case "j":
                let snare = new Audio("./sounds/snare.mp3");
                snare.play();

                // changge the color to blue
                this.style.color = "blue";

                // turn back the color and give time the blue color for 0,5 second
                setTimeout(() => {
                    this.style.color = "#DA0463";
                }, 500);

                break;
            case "k":
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();

                // changge the color to blue
                this.style.color = "blue";

                // turn back the color and give time the blue color for 0,5 second
                setTimeout(() => {
                    this.style.color = "#DA0463";
                }, 500);

                break;
            case "l":
                let crash = new Audio("./sounds/crash.mp3");
                crash.play();

                // changge the color to blue
                this.style.color = "blue";

                // turn back the color and give time the blue color for 0,5 second
                setTimeout(() => {
                    this.style.color = "#DA0463";
                }, 500);

                break;
        }

    })
}



// add event listeners if keyboard get clicked
document.addEventListener("keypress", function (keyboard) {

    // to get input values from the keyboard
    keyboard.key;

    // set switch if keyboard get clicked
    switch (keyboard.key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();

            // changge the color to blue
            document.getElementsByClassName("drum")[0].style.color = "blue";

            // turn back the color and give time the blue color for 0,5 second
            setTimeout(() => {
                document.getElementsByClassName("drum")[0].style.color = "#DA0463";
            }, 500);


            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();

            document.getElementsByClassName("drum")[1].style.color = "blue";

            // turn back the color and give time the blue color for 0,5 second
            setTimeout(() => {
                document.getElementsByClassName("drum")[1].style.color = "#DA0463";
            }, 500);

            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();

            document.getElementsByClassName("drum")[2].style.color = "blue";

            // turn back the color and give time the blue color for 0,5 second
            setTimeout(() => {
                document.getElementsByClassName("drum")[2].style.color = "#DA0463";
            }, 500);

            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();

            document.getElementsByClassName("drum")[3].style.color = "blue";

            // turn back the color and give time the blue color for 0,5 second
            setTimeout(() => {
                document.getElementsByClassName("drum")[3].style.color = "#DA0463";
            }, 500);

            break;
        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();

            document.getElementsByClassName("drum")[4].style.color = "blue";

            // turn back the color and give time the blue color for 0,5 second
            setTimeout(() => {
                document.getElementsByClassName("drum")[4].style.color = "#DA0463";
            }, 500);

            break;
        case "k":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();

            document.getElementsByClassName("drum")[5].style.color = "blue";

            // turn back the color and give time the blue color for 0,5 second
            setTimeout(() => {
                document.getElementsByClassName("drum")[5].style.color = "#DA0463";
            }, 500);

            break;
        case "l":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();

            document.getElementsByClassName("drum")[6].style.color = "blue";

            // turn back the color and give time the blue color for 0,5 second
            setTimeout(() => {
                document.getElementsByClassName("drum")[6].style.color = "#DA0463";
            }, 500);

            break;
    }
});