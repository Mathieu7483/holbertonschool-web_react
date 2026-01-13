interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
  contract: false
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Williams",
  fullTimeEmployee: false,
  yearsOfExperience: 3,
  location: "Chicago",
  contract: true
};

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);