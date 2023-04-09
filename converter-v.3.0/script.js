
/////////////////// вторая версия

document.querySelector(".in").addEventListener('input', myClickV2)
document.querySelector(".s-1").addEventListener('input', myClickV2)
document.querySelector(".s-2").addEventListener('input', myClickRightV2)
document.querySelector(".out").addEventListener('input', myClickRightV2)


function myClickV2() {

    console.log('work1');
    let dataIn = document.querySelector('.s-1').value;
    let dataOut = document.querySelector('.s-2').value;

    if (dataIn == 1 && dataOut == 1) {
        document.querySelector('.s-2').value = 2;
        myClickV2();
    }

    if (dataIn == 2 && dataOut == 2) {
        document.querySelector('.s-1').value = 2;
        document.querySelector('.s-2').value = 1;
        myClickV2();
    }

    if (dataIn == 3 && dataOut == 3) {
        document.querySelector('.s-1').value = 3;
        document.querySelector('.s-2').value = 1;
        myClickV2();
    }

    if (dataIn == 1 && dataOut == 2) {
        let rub = document.querySelector(".in").value;
        let dol = Math.round((rub / 76.63) * 100) / 100;
        document.querySelector(".out").value = dol;
    }
    if (dataIn == 1 && dataOut == 3) {
        let rub = document.querySelector(".in").value;
        let dol = Math.round((rub / 76.63) * 100) / 100;
        let eur = Math.round((dol * 1.08) * 100) / 100;
        document.querySelector(".out").value = eur;
    }


    if (dataIn == 2 && dataOut == 1) {
        let dol = document.querySelector(".in").value;
        let rub = Math.round((dol * 76.63) * 100) / 100;
        document.querySelector(".out").value = rub;
    }

    if (dataIn == 2 && dataOut == 3) {
        let dol = document.querySelector(".in").value;
        let eur = Math.round((dol * 1.08) * 100) / 100;
        document.querySelector(".out").value = eur;
    }


    if (dataIn == 3 && dataOut == 2) {
        let eur = document.querySelector(".in").value;
        let dol = Math.round((eur / 1.08) * 100) / 100;
        document.querySelector(".out").value = dol;
    }
    if (dataIn == 3 && dataOut == 1) {
        let eur = document.querySelector(".in").value;
        let dol = Math.round((eur / 1.08) * 100) / 100;
        let rub = Math.round((dol * 76.63) * 100) / 100;
        document.querySelector(".out").value = rub;
    }




}


function myClickRightV2() {

    console.log('work2');

    let dataIn = document.querySelector('.s-1').value;
    let dataOut = document.querySelector('.s-2').value;

    if (dataIn == 1 && dataOut == 1) {
        document.querySelector('.s-1').value = 2;
        // console.log('я вот сюдааааа зашел');
        myClickRightV2();
        console.log('1 if');
    }

    if (dataIn == 2 && dataOut == 2) {
        document.querySelector('.s-1').value = 1;
        // document.querySelector('.s-2').value = 2;
        myClickRightV2();
        console.log('2 if');

    }

    if (dataIn == 3 && dataOut == 3) {
        document.querySelector('.s-1').value = 1;
        // document.querySelector('.s-2').value = 3;
        myClickRightV2();

        console.log('3 if');

    }

    if (dataIn == 1 && dataOut == 2) {
        let dol = document.querySelector(".out").value;
        let rub = Math.round((dol * 76.63) * 100) / 100;
        document.querySelector(".in").value = rub;
        console.log('4 if');

    }
    if (dataIn == 1 && dataOut == 3) {
        let eur = document.querySelector(".out").value;
        // let dol = Math.round((rub / 76.63) * 100) / 100;
        let rub = Math.round((eur * (76.63 / 1.08)) * 100) / 100;
        document.querySelector(".in").value = rub;
        console.log('5 if');

    }


    if (dataIn == 2 && dataOut == 1) {
        let rub = document.querySelector(".out").value;
        let dol = Math.round((rub * 76.63) * 100) / 100;
        document.querySelector(".in").value = dol;

        console.log('6 if');

    }

    if (dataIn == 2 && dataOut == 3) {
        let eur = document.querySelector(".out").value;
        let dol = Math.round((eur / 1.08) * 100) / 100;
        document.querySelector(".in").value = dol;

        console.log('7 if');

    }


    if (dataIn == 3 && dataOut == 2) {
        let dol = document.querySelector(".out").value;
        let eur = Math.round((dol * 1.08) * 100) / 100;
        document.querySelector(".in").value = eur;

        console.log('8 if');

    }
    if (dataIn == 3 && dataOut == 1) {
        let rub = document.querySelector(".out").value;
        let eur = Math.round((rub / (76.63 / 1.08)) * 100) / 100;
        document.querySelector(".in").value = eur;

        console.log('9 if');

    }




}
// запрет минуса
// let inv2 = document.querySelector('.in-v2');
// let regi = /[-]/g
// inv2.oninput = function () {
//     this.value = this.value.replace(reg, '');
// }

