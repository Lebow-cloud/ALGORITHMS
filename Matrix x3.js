
/* Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).*/

function solution(matrix) {
    var total = 0;
    

    for (var i = 0; i < matrix[0].length; i++) {
            
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
              
                break;
            }
            total += matrix[j][i];
        }
        
    }
    
    return total;
}
