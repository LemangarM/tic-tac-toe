'use strict';

var React = require('react');

var bottomStyle={
'height' : '100px',
'width' : '100px'
};

var Box = React.createClass({
  getInitialState: function() {
   // naming it initialX clearly indicates that the only purpose
   // of the passed down prop is to initialize something internally
   return {value: this.props.initialValue};
 },
  'render': function onRender () {
    return (
      <button style={bottomStyle}>{this.state.value}</button>
    );
  }
});
React.render(<Box initialValue='X'/>, document.body);
