const {quantity,sum,isPerfect} =require('./testsForJuliaChaykaTasks/tasks');

//178.	Даны натуральные числа n, a1, ... , an. Определить количество членов
// ak последовательности a1, ... , an:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//  б) кратных 3 и не кратных 5;

function aliquot(arr) {

    const aliquotOrNotAliquotNum = [];
    const aliquotOrNotAliquotNumCount = {};

    arr.forEach(value => {
        if (value % 3 === 0 && value % 5 !== 0) {
            aliquotOrNotAliquotNum.push(value)
        }
    });

    aliquotOrNotAliquotNumCount.count = aliquotOrNotAliquotNum.length;

    return aliquotOrNotAliquotNumCount
}

console.log(aliquot(arr));

// в) являющихся квадратами четных чисел;

function sqrtEven(arr) {
    const sqrtEvenCount = {};
    const sqrtArr = [];

    arr.forEach(value => {
        if (Math.sqrt(value) % 2 === 0) {
            sqrtArr.push(value)
        }
    });

    sqrtEvenCount.evenNumberCount = sqrtArr.length;

    return sqrtEvenCount
}

console.log(sqrtEven(arr));

//554.	Дано натуральное число n. Получить все пифагоровы тройки натуральных чисел, каждое из которых не превосходит n,
// т. е. все такие тройки натуральных чисел a,	b,	c, что
// a2 + b2 = c2 (a ≤ b ≤ c ≤ n).

function pythagoras(number) {
    const numbers = [];
    const squares = [];
    const result = [];
    const optimizedResult = [];
    let status;

    for (let l = 0; l <= number; l++) {
        numbers[l] = l
    }

    numbers.shift();

    for (let n = 0; n < numbers.length; n++) {
        squares.push(Math.pow(numbers[n], 2))

    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (squares.includes(Math.pow(numbers[i], 2) + Math.pow(numbers[j], 2)))
                result.push([numbers[i], numbers[j],
                    Math.sqrt(Math.pow(numbers[i],2)+Math.pow(numbers[j],2))
                ])
        }
    }
    for (let k = 0; k < result.length; k++) {

        status = false;

        for (let p = 0; p < optimizedResult.length; p++) {
            if (JSON.stringify(optimizedResult[p]) === JSON.stringify(result[k].sort((a, b) => a - b))){
                status = true
            }
        }

        if (!status){
            optimizedResult.push(result[k].sort((a, b) => a - b))

        }
    }

    return optimizedResult
}

console.log(pythagoras(100));
