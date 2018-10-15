/********************
Funciónes para sumar 
******************/
var numeros = [];
// var twimen = [
//     1, 2, 3, 4
// ];
var elses = 0;
function checkNumbers(numeros) {
    var i, justNumbers = true;
    for (i = 0; numeros[i]; i++) {
        var value = numeros[i],
            type = typeof value;
        if (type === "object") {
            var object = numeros[i];
            objectInObject(object)
            // justNumbers = false;
            numeros[i] = num;
            console.log('object');
        } else if (type === "number") {
            console.log('number');
        } else {
            console.log('else');
            numeros[i] = -1;
            elses ++;

        }

    }
    // if (justNumbers === false) {
    //     console.log('run again');
    // } else {
    //     console.log('suma todo');
    //     sumAll(numeros);
    // }
    sumAll(numeros);
    console.log(num);
    if (elses >= 1){
        totalSuma = totalSuma + elses;
    }
    console.log('Total final: '+ totalSuma);
    setTimeout(function(){ 
        $('.big__number').html(totalSuma);
        $('#number__container').addClass('bounceInDown');
    }, 1000);
}


function sumAll(numeros) {
    num = 0;
    for (var i = 0;numeros[i]; i++) {
        val = numeros[i];
        if (val === 0){

        } else {
            num = num + val;
        }
    }
    console.log(parseInt(num));
    totalSuma = num;
    return num;
}

function objectInObject(object) {
    for (v = 0; object[v]; v++) {
        var value = object[v],
            type = typeof value;
        if (type === "number") {
            console.log('number');
        } else {
            console.log('else');
            delete object[i];
        }

    }
    sumAll(object);
    return num;
}

/********************
Fin Funciónes para sumar 
******************/

/********************
Función para checar queries
******************/

function checkQuery() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('#');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
  
    if (vars.array) {
        numeros = vars.array;
        numeros = JSON.parse(numeros);    
        checkNumbers(numeros);
        $('.title__copy').html('El resultado es:');
    } else {
        $('.title__copy').html('Inserta un parámetro con el siguiente formato: <br> ?array=[765,1212,20133,[1,23,100]]');
        //nothing
    }


   
}

function checkHash(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('?');
    buttonColor = hashes[0];
    console.log(buttonColor);
    if (buttonColor == "green"){
        greenButton();
    }

    else if (buttonColor == "blue"){
        blueButton();
    }

    else if (buttonColor == "red"){
       redButton();
    }
   
}
checkQuery();
checkHash();

function greenButton(){
    $('.inner__button').addClass('green__inner').removeClass('red__inner blue__inner');
    $('.button__colors').addClass('green__button').removeClass('red__button blue__button');
}

function blueButton(){
    $('.inner__button').addClass('blue__inner').removeClass('red__inner green__inner');
    $('.button__colors').addClass('blue__button').removeClass('red__button green__button');
}

function redButton(){
    $('.inner__button').addClass('red__inner').removeClass('green__inner blue__inner');
    $('.button__colors').addClass('red__button').removeClass('green__button blue__button');
}

/********************
Fin función para checar queries
******************/

$('.change__color').click(function (){
    var x = Math.floor((Math.random() * 3) + 1);
    switch(x) {
        case 1:
            $('body').css('background-image', 'url(assets/images/01.jpg)');
            $('.central__content').css('color', 'white');
            greenButton();
            break;
        case 2:
             $('body').css('background-image', 'url(assets/images/02.jpg)');
             $('.central__content').css('color', 'white');
             blueButton();
            break;
        case 3:
              $('body').css('background-image', 'url(assets/images/03.jpg)');
              $('.central__content').css('color', 'black');
              redButton();
            break;

        default:
             $('body').css('background-image', 'url(assets/images/01.jpg)');
    }
});