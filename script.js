~~~~~~~~~~~~Fibonacci Logic~~~~~~~~~~~~

#1. 

var arry = [];

function fibonacciGenerator(n){
    if (n === 1) {
        arry.push(0);
        console.log(arry);        
    } else if (n === 2) {
        arry.push(0,1);
        console.log(arry);
    } else {
        arry = [0,1,1];
    // Calculate sum of the last two digits in the array    
    var lastSum = arry[arry.length-2] + arry[arry.length-1]; 
    // Checking if "n" is equal to the sum above
    // If "n" is equal to the sum above, push it into the array
    for (lastSum; lastSum !== n; lastSum++){
        arry.push(arry[arry.length-2] + arry[arry.length-1]);        
        }  
        arry.pop();
    }
        return arry;
}
fibonacciGenerator(3);

// #2 - better

fibonacciGenerator(1);
function fibonacciGenerator(n){
    var arry = [];
    if (n === 1) {
        arry.push(0);
        return arry.slice(0,1);        
    } else if (n === 2) {
        arry.push(0,1);
        return arry.slice(0,2);   
    } else if (n != 1 && n != 2) {
        arry = [0,1,1];

        // Calculate sum of the last two digits in the array    

        var lastSum = arry[arry.length-2] + arry[arry.length-1]; 

        // Checking if "n" is equal to the sum above
        // If "n" is equal to the sum above, push it into the array

        for (lastSum; lastSum !== n; lastSum++){
            arry.push(arry[arry.length-2] + arry[arry.length-1]);        
            }  
            arry.pop();          
    }
         return arry;
}
