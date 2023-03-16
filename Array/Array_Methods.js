let num1 = [1,2,3,4]
console.log(num1, typeof num1);         //object

let b = num1.toString()                //convert to string
console.log(b, typeof b);      

let c = num1.join("_")                 //join 
console.log(c);

let r = num1.pop()                     //pop returns the element

console.log(num1, r);                  //element deleted

num1.push(22)                           //push returns the new array length

console.log(num1);

num1.shift();
console.log("Shift - ",num1);
num1.unshift(33);
console.log("Unshift - ",num1);

//more Methods 
let num2 = [201,202,203,204,205]

console.log(num2, "Length is - ",num2.length);

delete num2[0]                              //deleting value
console.log(num2,"Length is - ",num2.length);

let num3 = [402,301,10000,503,804,705]

console.log("Num3 is - ",num3);

let newArray = num2.concat(num3)                //concating new array

console.log("New Concat Array - ",newArray);

num3.sort()

console.log(num3);          //arrange Alphabeticly

let compare = (a,b)=>{
    return a - b;
}
let compare_new = num3.sort(compare)
console.log(num3);

//num3.reverse()    reverse the method you call

// let add_By_Splice = num3.splice(1,2,4040)                //SPLICING      use to ADD new value's to Array
// console.log(num3);

let slicing_Call = newArray.slice(3,6)                  //slicing
console.log("Slicing - ",slicing_Call);

//spread  and REST       

//REST
let arr = [2,3,4,5,6,7,7,8]

// let [a1,a2,a3,...rest] = arr
// console.log(a1,a2,a3,rest);          //uncomment

//another way

// let [a1,,,,...rest] = arr
// console.log(a1,rest);                //uncomment

let {a1,a2,a3} = {a1:1,a2:3,a3:4}

console.log(a1,a2,a3);

//Spread Operators

let new_Arr = [11,22,33,44]
let obj = {...new_Arr}
console.log(obj);

// //Spread Operator with Function
const new_Func = (c,v,b,n)=>{
    return c+v+b+n
}

console.log(new_Func(...new_Arr));


let obj2 = {
    name1:"GG",
    name2:"KK" 
}

console.log({...obj2 , name1:"WW"});        //calling by rest and changing existing name1 value