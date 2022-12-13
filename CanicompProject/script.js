//Whack a Mole
function startButton() {
    mole("dirt.png");
    document.getElementById("mole1").disabled = false;
    document.getElementById("mole2").disabled = false;
    document.getElementById("mole3").disabled = false;
    document.getElementById("mole4").disabled = false;
    document.getElementById("mole5").disabled = false;
    document.getElementById("mole6").disabled = false;
    document.getElementById("mole7").disabled = false;
    document.getElementById("mole8").disabled = false;
    document.getElementById("mole9").disabled = false;
    randomNumber();
    mole("mole.png");
    startCountdown(10); //nanti ganti jd 60
    document.getElementById("start").disabled = true;
    score = 0;
}
let counter;
function startCountdown(seconds) {
    counter = seconds;
    const interval = setInterval(() => {
        document.getElementById("time").setAttribute("value", "Time : " + counter);
        counter--;
        
        if (counter < 0 ) {
            highScore();
            lastScore();
            document.getElementById("mole1").disabled = true;
            document.getElementById("mole2").disabled = true;
            document.getElementById("mole3").disabled = true;
            document.getElementById("mole4").disabled = true;
            document.getElementById("mole5").disabled = true;
            document.getElementById("mole6").disabled = true;
            document.getElementById("mole7").disabled = true;
            document.getElementById("mole8").disabled = true;
            document.getElementById("mole9").disabled = true;
            score = -1;
            skor();
            document.getElementById("start").disabled = false;
            clearInterval(interval);
            document.getElementById("time").setAttribute("value", "TIME'S UP!");
            document.getElementById("scored").setAttribute("value", "Score: 0");
        }
    }, 1000);
}

let RNG = 1;
function randomNumber() {
    let num = Math.floor(Math.random()*9)+1;
    if(num == RNG) {
        while(num == RNG) {
            num = Math.floor(Math.random()*9)+1;
        }
    }
    return RNG = num;
}

function mole(a) {
    document.getElementById("imgMole" + RNG.toString()).src=a;
}

let score = 0;
function moleClick(x) {
    if(x === RNG) {
        score++;
        document.getElementById("imgMole" + x.toString()).src="dirt.png";
        randomNumber();
        mole("mole.png");
        console.log(score);
        skor();
    }
    else {
        score--;
        console.log(score);
        skor();
    }
    if(score < 0) {
        highScore();
        lastScore();
        mole("dirt.png");
        document.getElementById("mole1").disabled = true;
        document.getElementById("mole2").disabled = true;
        document.getElementById("mole3").disabled = true;
        document.getElementById("mole4").disabled = true;
        document.getElementById("mole5").disabled = true;
        document.getElementById("mole6").disabled = true;
        document.getElementById("mole7").disabled = true;
        document.getElementById("mole8").disabled = true;
        document.getElementById("mole9").disabled = true;
        score = 0;
        skor();
        document.getElementById("start").disabled = false;
        document.getElementById("time").setAttribute("value", "TIME'S UP!");
        counter = 0;
    }
}

function skor() {
    let btn = document.getElementById("scored");
    btn.setAttribute("value", "Score : " + score);
}

while(score < 0) {
    mole("dirt.png");
}

let LS;
function lastScore() {
    LS = score;
    let btn = document.getElementById("lastScored");
    btn.setAttribute("value", "Last Score : " + LS);
}


function highScore() {
    if(score > LS || LS == undefined || score > window.name) {
        window.name = score
        document.getElementById("highScored").setAttribute("value", "High Score : " + window.name);
    }
    else {
        document.getElementById("highScored").setAttribute("value", "High Score : " + window.name);
    }
}

if(score < 0) {
    highScore();
    score = 0;
    lastScore();
    mole("dirt.png");
    document.getElementById("mole1").disabled = true;
    document.getElementById("mole2").disabled = true;
    document.getElementById("mole3").disabled = true;
    document.getElementById("mole4").disabled = true;
    document.getElementById("mole5").disabled = true;
    document.getElementById("mole6").disabled = true;
    document.getElementById("mole7").disabled = true;
    document.getElementById("mole8").disabled = true;
    document.getElementById("mole9").disabled = true;
    skor();
    document.getElementById("start").disabled = false;
    document.getElementById("time").setAttribute("value", "TIME'S UP!");
    counter = 0;
}

if (counter < 0 ) {
    highScore();
    lastScore();
    document.getElementById("mole1").disabled = true;
    document.getElementById("mole2").disabled = true;
    document.getElementById("mole3").disabled = true;
    document.getElementById("mole4").disabled = true;
    document.getElementById("mole5").disabled = true;
    document.getElementById("mole6").disabled = true;
    document.getElementById("mole7").disabled = true;
    document.getElementById("mole8").disabled = true;
    document.getElementById("mole9").disabled = true;
    score = -1;
    skor();
    document.getElementById("start").disabled = false;
    clearInterval(interval);
    document.getElementById("time").setAttribute("value", "TIME'S UP!");
    document.getElementById("scored").setAttribute("value", "Score: 0");
}

//FORMS
function clearInput(){
    document.getElementById("kucing").checked = false;
    document.getElementById("anjing").checked = false;
    document.getElementById("hamster").checked = false;
    document.getElementById("lainnyaHewan").checked = false;
    document.getElementById("ayah").checked = false;
    document.getElementById("ibu").checked = false;
    document.getElementById("kakakL").checked = false;
    document.getElementById("kakakP").checked = false;
    document.getElementById("adikL").checked = false;
    document.getElementById("adikP").checked = false;
    document.getElementById("lainnyaKeluarga").checked = false;
    document.getElementById("nama").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("hobi1").value = "";
    document.getElementById("hobi2").value = "";
    document.getElementById("hobi3").value = "";
    document.getElementById("textLH").value = "";
    document.getElementById("textLK").value = "";
    document.getElementById("olahraga1").value = "";
    document.getElementById("olahraga2").value = "";
    document.getElementById("olahraga3").value = "";
    document.getElementById("makanan1").value = "";
    document.getElementById("makanan2").value = "";
    document.getElementById("makanan3").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefon").value = "";
}

function resetTextInputHewan(){
    if (document.getElementById("textLH").value !== ""){
        document.getElementById("lainnyaHewan").checked = true;
    }
    else {
        document.getElementById("lainnyaHewan").checked = false;
    }
}
function resetTextInputKeluarga(){
    if (document.getElementById("textLK").value !== ""){
        document.getElementById("lainnyaKeluarga").checked = true;
    }
    else {
        document.getElementById("lainnyaKeluarga").checked = false;
    }
}