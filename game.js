
function load() {
    document.getElementById("player1_name").innerHTML = localStorage.getItem("player1_name");
    document.getElementById("playerScore1").innerHTML = "0";
    document.getElementById("player2_name").innerHTML = localStorage.getItem("player2_name");
    document.getElementById("playerScore2").innerHTML = "0";
}

function enviar() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    document.getElementById("question").innerHTML = numero1 + " x " + numero2;
}