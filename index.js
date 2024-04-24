const wrapperEle = document.getElementById("wrapper");

const freelancers = []
function generateFreeLancer(num){

const names = ["luke", "han", "leia", "anakin", "obi-wan", "padme", "yoda", "darth vader", "rey"];
const occupations = ["jedi", "sith", "senator", "pilot", "princess", "padawan", "master", "apprentice"];
const startingPrices = [20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let i = 0; i<9; i++){
    const fl = {name: "", occu:"", startingPrice: 0}   
    console.log(names[Math.floor(Math.random()*names.length)]);
    fl.name = names[Math.floor(Math.random()*names.length)];
    fl.occupations = occupations[Math.floor(Math.random()*occupations.length)];
    fl.startingPrices = startingPrices[Math.floor(Math.random()*startingPrices.length)];

}
}
// const freelancers = [
//     { name: "Alice", sp: 30, occu: "gardener" },
//     { name: "Bob", sp: 50, occ: "programmer" },
//     { name: "Carol", sp: 70, occ: "teacher" },
// ]; 



const titleEle = document.createElement("h1");
titleEle.innerHTML = "Freelancer Forum";
wrapperEle.appendChild(titleEle);

function avgPrices(fl){
    const avgPricesEle = document.createElement("p");
    const average = fl.reduce((acc, cv)=>acc+cv.sp, 0)/fl.length;
    avgPricesEle.innerHTML= `The average starting price is $${average}`;
    wrapperEle.appendChild(avgPricesEle);
}

avgPrices(freelancers)

function availableFreeLancers(fl){
    const freelancersWrapperEle = document.createElement("div");
    const freelancersTitleEle = document.createElement("h1");
    freelancersTitleEle.innerHTML = "Available Freelancers";


    const freelancersTable = document.createElement("div");
    const titlesEle = document.createElement("div");
    titlesEle.style.display = "flex"; 
    titlesEle.style.justifyContent = "space-around";
    let titles = "";

    for(let prop in fl[0]){
        titles += `<h1>${prop}</h1>`;
    }


    titlesEle.innerHTML = titles;

    freelancersTable.appendChild(titlesEle);

    fl.forEach((i)=>{
        const row = document.createElement("div");
        row.style.display = "flex"; 
        row.style.justifyContent = "space-around";
    
        let info = "";
        for(let prop in i){
            info += `<h1>${i[prop]}</h1>`;
        }
        row.innerHTML = info;
        freelancersTable.appendChild(row);

    })

    freelancersWrapperEle.appendChild(freelancersTitleEle);
    freelancersWrapperEle.appendChild(freelancersTable);
    wrapperEle.appendChild(freelancersWrapperEle);
}

availableFreeLancers(freelancers);





// document.body.innerHTML = '<h1>Freelancer Forum</h1>';



// // const addShapeIntervalId = setInterval(addShape, 1000);


// const freelancers = [
//     { name: "Alice", price: 30, occupation: "gardener" },
//     { name: "Bob", price: 50, occupation: "programmer" },
//     { name: "Carol", price: 70, occupation: "teacher" },
//     { name: "Mrs. Smith", price: 43, occupation: "teacher" },
//     { name: "John", price: 700, occupation: "programmer" },
//     { name: "Mr. Smith", price: 47, occupation: "teacher" },
//     { name: "Peter", price: 72, occupation: "driver" } 
// ];

// freelancers.forEach((i, idx)=>{
//     document.body.innerHTML += `<h2>${idx+1}. ${i.name}</h2>`;
//     document.body.innerHTML += `<h3>Price: $${i.price}</h3>`;
//     document.body.innerHTML += `<h3>Occupation: ${i.occupation}</h3>`;
//         setTimeout(()=>{
//             const avgPrice = freelancers.reduce((acc, curr)=>acc+curr.price, 0)/freelancers.length;
//             document.body.innerHTML += `<h2>The average starting price is $${avgPrice.toFixed(2)}</h2>`;
//         }
//         , 5000);
// })



// document.body.innerHTML += '<h1> Available Freelancers</h1>';
// document.body.innerHTML += '<h1>Name</h1>';
// document.body.innerHTML += '<h1>Occupation</h1>';
// document.body.innerHTML += '<h1>Starting Price</h1>';
