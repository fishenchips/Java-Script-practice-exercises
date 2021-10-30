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

// Övning 6 Skapa en funktion som kan konvertera en string till en array 
// till ex. var x = Rakib ska bli x= [R,a,k,i,b] 

var x = "Rakib";

console.log(x.split(""))

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


//Trying to remove shopping list --- NOT WORKING
function removeShopping (){ 
    var div = document.getElementsByClassName("shopping-div");
    div(remove);
}

// nedan behöver vara utanför? funkar inte om den är i funktionen (att console logga)
document.querySelector("#btn-shopping").addEventListener("click", addToShopping)

document.querySelector("#remove").addEventListener("click", removeShopping)


// Övning 8 Skapa en funktion som tar string som argument och returnera reverse/omvänd värde
