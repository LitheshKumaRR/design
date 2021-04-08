class Component {
    constructor(name) {
      this.name = name;
    }
  }
  class Message extends Component {
    constructor(message, name) {
      super(name);
      this.msg = message;
      console.log(this.msg);
    }
    getname(){
      console.log(this.name)
    }
  }
  let m1 = new Message("GM", "Mr Lithesh");
  console.log(m1.name);
  m1.getname();