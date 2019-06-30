let arr = [
    {
        year: 2019,
        country: "Francja"
    },
    {
        year: 2015,
        country: "Polska"
    },
    {
        year: 2011,
        country: "Rosja"
    }
];

let arrNew = arr.sort((a, b) => {
    return a.year - b.year
});

console.log(arrNew.forEach((e) => {
    console.log(e);
}))
