//178.	Даны натуральные числа n, a1, ... , an. Определить количество членов
// ak последовательности a1, ... , an:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//  б) кратных 3 и не кратных 5;


function aliquot(arr) {

    const numberObj = {};
    const aliquotThree = [];
    const aliquotFive = [];

    arr.forEach(value => {
        if (value % 3 === 0) {
            aliquotThree.push(value)
        }
        if (value % 5 !== 0) {
            aliquotFive.push(value)
        }
    });

    numberObj.aliquotThree = aliquotThree.length;
    numberObj.aliquotFive = aliquotFive.length;

    return numberObj
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

let squares;
let result;
let optimizedResult;

function pythagoras(numbers) {
    squares = [];
    result = [];
    optimizedResult = [];

    numbers.map((number) => {
        squares.push(Math.pow(number, 2))
    });

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (squares.includes(Math.pow(numbers[i], 2) + Math.pow(numbers[j], 2)))
                result.push([numbers[i], numbers[j], Math.sqrt(squares.find((el) => el === Math.pow(numbers[i], 2) + Math.pow(numbers[j], 2)))])
        }
    }

    for (let k = 0; k < result.length; k += 2) {
        optimizedResult.push(result[k].sort((a, b) => a - b))
    }

    return optimizedResult
}

console.log(pythagoras(arr));
