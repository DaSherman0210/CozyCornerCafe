var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: '' };

    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    var items = [];
    var level;
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push( /*#__PURE__*/React.createElement(Item, { key: index, id: this.state.items[index], level: level }));
    }
    return items;
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left' });

  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right' });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "carousel", className: "noselect" }, /*#__PURE__*/
      React.createElement("div", { className: "arrow arrow-left", onClick: this.leftClick }, /*#__PURE__*/React.createElement("i", { className: "fi-arrow-left" })), /*#__PURE__*/
      React.createElement(ReactCSSTransitionGroup, {
        transitionName: this.state.direction },
      this.generateItems()), /*#__PURE__*/

      React.createElement("div", { className: "arrow arrow-right", onClick: this.rightClick }, /*#__PURE__*/React.createElement("i", { className: "fi-arrow-right" }))));


  }}


class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level };

  }

  render() {
    const className = 'item level' + this.props.level;
    return /*#__PURE__*/(
      React.createElement("div", { className: className },
      this.props.id));


  }}


var items = ["cafe 1", "cafe 2", "cafe 3", "cafe 4", "cafe 5", "cafe 6", "cafe 7", "cafe 8", "cafe 9", "cafe 10" ];
ReactDOM.render( /*#__PURE__*/React.createElement(Carousel, { items: items, active: 0 }), document.getElementById('app'));