// добавить 1) чтобы, когда менял выбор инпут, сразу же менялось значение

// function myClickRightV2() {

//     let dataIn = document.querySelector('.s-1').value;
//     let dataOut = document.querySelector('.s-2').value;

//     if (dataIn == 1 && dataOut == 1) {
//         console.log('исправляй, сюда захолдит');
//         document.querySelector('.s-1').value = 2;
//         document.querySelector('.in').value = 1;
//         myClickV2();
//     }

//     if (dataIn == 2 && dataOut == 2) {
//         console.log('исправляй, сюда захолдит');
//         document.querySelector('.s-1').value = 2;
//         document.querySelector('.s-2').value = 1;
//         document.querySelector('.in').value = 1;
//         myClickV2();
//     }

//     if (dataIn == 3 && dataOut == 3) {
//         console.log('исправляй, сюда захолдит');
//         document.querySelector('.s-1').value = 3;
//         document.querySelector('.s-2').value = 1;
//         document.querySelector('.in').value = 1;
//         myClickV2();
//     }

//     if (dataIn == 1 && dataOut == 2) {
//         let rub = document.querySelector(".in-v2").value;
//         let dol = Math.round((rub / 76.63) * 100) / 100;
//         // let eur = Math.round((dol * 1.08) * 100) / 100;
//         // document.querySelector(".out").value = rub + ' ₽ ';
//         document.querySelector(".out").value = dol + ' $';
//         // document.querySelector(".in-4").value = eur + ' €';
//     }
//     if (dataIn == 1 && dataOut == 3) {
//         let rub = document.querySelector(".in-v2").value;
//         let dol = Math.round((rub / 76.63) * 100) / 100;
//         let eur = Math.round((dol * 1.08) * 100) / 100;
//         // document.querySelector(".out").value = rub + ' ₽ ';
//         document.querySelector(".out").value = eur + ' €';
//         // document.querySelector(".in-4").value = eur + ' €';
//     }


//     if (dataIn == 2 && dataOut == 1) {
//         let dol = document.querySelector(".in-v2").value;
//         // let rub = 134;
//         let rub = Math.round((dol * 76.63) * 100) / 100;
//         // let eur = Math.round((dol * 1.08) * 100) / 100;

//         document.querySelector(".out").value = rub + ' ₽ ';
//         // document.querySelector(".out").value = eur + ' €';
//         // document.querySelector(".in-4").value = eur + ' €';
//     }

//     // if (dataIn == 2 && dataOut == 2) {
//     //     let dol = document.querySelector(".in-v2").value;
//     //     // let rub = 134;
//     //     // let rub = Math.round((dol * 76.63) * 100) / 100;
//     //     // let eur = Math.round((dol * 1.08) * 100) / 100;

//     //     document.querySelector(".out").value = dol + ' $';
//     //     // document.querySelector(".out").value = eur + ' €';
//     //     // document.querySelector(".in-4").value = eur + ' €';
//     // }

//     if (dataIn == 2 && dataOut == 3) {
//         let dol = document.querySelector(".in-v2").value;
//         // let rub = 134;
//         // let rub = Math.round((dol * 76.63) * 100) / 100;
//         let eur = Math.round((dol * 1.08) * 100) / 100;

//         document.querySelector(".out").value = eur + ' €';
//         // document.querySelector(".out").value = eur + ' €';
//         // document.querySelector(".in-4").value = eur + ' €';
//     }


//     if (dataIn == 3 && dataOut == 2) {
//         let eur = document.querySelector(".in-v2").value;
//         // let rub = 134;
//         // let rub = Math.round((dol * 76.63) * 100) / 100;
//         let dol = Math.round((eur / 1.08) * 100) / 100;

//         document.querySelector(".out").value = dol + ' $';
//         // document.querySelector(".out").value = eur + ' €';
//         // document.querySelector(".in-4").value = eur + ' €';
//     }
//     if (dataIn == 3 && dataOut == 1) {
//         let eur = document.querySelector(".in-v2").value;
//         // let rub = 134;
//         let dol = Math.round((eur / 1.08) * 100) / 100;
//         let rub = Math.round((dol * 76.63) * 100) / 100;

//         document.querySelector(".out").value = rub + ' $';
//         // document.querySelector(".out").value = eur + ' €';
//         // document.querySelector(".in-4").value = eur + ' €';
//     }



// }