function largest(arr) { 
    let i; 
 
    let max = arr[0]; 
 
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    
  return max; 
} 

let arr = [12, 45, 3, 96, 21, 86];
console.log("Largest in given array is " + largest(arr));