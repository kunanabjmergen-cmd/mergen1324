```js id="z5kq1a"
// №1
let affairs = {
    '2018': {
        11: {
            29: ['name111', 'name112', 'name113'],
            30: ['name121', 'name122', 'name123'],
        },
        12: {
            30: ['name211', 'name212', 'name213'],
            31: ['name221', 'name222', 'name223'],
        },
    },
    '2019': {
        12: {
            29: ['name311', 'name312', 'name313'],
            30: ['name321', 'name322', 'name323'],
            31: ['name331', 'name332', 'name333'],
        }
    },
};

let year = '2019';
let month = 12;
let day = 30;

console.log(affairs[year][month][day]);


// №2
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
};

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]);


// №3
let obj2 = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
};

let key3 = 'key2';
let key4 = 'key4';

console.log(obj2[key3][key4]);


// №4
let obj3 = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
};

let key5 = 'key2';
let key6 = 'key4';

console.log(obj3[key5][key6]);


// №5
let obj4 = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
};

let key7 = 'key2';

console.log(obj4[key7]['key4']);
```
