const array = [1, 0, 2, 6, 8];

function sumArray(array) {
    let lowNum = Math.min(...array);
    let highNum = Math.max(...array);
    let values = [];
    console.log(lowNum, highNum);

    for(number of array){
        if(number === lowNum){
            console.log(`${number} is the lowest value.`);
        } else if(number === highNum){
            console.log(`${number} is the highest value.`)
        } else {
            console.log(`${number} is not the highest or lowest value.`)
        }
    }

    let filterNumbers = array.filter(function(number){
        if(!number === lowNum){
            console.log(number);
        }
    })
}

sumArray(array);

    
