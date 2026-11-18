let student={
    name: "Rahul",
    rollNumber: 101,
    age: 18,
    address:{
        city:"delhi"
    }
}

let newStudent=structuredClone(student);

newStudent.address.city="Mumbai";

console.log(student.address.city);
console.log(newStudent.address.city);




// let student={
//     name: "Rahul",
//     rollNumber: 101,
//     age: 18,
//     address:{
//         city:"delhi"
//     }
// }

// let newStudent={...student};
// newStudent.address.city="Mumbai";

// console.log(student.address.city);
// console.log(newStudent.address.city);