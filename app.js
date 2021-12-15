// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

// part 1
p1.dataset.number = (parseInt(p1.dataset.number) + 10).toString();
p2.dataset.string = (p2.dataset.string.length).toString();

let p3Array = p3.dataset.array.split(",");
p3Array.forEach(value => p3.innerText += "\n" + value.toString());

if (p4.dataset.booleen === "true")
    p4.innerText += "\n" + "La valeur est vrai"
else
    p4.innerText += "\n" + "La valeur est faux"

// part 2
p5.dataset.number = "5";
p5.dataset.number = (parseInt(p5.dataset.number) + 10).toString();

p6.dataset.string = "cinq";
p6.dataset.string = (p6.dataset.string.length).toString();

p7.dataset.array = "1, 2, 3, 4, 5";
let p7Array = p7.dataset.array.split(",");
p7Array.forEach(value => p7.innerText += "\n" + value.toString());

p8.dataset.booleen = "true";
if (p8.dataset.booleen === "true")
    p8.innerText += "\n" + "La valeur est vrai"
else
    p8.innerText += "\n" + "La valeur est faux"