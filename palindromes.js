
const palindromes = function(expression){
    //split the expression into an array. Including characters and white space
    let statement = expression.toLowerCase();
    
    //console.log(statement);

    let arr1 = statement.split("");
    //console.log(arr1);

    const onlyLetters = arr1.filter(item =>{
        //check if each elements in array is a white space or not an alphabet
        const pattern = /[a-z]/i;
        // true values are kept, false thrown out.
        return pattern.test(item);
        
    });

    //console.log(onlyLetters);

    //create a flipped array
  
    let arr2 = []
    const len = onlyLetters.length - 1;
    for (let i = len ; i >= 0; i-- ){
        arr2.push(onlyLetters[i]);
    }

    //console.log(arr2);

    //checking if both are equal
    for (i = 0; i <= len; i++ ){
        if (onlyLetters[i] != arr2 [i]){
        console.log(onlyLetters[i]);
        console.log(arr2[i])
            return false;
        }

    }

    return true;
}




module.exports = palindromes;
