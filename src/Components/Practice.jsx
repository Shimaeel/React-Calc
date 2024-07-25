// // // Circumference of the circle
// const PI = 3.14;

// function CircumferenceofCircle(radius) {
//   const PI = 3.14;
//   const Circumference = 2 * PI * radius;
//   return Circumference;
// }

// const radius = 5;
// const circumference = CircumferenceofCircle(radius);
// console.log(circumference);

// // // area of circle.
// function AreaofCircle(radius) {
//   const Area = PI * radius * radius;
//   return Area;
// }

// const radius = 5;
// const Area = AreaofCircle(radius);
// console.log(Area);

// // // parameter of rectangle.

// // function parameterofRectangle(l, w) {
// //     const parameter = 2 * l + w
// //     return parameter;
// // }

// // const l = 2;
// // const w = 3;
// // const parameter = parameter(l, w)
// // console.log(parameter)

// // // area of triangle.
// function areaofTriangle(b, h) {
//     const Area = 0.5 * b * h;
//     return Area;
// }

// const b = 4
// const h = 2
// const Area = areaofTriangle(b, h);
// console.log(Area)

// Reverse string
// function reverseString(originalStr) {
//   let reverseStr = "";
//   for (let i = originalStr.length - 1; i >= 0; i--) {
//     reverseStr += originalStr[i];
//   }
//   return reverseStr;
// }

// let str1 = "Hello World!";
// let reverseStr1 = reverseString(str1);
// console.log(reverseStr1);

// Reverse Array

// function reverseArray(originalArr) {
//   let reverseArr = [];
//   for (let i = originalArr.length - 1; i >= 0; i--) {
//     reverseArr.push(originalArr);
//   }
//   return reverseArr;
// }

// let Arr = [1, 2, 3, 4, 5];
// let reverseArr = reverseArray(Arr);
// console.log(reverseArr);

// Reverse Array using methods:-

// function reverseArrayFunction(originalArr) {
//   return originalArr.reverse();
// }

// let Arr1 = [1, 2, 3, 4, 5];
// let reverseArray = reverseArrayFunction(Arr1);
// console.log(reverseArray);

// Reverse String using method:-

// function reverseStringFunction(originalStr) {
//   return originalStr.split("").reverse().join("");
// }

// let str = "hello world!";
// let reverseStr = reverseStringFunction(str);
// console.log(reverseStr);

const Practice = () => {
  function reverseString(originalStr) {
    // console.log("originalStr", originalStr.length);
    // console.log("originalStr", originalStr);
    // console.log("originalStr keys", originalStr[originalStr.length]);
    let reverseStr = "";
    for (let i = originalStr.length - 1; i >= 0; i--) {
      // for loop

      reverseStr += originalStr[i];
    }
    return reverseStr;
  }

  let str1 = "Hello World!  ";
  let reverseStr1 = reverseString(str1);
  // console.log(reverseStr1);

  function reverseStringFunction(originalStr) {
    return originalStr.split("").reverse();
  }
  let reverseStr = reverseStringFunction(str1);
  console.log("reverseStr..", reverseStr);

  function stringIntoArray(str) {
    //spread operators
    //rest operators
    return [...str];
  }

  const str2 = "Hello";
  const strIntoArray = stringIntoArray(str2);
  console.log("hello", strIntoArray);

  function table(i) {
    const N = 2 * i;
    for (let i = 0; i <= 0; i++) {
      if (2 * N) console.log("Number is even");
      else console.log("Number is odd");
    }
    return table;
  }
  const j = 2;
  const T = table(j);
  console.log(T);

  return <></>;
};

export default Practice;
