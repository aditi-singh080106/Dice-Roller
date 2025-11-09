// Functionality

function rollDice(){
    const noOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");
    const values = [];
    const img = [];
    for(let i = 1 ; i <= noOfDice ; i++ ){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        img.push(`<img style="height=80px; width:80px" src="dice ${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent = `Dice : ${values.join(", ")}`;
    diceImg.innerHTML = img.join(" ");
    // console.log(values);
}