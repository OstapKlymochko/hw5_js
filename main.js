// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function  per(a,b){
    return 2*(a+b);
}
console.log(per(5,6));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle_square(r){
    return Math.PI*r**2;
}
console.log(circle_square(2));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function c_vol(r,h){
    return circle_square(r)*h;
}
console.log(c_vol(3,5));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr=[1,2,true,'Hello','World',false,'Hw_5']
function print_arr(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
print_arr(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writeP(txt){
    for(let i =0; i<=2; ++i){
        document.write(`<p>${txt}</p>`);
    }
}
writeP('some txt');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function write_list(txt,counter){
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}
write_list('li data',5);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function writeSomeUl(txt, counter){
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}
writeSomeUl('second ul task', 7)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function write_array(arr){
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}
write_array(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let Obj=[
    {id:1,name:'vasya',age:20},
    {id:2,name:'oleg',age:14},
    {id:3,name:'tolik',age:31},
    {id:4,name:'andriy',age:22},
    {id:5,name:'taras',age:13},
    {id:6,name:'sanya',age:10}
];


function write_obj(obj){
    for (const objElement of obj) {
        document.write(`<div>`)
        for(const elem in objElement){
            document.write(`<p>${elem}: ${objElement[elem]}</p>`);
        }
        document.write(`</div>`)
    }
}
write_obj(Obj);
// - створити функцію яка повертає найменьше число з масиву
arr=[1,4,150,1200,-10,55,32,77,3125,-2100];
function minInArr(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log('minimal in arr:',minInArr(arr));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumInArr(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return sum
}

console.log('arr sum:',sumInArr(arr));

//additional
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let three_min = (a,b,c) =>{
    if(a< b && a<c){
        return a;
    }
    else if(b<a && b<c){
        return b;
    }
    else{
        return c;
    }
}
console.log(three_min(2, 5, 1));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let three_max = (a,b,c) =>{
    if(a> b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
// - створити функцію яка повертає найбільше число з масиву
console.log(arr);
let arrMax = (arr) => Math.max.apply(null,arr);
console.log(arrMax(arr));
// - створити функцію яка повертає найменьше число з масиву
let arrMin = (arr) => Math.min.apply(null,arr);
console.log(arrMin(arr));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrSum = (arr) => sumInArr(arr);
console.log(arrSum(arr));
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
function printToN(n){
    for(let i =1;i<=n;++i){
        console.log(i);
    }
}
printToN(10);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
function printRange(a,b){
    if(a<b){
        for(let i = a; i<=b;++i){
            console.log(i);
        }
    }
    else if(a>b){
        while(a !== (b-1)){
            console.log(a);
            --a;
        }
    }
    else{
        console.log(`a and b (${a}) are equal to each other!`);
    }
}

console.log('\n\n\n');
printRange(2,10);
printRange(10,2);
printRange(10,10);
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
function changePlaces(i,arr) {
    if(i<0 || i>=arr.length-1){
        console.log('Invalid Index!');
        return undefined;
    }
    else {
        let temp = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        return arr;
    }
}

console.log(arr);
console.log(changePlaces(4, arr));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let arr1 = [1,5,0,4,0,2];
let arr2 = [0,4,0,2,3,5,0,0,1,3,5,0];
function Zeros(arr){
    for (let i = 0; i < arr.length; i++) {

            if (i!==arr.length-1 && arr[i] === 0 && arr[i + 1] !== 0) {
                changePlaces(i,arr);
                i=0;
        }
    }
    return arr;
}

console.log(Zeros(arr1));
console.log(Zeros(arr2));