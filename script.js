//Task1
let arr = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12]
//a.Arrayin butun elemtlerini cap etmek
//one way
let arr2 = arr.map((items) => {
  console.log(items);
})

// // two way 
arr.forEach((item) => {
  console.log(item);
})

//b.arrayin en boyuk elemntini capn et
//one way
const highest = Math.max(...arr);
console.log(highest);

//Two way
function larg(arr, n) {
  arr.sort();
  return arr[n - 1];
}
let n = arr.length;
console.log((larg(arr, n)));

//Three way
let largest = arr[0];

arr.forEach(function (elem) {
  if (largest < elem)
    largest = elem;
});
console.log(largest);
//Four way
let m = arr.length;
arr.sort(function (a, b) {
  return a - b
});
console.log(arr);
console.log(arr[m - 1]);

//c.arrayin sonuna 15 elave et
let added = arr.push(15)
console.log(arr);

//d.arrayin ilk elemetini sil
let remove = arr.shift()
console.log(arr);

//e arraeyi sort edin ve sonuncu elementi cap et
let d = arr.length;
arr.sort();
console.log(arr[d - 1]);

//f.arreyin ucuncu elementinden sonra 43 elave et
let splice = arr.splice(3, 0, 43)
console.log(arr);

//g arrayin ucuncu elementinden sonraki elementleri cap et
//one way
let slice = arr.slice(3)
console.log(slice);

//Two way
let filter = arr.filter((val, index) => {
  return index > 2;
})
console.log(filter);

//h.ForEach istifade ederek butun elemetleri cap et
arr.forEach((item) => {
  console.log(item);
})


//i. arreyin 40 dan boyuk elementlerini cap et
//one way
let foreach = [];

arr.forEach(function (elem) {
  if (elem > 40)
    return foreach.push(elem)
});
console.log(foreach);


//Two ways
let ForEach = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 40) {
    ForEach.push(arr[i]);


  }
}
console.log(ForEach);

// Task 2
let getStudentsNames=([
  {name: "Steve"},
  {name:"Mike"},
  {name:"John"}
])
const newArray=getStudentsNames.map((personname)=>{
  return personname.name
})
console.log(newArray);

// Task3
function checkFactors(factors, num) {

  for (let i=0; i<factors.length; i++){
    let element = factors[i];

    if (num % element !== 0){
      return false 
    }
    else {
      return true
    }
  }
}

console.log(checkFactors([1, 2, 3, 8], 12))


//Task4

function printEvenNumbers(low,high) {
  let arr=[]
  for (let i =low; i <= high; i ++) {
    arr.push(i)
  }
  return arr
}
console.log(printEvenNumbers(3,6));