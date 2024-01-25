function isEnoughCapacity(products, containerSize){
    let totalProducts = 0;
    const allProducts = Object.values(products)
    for (const product of allProducts) {
        totalProducts+=product
    }
    if (totalProducts <= containerSize) {
        return console.log(true) 
    } else {
        return console.log(false)
    }
}







isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) 
 isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) 
 isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14) 
 isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7) 
