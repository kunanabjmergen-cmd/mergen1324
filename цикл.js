```js
// №1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// №2
for (let i = 10; i >= 0; i--) {
    console.log(i);
}


// №3
for (let i = 10; i >= 0; i--) {
    console.log(i);
}


// №4
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}


// №5
let res = 0;

for (let i = 1; i <= 10; i++) {
    res += i;
}

console.log(res);


// №6
let res2 = 1;

for (let i = 1; i <= 10; i++) {
    res2 *= i;
}

console.log(res2);


// №7
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += Number(elem);
}

console.log(sum);


// №8
let arr2 = ['1', '2', '3', '4', '5'];
let sum2 = 0;

for (let elem of arr2) {
    sum2 += +elem;
}

console.log(sum2);


// №9
let arr3 = ['1', '2', '3', '4', '5'];
let sum3 = 0;

for (let elem of arr3) {
    sum3 += +elem;
}

console.log(sum3);


// №10
let arr4 = ['1', '2', '3', '4', '5'];
let sum4 = 0;

for (let i = 0; i < arr4.length; i++) {
    sum4 += +arr4[i];
}

console.log(sum4);


// №11
let arr5 = ['1', '2', '3', '4', '5'];
let sum5 = 0;

for (let i = 0; i < arr5.length; i++) {
    sum5 += +arr5[i];
}

console.log(sum5);


// №12
let arr6 = ['1', '2', '3', '4', '5'];
let sum6 = 0;

for (let i = 0; i < arr6.length; i++) {
    sum6 += +arr6[i];
}

console.log(sum6);


// №13
let arr7 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr7.length; i++) {
    arr7[i] = arr7[i] ** 2;
}

console.log(arr7);


// №14
let arr8 = [];

for (let i = 1; i <= 5; i++) {
    arr8.push(i);
}

console.log(arr8);


// №15
let obj = {a: 1, b: 2, c: 3};
let sum7 = 0;

for (let key in obj) {
    sum7 += obj[key];
}

console.log(sum7);


// №16
let obj2 = {a: 1, b: 2, c: 3};
let sum8 = 0;

for (let key in obj2) {
    sum8 += obj2[key];
}

console.log(sum8);


// №17
let arr9 = [1, 2, 3, 4, 5];
let res3 = '---';

for (let elem of arr9) {
    if (elem === 3) {
        res3 = '+++';
        break;
    }
}

console.log(res3);


// №18
let arr10 = [];

for (let i = 1; i <= 5; i++) {
    arr10.push(i);
}

console.log(arr10);


// №19
let arr11 = [1, 2, 3, 4, 5];
let res4 = false;

for (let elem of arr11) {
    if (elem === 3) {
        res4 = true;
        break;
    }
}

console.log(res4);


// №20
let arr12 = [1, 2, 3, 4, 5];

for (let elem of arr12) {
    if (elem % 2 === 0) {
        console.log(elem);
    }
}


// №21
let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res5 = [];

for (let elem of arr13) {
    if (elem % 2 !== 0) {
        res5.push(elem);
    }
}

console.log(res5);
```
