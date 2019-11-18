// hash ruby


// student = {
//   "firstname" => "boris" //my key is a string
//   :first_name => "boris" // my key is a symbol with th old syntax
//   first_name: "boris" //my key is a symbol with the sugar syntax
// }



// JS
const student = {
  firstName: "Boris", // column separation for key value pair
  lastName: "Paillard" //keys are always strings
};

console.log(typeof student);


// CRUD

// READING A PROPERTY: 2 WAYS OF DOING
  // 1. DOT OPERATOR : nameObject.property //= > value
  console.log(student.firstName);
  // 2. ['keyName'] key is always a string
  console.log(student['firstName']);

// SETTING A PROPERTY : CREATE AND UPDATE, 2 ways of doing
  // UPDATE
    // 1. DOT OPERATOR : nameObject.property //= > value
     student.firstName = "Hamza";
    // 2. with ['keyName']
    student['firstName'] = 'Hamza'
  // CREATE
  student.age = 25;

  console.log(student);

// DELETE
delete(student.age);

// console.log(student);









