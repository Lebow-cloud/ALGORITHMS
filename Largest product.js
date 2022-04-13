
/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product. */


function solution(inputArray) {
    
    let result = -100000
    
    for(let i = 0; i<inputArray.length; i++){
       let multiple = inputArray[i] * inputArray[i + 1]
       if(multiple > result) result = multiple
      
    }
    
    return result
}