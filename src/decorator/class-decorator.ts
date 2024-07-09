const Logger = (constructor: Function) => {
  console.log("Logger running");
  console.log("Loggerの中で受けとったconstructorを表示:" + constructor);
};

@Logger
class Person {
  name = "hikaru";
  constructor() {
    console.log("Person class make instance");
  }
}

const personInstance = new Person();
console.log(personInstance);
