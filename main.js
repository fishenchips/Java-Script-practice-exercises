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


// Skapa en funktion som tar 2 tal som argument och returnera summan av två talen
// 4.1) skriva ut summan i en div i html 

