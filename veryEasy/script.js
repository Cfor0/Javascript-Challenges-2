// function min(a,b) {
//     if (a > b) {
//         console.log(`${b} is the minimum.`)
//     } else {
//         console.log(`${a} is the minimum.`)
//     }
// }

// min(345, 987)


const minArrow = (a, b) => {
    const minNum = (a < b) ? `${a} is the minimum.`: `${b} is the minimum.`;
    return minNum;
}

console.log(minArrow(34,31))