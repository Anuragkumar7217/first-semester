let employee = {
    name: "Amit",
    salary: 30000,
    department: "IT"
};
let newEmployee = {
    ...employee,
    salary: 30
};

let combine={
    ...employee,
    ...newEmployee
}

console.log(combine);