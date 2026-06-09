function yes(){
    document.getElementById("result").innerHTML =
    "Yay! ❤️ I Love You Too 💕";
}

function moveNo(){
    let btn = document.getElementById("noBtn");

    let x = Math.random() * 500;
    let y = Math.random() * 300;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}