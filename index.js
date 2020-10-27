const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
]

// Hier komt jouw functie

//console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

let el = superheroes.find(element => element.name === "Spiderman");
console.log(el);

let getallen = [1, 2, 3];
let getallen2 = getallen.map(n => 2 * n);
console.log(getallen2);

getallen = [1, 4, 3, 6, 9, 7, 11];
let bool = getallen.some(n => n > 10);
console.log(bool);
getallen = [1, 2, 1, 2, 1, 2, 1];
bool = getallen.some(n => n > 10);
console.log(bool);

const landen = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
if (landen.includes('Italy'))
    console.log("Italy zit er in");

getallen = [1, 4, 3, 6, 9, 7, 11];
getallen.forEach(element => console.log((10 * element)));
getallen = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
console.log(getallen.every(n => n < 100));

getallen = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

let som = getallen.reduce(function(totaal, element) {
    return (totaal + element);
}, 0);

console.log("Het totaal is : " + som);

//comment