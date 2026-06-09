document.getElementById("noBtn").addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 60);

    this.style.left = x + "px";
    this.style.top = y + "px";
});

function step2() {
    document.body.innerHTML = `
        <h1>🤔 Are You Sure?</h1>
        <button onclick="step3()">Yes, I'm Sure ❤️</button>
    `;
}

function step3() {
    document.body.innerHTML = `
        <h1>😏 Really Sure?</h1>
        <button onclick="step4()">100% Sure 😍</button>
    `;
}

function step4() {
    document.body.innerHTML = `
        <h1>🙄 Poi Solladha?</h1>
        <button onclick="step5()">Serious ah Thaan 😂</button>
    `;
}

function step5() {
    document.body.innerHTML = `
        <h1>🥹 Last Question...</h1>
        <button onclick="finalLove()">Final Answer ❤️</button>
    `;
}

function finalLove() {
    document.body.innerHTML = `
    <div style="max-width:800px;margin:auto;padding:20px;">
        <h1>🎉❤️ Surprise ❤️🎉</h1>

        <h2>Love You Sundaresan ❤️</h2>

        <p>
        Namma rendu perukum nerya nadandhirukku...
        Sandai 😤, misunderstanding 🙄,
        pesaama irundha days 😔...,
        care pannina nerangal 🤗,
        miss pannina feelings 🥺 irukku.
        </p>

        <p>
        Un kooda pesura chinna chinna conversations kooda enakku special.
       "Saptiya?" nu kekura oru message,
        random ah vara oru call,
        illa reason illama pandra kindal...
        indha chinna chinna vishayangal dhaan enakku periya santhosham 🥰
    
        </p>

        <p>
        Enakku nee oru chapter illa...
        Nee ennoda story oda favourite part ❤️
        </p>

        <p>
        Thanks for all the memories,
        and I hope innum neraya happy memories create pannuvom 🌸
        </p>

        <p>
        Innum neraya sirippu 😂,
        nerya memories 📸,
        nerya happy moments ✨
        nerya sanda poduvom
        serndhu create panna aasai irukku 🥺❤️.

        <h2>Forever & Always ❤️</h2>
        <h3>– kunthani❤️</h3>
    </div>
    `;

    alert("🎉 Congratulations! Nee all  buttons um click pannita 😂❤️");
}