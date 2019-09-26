import React, { Component } from "react";
import Hover from "./Hover";

const styles = {
  container: {
    position: "relative",
    display: "flex"
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.8)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px"
  }
};

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({
      hovering: true
    });
  }

  mouseOut() {
    this.setState({
      hovering: false
    });
  }

  render() {
    const { hovering } = this.state;
    const { text, children } = this.props;
    return (
      <Hover>
        {hovering => {
          <div style={styles.container}>
            {hovering === true && <div style={styles.tooltip}>{text}</div>}
            {children}
          </div>;
        }}
      </Hover>
    );
  }
}
