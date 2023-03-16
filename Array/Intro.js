const num = [12,1,2,4,15,null, "Not", false]

console.log(num);

//shows value by given Address
console.log(num[0]);                
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);
console.log(num[5]);
console.log(num[6]);
console.log(num[7]);
console.log(num[8]);        // will be undefined because index 8 does not exist

console.log("The length of num is ",num.length);
num[8] = 22                 //Adding a new value to the array
num[6] = "Yes"              //Changing a value of an array

console.log(num);
console.log(typeof num);


console.log("Called by loop");
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(element);
}