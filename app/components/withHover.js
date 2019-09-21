import React from "react";

const withHover = () => {
  return class WithHover extends React.Component {
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
  };

  render(){
      return(
          <div mouseOver={this.mouseOver} mouseOut={this.mouseOut} >
              <Component hovering={this.state.hover} {...this.props} />
          </div>
      )
  }
};

export default withHover;
