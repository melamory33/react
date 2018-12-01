import React, { Component } from "react";

class Test extends Component {
  render() {
    return <div className="test">{this.props.value}</div>;
  }
}

class ListItem extends Component {
  render() {
    return (
      <div onClick={() => this.props.onDelete(this.props.id)}>
        {this.props.value}
      </div>
    );
  }
}

export default class List extends Component {
  render() {
    return (
      <div>
        {this.state.arrayOfItems.map(item => (
          <ListItem
            value={item.text}
            id={item.id}
            onDelete={id =>
              this.setState({
                arrayOfItems: this.state.arrayOfItems.filter(item => {
                  if (item.id === id) return false;
                  else return true;
                })
              })
            }
          />
        ))}
        <input
          type="text"
          onChange={e => this.setState({ inputTxt: e.target.value })}
        />
        <button
          onClick={() =>
            this.setState({
              arrayOfItems: this.state.arrayOfItems.concat([
                { id: ++this.idCounter, text: this.state.inputTxt }
              ])
            })
          }
        >
          Добавить
        </button>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      arrayOfItems: [
        { id: 0, text: "react" },
        { id: 2, text: "is" },
        { id: 4, text: "absolutly" },
        { id: 6, text: "shit" }
      ],
      inputTxt: ""
    };
    this.idCounter = 6;
  }
}
