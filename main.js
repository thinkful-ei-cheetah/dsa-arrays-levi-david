const Array = require('./array')

function main(){
  Array.SIZE_RATIO = 3;
  // Create an instance of the Array class
  let arr = new Array();
  // Add an item to the array
  // arr.push(3);
  // console.log(arr)
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // console.log(arr)
  // arr.push(45);
  // arr.push(10);
  // console.log(arr);
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // console.log(arr);
  arr.push("tauhida");
  console.log(arr.get(0))
}

main()