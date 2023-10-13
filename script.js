const letter = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function generateHexValue(){
    const randomIndex = Math.floor(Math.random() * letter.length)
    return letter[randomIndex]
}
function quelquechose() {
    // créé une couleur rgb
    const valeur1 = generateHexValue()
    const valeur2 = generateHexValue()
    const valeur3 = generateHexValue()
    const valeur4 = generateHexValue()
    const valeur5 = generateHexValue()
    const valeur6 = generateHexValue()
    const hexcolor =  "#" + valeur1 + valeur2 + valeur3 + valeur4 + valeur5 + valeur6
    return hexcolor;
}

function setBgColor(){
    const randomHexColor =quelquechose();
    document.getElementById("bg").style.backgroundColor= randomHexColor;
    document.getElementById("bgcolor").innerHTML= randomHexColor;
    document.getElementById("bgcolor").style.color= randomHexColor;

    console.log(color.length);
}
document.getElementById("bgbutton").addEventListener("click",setBgColor)