// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`); 
      };
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`); 
      };
      grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`); 
      };
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects() {
        console.log(`Today we are learning about ${subject}.`); 
      };
      PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`); 
      };
      sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`); 
      };
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`); 
      };
      debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`); 
      };
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Miami',
    age: 47,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I see dead people`
  });

const tom = new Instructor({
    name: 'Tom',
    location: 'San Francisco',
    age: 34,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Yipee kayaye`
  });

const jenny = new Student({
    name: 'Jenny',
    location: 'NYC',
    age: 31,
    gender: 'female',
    previousBackground: 'Uber Driver',
    className: 'Web20',
    favSubjects: 'Javascript'
  });

const brad = new Student({
    name: 'Brad',
    location: 'DC',
    age: 37,
    gender: 'male',
    previousBackground: 'chef',
    className: 'Web20',
    favSubjects: 'CSS'
  });

  const phil = new ProjectManager({
    name: 'Phil',
    location: 'Boston',
    age: 23,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `It's showtime`,
    gradClassName: 'Web18',
    favInstructor: 'Fred'
  });

  const jeff = new ProjectManager({
    name: 'Jeff',
    location: 'LA',
    age: 28,
    gender: 'male',
    favLanguage: 'Swift',
    specialty: 'Back-end',
    catchPhrase: `If you ain't first, your last`,
    gradClassName: 'Web18',
    favInstructor: 'Tom'
  });


  