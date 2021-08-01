const arr= [1,2,3,4,5,6,7,8,9,10,2,2,1,1];

// Find repeating elements in array

// function repeatingValues(){
//   const
// }

function getSum(){
  let sum = 10;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] + arr[i+1] == sum){
     console.log(arr[i],arr[i+1]);
    }
  }
return arr;
}

console.log(getSum(arr));