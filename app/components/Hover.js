import React from "react";


export default class WithHover extends React.Component {
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

    render(){
        const { hovering } = this.state;
      return(
          <div mouseOver={this.mouseOver} mouseOut={this.mouseOut} >
              {this.props.children(hovering)} />
          </div>
      )
  }
}

export default Hover;
