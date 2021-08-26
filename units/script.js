//súly:

// t, tonna = 1000 kg = 1 000 000 gramm
// q, mázsa = 100 kg = 100 000 gramm
// kg, dekagramm = 1000 gramm = 100dkg
// dkg, dekagramm = 10 gramm
// 1 gramm
// cg, centigramm = 1/100gramm
// mg, milligramm = 1/1000 gramm
// μg, mikrogramm = 1/1 000 000 gramm




function unitChange() {
    let grammInput = document.getElementById('grammInput');
let grammOutput = document.getElementById('grammOutput');
let unitSelectSuly = document.getElementById('unitSelectSuly');
let unitSelectOutputSuly = document.getElementById('unitSelectOutputSuly');
    console.log((grammInput.value * unitSelectSuly.value)/unitSelectOutputSuly.value)
}