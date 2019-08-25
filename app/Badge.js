var React = require("react");
var ReactDOM = require("react-dom");


class Badge extends React.Component {
  render() {
    const { img, name, username } = this.props;
    return (
      <div>
        <h1>Badge 1</h1>
        <img src={img} alt="" />
        <h2>Name: {name}</h2>
        <h3>Username: {username}</h3>
      </div>
    );
  }
}

export default Badge;