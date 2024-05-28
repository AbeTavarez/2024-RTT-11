class Learner {
  // Private Fields
  #grades = [];
  #age;
  #name = {
    first: "",
    last: "",
  };

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

  // Getter
  get age() {
    return this.#age;
  }

  get name() {
    return this.#name.first + " " + this.#name.last;
  }

  get grades() {
    return this.#grades;
  }

  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
}

// ====== Instance of the class
const learner1 = new Learner("Tom", "Smith", 20);

console.log(learner1.age);
console.log(learner1.name);

// setter
learner1.grades = 80;
//learner1.grades(80); //! X error

console.log(learner1.grades);
