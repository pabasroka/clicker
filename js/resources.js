//Basics stats
let gold = 50;
let wood = 0;
let stone = 0;
let population = 10;
let satisfaction = 100;
let science = 0;
let experience = 0;
let level = 1;

//Enter data
let goldUI;
let woodUI;
let stoneUI;
let populationUI;
let satisfactionUI;
let scienceUI;
let experienceUI;
let levelUI;

function resources(){
    goldUI = document.querySelector('.gold').innerHTML = gold;
    woodUI = document.querySelector('.wood').innerHTML = wood;
    stoneUI = document.querySelector('.stone').innerHTML = stone;
    populationUI = document.querySelector('.population').innerHTML = population;
    satisfactionUI = document.querySelector('.satisfaction').innerHTML = satisfaction;
    scienceUI = document.querySelector('.science').innerHTML = science;
    experienceUI = document.querySelector('.experience').innerHTML = experience;
    levelUI = document.querySelector('.level').innerHTML = level;
}
resources()