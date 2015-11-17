'use strict';

var React = require('react');

var bottomStyle={
'height' : '100px',
'width' : '100px'
};

var Box = React.createClass({
  getInitialState: function() {
   return {value: this.props.initialValue};
 },

 handleClick: function(){
   var oldValue = this.state.value;
   var newValue = oldValue === 'X' ? 'O': 'X';
   this.setState({
     value: newValue
   });
 },

  'render': function onRender () {
    return (
      <button style={bottomStyle} onClick={this.handleClick}>{this.state.value}</button>
    );
  }
});
var Row = React.createClass({
  render: function(){
    return (
      <div>
        <Box/>
        <Box/>
        <Box/>
      </div>
    );
  }
});

React.render(<Row/>, document.body);
