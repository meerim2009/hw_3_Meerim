// // // 1
// function minElement(a, b) {
// 	return a < b ? `a menshe ${a}` : 'b menshe ' + a
//  }
//терннарные операторы
// console.log(minElement(12,8))

//2
// function countChar(string, char) {
//     let count = 0
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             count++
//         }
//     }
//     return 'Символ найден ' + count
// }
//
// console.log(countChar("abbccdddd", 'd'))


//3
const products = [
    {
        productName: 'milk',
        cost: 48
    },
    {
        productName: 'bread',
        cost: 20
    },
    {
        productName: 'egg',
        cost: 11
    },
]

function addProduct(name, cost) {
    products.push({productName: name, cost})
}

addProduct("cookies", 15)
addProduct("candies", 25)



