const LoggerFactory = (loggerParams: string) => {
  console.log("Logger running");
  return (constructor: Function) => {
    console.log(loggerParams);
    console.log("デコレータで受け取ったクラスのコンストラクタ:" + constructor);
  };
};

@LoggerFactory("this is logger params")
class Person2 {
  name = "hikaru";
  constructor() {
    console.log("Person class make instance");
  }
}

const personInstance2 = new Person2();
console.log(personInstance2);
