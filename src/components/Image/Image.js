import React from "react";
import "./Image.css";
import svg from "../../images/sphynx-cat.svg";
import svg2 from "../../images/american-wirehair-cat.svg";
import svg3 from "../../images/cornish-rex-cat.svg";
import svg4 from "../../images/bengal-cat.svg";
import svg5 from "../../images/ocicat.svg";
import svg6 from "../../images/chausie-cat.svg";

const imagesArr = [svg, svg2, svg3, svg4, svg5, svg6];

class Image extends React.Component {
  state = {
    image: imagesArr[this.randomize(imagesArr.length - 1)],
    duration: `${Math.random() * (5 + 1)}s`,
  };

  randomize(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  render() {
    return (
      <img
        key={this.state.image}
        className="image"
        src={this.state.image}
        alt="this is cat"
        style={{
          left: `${
            this.props.mouseMoving === false ? this.randomize(100) : 0
          }%`,
          top: `${this.props.mouseMoving === false ? this.randomize(100) : 0}%`,
          transitionDuration: this.state.duration,
          position: "absolute",
          transform: `translate(${this.props.X}px, ${this.props.Y}px)`,
        }}
      />
    );
  }
}

export default Image;
