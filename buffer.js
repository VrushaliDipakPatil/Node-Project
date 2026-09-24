let arr=[1,2,3];
let bufferValues=Buffer.from(arr);
console.log(bufferValues);

let value ="abc";
let bufferValue=Buffer.from(value);

let value2=" xyz";
let bufferValue2=Buffer.from(value2);
console.log(bufferValue,bufferValue2);

let combineBuffer=Buffer.concat([bufferValue,bufferValue2]);
console.log(combineBuffer.toString());