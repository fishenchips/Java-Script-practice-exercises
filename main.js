//Övning 1 Skapa ett program som kan beräkna summan av två tal 

function addition (a, b) {
    console.log(a+b)
}

addition (10, 20)


// Övning 2 Skapa ett program som kan räkna udda och jämna tal från listan och skriva svaren i konsolen. 

var lista = [1,2,3,4,5,6,7,8,9,10]

for (var i=0; i<lista.length; i++) {
if (i % 2 == 0) {
    console.log("the number is even.")
} 
else {
    console.log("The number is Odd")
}
}

// Bör även addera lista[i] i console log så man ser själva svaret, just nu har jag bara string value.


//Övning 3 Skapa en for loop som kan loopa igenom listan ovan och skriva ut varje enskilt värde 

lista.map (function(e) {
    console.log(e)
})

console.log(lista)

//lista.map( (e) =>console.log(e) ) ARROW FUNCTION


// Övning 4 Skapa en funktion som tar 2 tal som argument och returnera summan av två talen

function calculate(a,b){
    //console.log(a+b)
    return a+b
}

// 4.1) skriva ut summan i en div i html 

//const div = document.querySelector(".addition");

//div.textContent = calculate (2, 100)

document.querySelector (".addition").textContent = calculate (50, 51)


// Övning 5 Skapa en funktion expression som  tar en string som argument och skriver ut i consolen.
//  * funktionen också returnera strängen. Spara trängen i en variabel. 

const expressionFunction = function (a, b) {
    console.log (a + b)
    return a+b
}

expressionFunction ("Hej, ", "Du är snäll!");

// const = returnedText = expressionFunction ("Hej, ", "Du är snäll")

// kanske ute efter totalspending så skapar const1 = (200, 299) - const2 = (10, 15) osv
// console.log(const1 + const2 + const3)






// Övning 6 Skapa en funktion som kan konvertera en string till en array 
// till ex. var x = Rakib ska bli x= [R,a,k,i,b] 

            /* var x = "Rakib";

            function split () {
                console.log(x.split(""))
            }

            split() */

function convertToArray (a) {
    console.log(a.split(""))
    return a.split("")
}

convertToArray("Splitta")

//ovan är återanvändbar kod, vi har inte begränsat oss till att använda en function

//console.log(x.split("").reverse().join(""))


//Övning 7 Skapa en Shopping List app med hjälp av DOM manipulering.  Användare kan lägga till shopping list 
// och ta bort  items  från shopping list. tips: appendChild(), remove()

function addToShopping(e) {
    e.preventDefault();
    const input = document.querySelector("#add-shopping").value
    console.log(input)
    const newLi = document.createElement ("li")
    newLi.textContent = input
    const shoppingList = document.querySelector(".shopping-div")
    shoppingList.appendChild(newLi)
} 

// nedan behöver vara utanför? funkar inte om den är i funktionen (att console logga) FÖR ATT VI ANROPAR FUNCTIONEN!
document.querySelector("#btn-shopping").addEventListener("click", addToShopping)

// ta bort li - där div är parent. De tas bort en åt gången.
function removeShopping (e){ 
    e.preventDefault();
    var div = document.querySelector(".shopping-div")
    var li = document.querySelector("li");
    div.removeChild(li)
}

document.querySelector("#remove").addEventListener("click", removeShopping)


// Övning 8 Skapa en funktion som tar string som argument och returnera reverse/omvänd värde

/* function reverseWord () {
    var x = "Tottenham"
    console.log(x.split("").reverse().join(""))

}
reverseWord() */


function reverseWord1 (word) {
   // console.log(word.split("").reverse().join(""))
    return word.split("").reverse().join("")
}

const newWord = reverseWord1 ("Svenska")

console.log(newWord)

// Övning 9 Skapa en funktion som kan returnera true värde om ett ord är en palindrom och 
//falsk värde om det inte är palindrom


function palindrom (ord) {
   if (ord == ord.split("").reverse().join("")) {
       console.log("ordet är en palindrom")
   }
   else {
       console.log("ordet är inte en palindrom")
   }
   
}

palindrom("anna")

palindrom("hej")


// Övning 10 Skapa en funktion som kan kan söka och ersätta och returnerar ersätt värdet . 
// till ex . ReplaceFunktion(searchWord, ReplaceWord) kommer att returnera replaceWord 


// 2 argument searchword, replace word, text  var text = "something something dark side"

// replaceFunction("something", "someothersthing" "something something dark side")

// return "someotherthing someotherthing darkside"

