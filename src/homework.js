import React, { Component } from "react";
import "./homework.css";

export default class Homework extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [
        { id: 0, path: "1_1.JPG" },
        { id: 1, path: "1_2.JPG" },
        { id: 2, path: "2_1.JPG" },
        { id: 3, path: "2_2.JPG" }
      ],
      imgId: 0,
      imgB: 3,
      imgA: 1,
      button: 1
    };
  }
  render() {
    // const { imgId, imgB } = this.state;
    // const imgId = this.state.imgId;
    return (
      <div className="helloworld">
        <button onClick={e => this.setState({ button: 1 })}>Все фото</button>
        <button onClick={e => this.setState({ button: 2 })}>Текущее</button>
        <button onClick={e => this.setState({ button: 3 })}>По три</button>
        <div className="iamtired">
          {(() => {
            if (this.state.button === 1) {
              return (
                <div className="first">
                  <img src={this.state.img[0].path} alt="0" height="200" />
                  <img src={this.state.img[1].path} alt="1" height="200" />
                  <img src={this.state.img[2].path} alt="2" height="200" />
                  <img src={this.state.img[3].path} alt="3" height="200" />
                </div>
              );
            } else if (this.state.button === 2) {
              return (
                <div className="second">
                  <img
                    src={
                      this.state.img.find(p => p.id === this.state.imgId).path
                    }
                    alt={this.state.imgId}
                  />
                </div>
              );
            } else {
              return (
                <div className="third">
                  <img
                    src={
                      this.state.img.find(p => p.id === this.state.imgB).path
                    }
                    alt={this.state.imgB}
                    height="150"
                    onClick={e =>
                      this.setState({
                        imgId:
                          this.state.imgId === 0 ? 3 : this.state.imgId - 1,
                        imgB: this.state.imgB === 0 ? 3 : this.state.imgB - 1,
                        imgA: this.state.imgA === 0 ? 3 : this.state.imgA - 1
                      })
                    }
                  />
                  <img
                    src={
                      this.state.img.find(p => p.id === this.state.imgId).path
                    }
                    alt={this.state.imgId}
                    height="250"
                  />
                  <img
                    src={
                      this.state.img.find(p => p.id === this.state.imgA).path
                    }
                    alt={this.state.imgA}
                    height="150"
                    onClick={e =>
                      this.setState({
                        imgId:
                          this.state.imgId === 3 ? 0 : this.state.imgId + 1,
                        imgB: this.state.imgB === 3 ? 0 : this.state.imgB + 1,
                        imgA: this.state.imgA === 3 ? 0 : this.state.imgA + 1
                      })
                    }
                  />
                </div>
              );
            }
          })()}
        </div>
      </div>
    );
  }
}
