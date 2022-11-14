//Задание 1

function tri (){
    let string = '*';
    for (var i = 1; i<=7; i++){
        console.log(string)
        string = string + "*"
    }
}

tri() 

//Задание 2


function FizzBuzz (){
    for (var i =1; i<=100; i++){
        if (i%3===0 && i%5===0) console.log("FizzBuzz");
        if (i%3===0) console.log("Fizz")
        else if (i%5===0) console.log("Buzz")
        else console.log(i);
    }
}
FizzBuzz()

//Задание 3

function CountChar(slovo, s){
    var c = 0
    slovo = slovo.toLowerCase()
    s = s.toLowerCase()
    for (var item of slovo){
        if (item===s) c++
    }
    console.log("результат = ", c);
}
CountChar("Abrakadabra", "a")
CountChar("Hello world", "o")

//Задание 4 

function CapitalizeString(word){
    word = word.toLowerCase()
    if(word==="" || word===" ") console.log(word);
    else{
        word = word[0].toUpperCase() + word.substring(1)
        console.log(word);
    }
    
}
CapitalizeString("вЛАДИСЛАВ")
CapitalizeString("ПоЛиТи")
CapitalizeString("")
CapitalizeString(" ")