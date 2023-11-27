window.onload = function(){

    var num = Math.floor(Math.random() * 9) + 1;
    var str = "smiglo" + num.toString() + ".gif";
    document.getElementById("smiglo").src=str;
}

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function flipColors(){

//     if(document.body.style.color == 'black'){
//         document.body.style.color = 'red';
//         document.body.style.backgroundColor = 'black';
//     }
//     else{
//         document.body.style.color = 'black';
//         document.body.style.backgroundColor = 'red';
//     }
// }

// var secondsInterval;
// var waitTime = 2500;

// function updateSeconds(){

//     date = new Date();
//     p.innerHTML = (parseInt(Math.abs(date1 - date) / 1000)) + " SEKUND";
//     document.title = p.innerHTML;
// }

// window.onload = function(){
    
//     date1 = new Date('2024/05/07 9:00:00');

//     const p = document.getElementById("p");

//     async function update(){

//         date = new Date();
        
//         // console.log( parseInt(date - date1) + " ms");

//         setTimeout(() => clearInterval(secondsInterval), waitTime)
//         secondsInterval = setInterval(updateSeconds);
//         await sleep(waitTime);

//         flipColors();
//         p.innerHTML = (parseInt(Math.abs(date1 - date) / (1000 * 3600))) + " GODZIN";
//         document.title = p.innerHTML;
//         await sleep(waitTime);

//         flipColors();
//         p.innerHTML = (parseInt(Math.abs(date1 - date) / (1000 * 3600 * 24))) + " DNI";
//         document.title = p.innerHTML;
//         await sleep(waitTime);

//         flipColors();
//         // document.body.style.color = 'black';
//         // document.body.style.backgroundColor = 'red';
//         // console.log( parseInt((date - date1) / (1000 * 3600))   + " h");
//         // console.log( parseInt((date - date1) / (1000 * 3600 * 24))   + " d");
//     }

//     update();
//     setInterval(update, waitTime * 3);
// }
