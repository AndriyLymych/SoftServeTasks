// Скільки цифр в числі n

const quantity = n => {
    return n.toString().split('').length
};

console.log(quantity(1000000));

// Чому рівна сума чисел n

const sum = n => {
    return n
        .toString()
        .split('')
        .reduce((acc, num) => acc + +num, 0)
};

console.log(sum(12345));

//Знайти всі ідеальні числа менші заданого. Наприклад, 6 - ідеальне число, бо 6 = 1+2+3 (які є його дільниками)

const isPerfect = num => {
    let dividers = 0;
    for (let i = 0; i <= num / 2; i++) {
        if (num % 2 === 0) {
            dividers += i
        }
    }
    return num === dividers && dividers !== 0;

};

console.log(isPerfect(6));

module.exports = {
    quantity,
    sum,
    isPerfect
};
