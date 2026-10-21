// console.log("Js is working fine.");

let college = "ABC";
function outer() {
    let department = "CSE";
    function inner() {
        let student = "Rahul";
        console.log(student);
        console.log(department);
        console.log(college);
    }
    inner();
}
outer();
