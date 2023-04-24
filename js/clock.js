let myName = prompt("Lütfen İsminizi Giriniz :"); // Get info from user via prompt
let name = document.querySelector("#myName"); // Assign variable to HTML element

myName = myName.charAt(0).toUpperCase() + myName.slice(1); // Capitalize first letter.

name.innerHTML = myName; // Data injected to HTML

// Date Function

function showTime () {
    let myClock = document.querySelector("#myClock"); // Assign variable to HTML element
    let now = new Date(); // Assign Date function to variable
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

    myClock.innerHTML = time; // Injected to HTML
}
showTime (); // Run function
