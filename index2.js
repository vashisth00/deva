

// Find repeating elements in array

// function repeatingValues(){
//   const
// }

const arr=[8,94,67,32,1,5,12]

function getMax(arr){
  let max=arr[0]
  for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
    }
  }
  return max
}

console.log(getMax(arr))
