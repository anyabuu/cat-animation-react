import React from "react";
import "./App.css";
import Image from "./components/Image/Image";

class App extends React.Component {
  state = {
    X: 0,
    Y: 0,
    mouseMoving: false,
  };

  mouseMoving = (event) => {
    this.setState({
      X: event.pageX,
      Y: event.pageY,
      mouseMoving: true,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.mouseMoving);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mouseMoving);
  }

  render() {
    return (
      <>
        <section className="main">
          <div className="image-wrapper">
            <Image
              mouseMoving={this.state.mouseMoving}
              X={this.state.X}
              Y={this.state.Y}
            />
            <Image
              mouseMoving={this.state.mouseMoving}
              X={this.state.X}
              Y={this.state.Y}
            />
            <Image
              mouseMoving={this.state.mouseMoving}
              X={this.state.X}
              Y={this.state.Y}
            />
            <Image
              mouseMoving={this.state.mouseMoving}
              X={this.state.X}
              Y={this.state.Y}
            />
          </div>
        </section>
      </>
    );
  }
}

export default App;
