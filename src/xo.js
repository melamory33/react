import React, { Component } from "react";
import "./xo.css";

export default class Xo extends Component {
  render() {
    const { table } = this.state;
    const { index } = this.state;
    let t = table.slice();
    return (
      <div className="xoxoxo">
        {table.map((r, i) => (
          <div className="row">
            {r.map((e, j) => (
              <div
                className="elem"
                onClick={() => {
                  if (index === 0) {
                    t[i][j] = "X";
                    this.setState({ index: this.state.index === 0 ? 1 : 0 });
                  } else {
                    t[i][j] = "O";
                    this.setState({ index: this.state.index === 0 ? 1 : 0 });
                  }
                }}
              >
                {e}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      table: [["", "", ""], ["", "", ""], ["", "", ""]],
      index: 0
    };
  }
}
