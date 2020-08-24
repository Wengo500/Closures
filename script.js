const sum = (a, b) => (c, d) => a + b + c + d;

const curriedFunction = sum(1, 2);
console.log(curriedFunction(3, 4));



const counter = (value = 0) => {
    return {
        inc: () => value++,
        dec: () => value--,
    };
};
const iterator = counter()

iterator.inc() // увеличивает значение на 1
iterator.inc() // еще на 1
iterator.dec() // уменьшает на 1

console.log(iterator.dec()); // выводит 1