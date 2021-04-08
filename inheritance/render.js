class Component {
    Tax=18;
    render() {
      console.log("Class Component - Render Method");
    }
  }
  
  class Message extends Component {
    Tax=16;
    render() {
      console.log("Message Class - Render Method");
    }
  }
  
  let m1 = new Message();
  m1.render();
  console.log(m1.Tax);