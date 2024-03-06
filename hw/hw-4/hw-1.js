//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a,b){
    return (a*b);
}
let a = rectangle(2,4);
console.log(a);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function calculate(I) {
    return I * 2 * Math.PI
}
let c = calculate(2);
console.log(c)

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function RadiusH(r,h){
    return Math.PI * h * r;
}
let r = RadiusH(4,7);
console.log(r)

//- створити функцію яка приймає масив та виводить кожен його елемент

function newMess(mass){
    for (const mass1 of mass) {
        console.log(mass1)
    }
}
let mass =["js","html","c++"];
newMess(mass,);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function Paragraph(text) {
    document.write(`<p>${text}</p>`);
}
let text = `Okten school`;
Paragraph(text);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function LI(parag){
    document.write(`<ul><li>${parag}</li><li>${parag}</li><li>${parag}</li></ul>`)
}
let parag =`HW`;
LI(parag);

function element3(text,quantity) {

}

