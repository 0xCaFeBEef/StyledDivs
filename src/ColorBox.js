import React, { Component } from "react";
import StyledDiv from "./components/Div/Div";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      keys: []
    };
    this.drawBoxes = this.drawBoxes.bind(this);
    this.chooseNewColor = this.chooseNewColor.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.drawBoxes();
      // this.setState({
      //   boxes: this.drawBoxes()
      // });
    }, 100);
  }

  getRandomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 255)
        .toString(16)
        .padStart(2, "0") +
      Math.floor(Math.random() * 255)
        .toString(16)
        .padStart(2, "0") +
      Math.floor(Math.random() * 255)
        .toString(16)
        .padStart(2, "0")
    );
  };

  drawBoxes = () => {
    let a = [];
    let b = [];
    for (let i = 0; i < 18; i++) {
      a.push(this.getRandomColor());
      b.push(i);
    }
    this.setState({
      boxes: a,
      keys: b
    });
  };
  chooseNewColor = (a) => {
    let colors = this.state.boxes;
    let oldColor = colors[a];
    colors[a] = this.getRandomColor();

    this.setState((curState) => ({
      Balls: colors
    }));
    let lblColor = document.getElementsByName("lblColor")[0];
    lblColor.textContent =
      "old color: " + oldColor + " | new color: " + colors[a];
  };

  render() {
    return (
      <div className="ColorBox">
        {this.state.keys.map((a) => (
          <StyledDiv
            key={a}
            onClick={() => {
              this.chooseNewColor(a);
            }}
            backgroundColor={this.state.boxes[a]}
          ></StyledDiv>
        ))}
        <div name="lblColor"></div>
      </div>
    );
  }
}
export default ColorBox;
