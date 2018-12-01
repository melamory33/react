import React, { Component } from "react";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [
        { id: 0, path: "1_1.JPG" },
        { id: 1, path: "1_2.JPG" },
        { id: 2, path: "2_1.JPG" },
        { id: 3, path: "2_2.JPG" }
      ],
      imgId: 0
    };
  }
  render() {
    return (
      <div className="wtfucki">
        <button
          onClick={e =>
            this.setState({
              imgId: this.state.imgId === 0 ? 3 : this.state.imgId - 1
            })
          }
        >
          {"<<"}
        </button>
        <img
          src={this.state.img.find(p => p.id === this.state.imgId).path}
          alt={this.state.imgId}
        />
        <button
          onClick={e =>
            this.setState({
              imgId: this.state.imgId === 3 ? 0 : this.state.imgId + 1
            })
          }
        >
          {">>"}
        </button>
      </div>
    );
  }
}
