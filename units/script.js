//súly:

// t, tonna = 1000 kg = 1 000 000 gramm
// q, mázsa = 100 kg = 100 000 gramm
// kg, dekagramm = 1000 gramm = 100dkg
// dkg, dekagramm = 10 gramm
// 1 gramm
// cg, centigramm = 1/100gramm
// mg, milligramm = 1/1000 gramm
// μg, mikrogramm = 1/1 000 000 gramm

let grammOutput = document.getElementById('grammOutput')
let meterOutput = document.getElementById('meterOutput')
let timeOutput = document.getElementById('timeOutput')
let mama = document.getElementById('mama');
let unitForm = document.getElementsByName('unitForm');

console.log(unitForm);


//súly váltás

function unitGrammChange() {
    let grammInput = document.getElementById('grammInput');
    let unitSelectGramm = document.getElementById('unitSelectGramm');
    let unitSelectOutputGramm = document.getElementById('unitSelectOutputGramm');
    grammOutput.innerHTML = (grammInput.value * unitSelectGramm.value)/unitSelectOutputGramm.value
}

//hossz váltás

function unitMeterChange() {
    let meterInput = document.getElementById('meterInput');
    let unitSelectMeter = document.getElementById('unitSelectMeter');
    let unitSelectOutputMeter = document.getElementById('unitSelectOutputMeter');
    meterOutput.innerHTML = (meterInput.value * unitSelectMeter.value)/unitSelectOutputMeter.value
}


//idő váltás

function unitTimeChange() {
    let timeInput = document.getElementById('timeInput');
    let unitSelectTime = document.getElementById('unitSelectTime');
    let unitSelectOutputTime = document.getElementById('unitSelectOutputTime');
    timeOutput.innerHTML = (timeInput.value * unitSelectTime.value)/unitSelectOutputTime.value
}