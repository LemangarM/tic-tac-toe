'use strict';

var React = require('react');

var bottomStyle={
'height' : '100px',
'width' : '100px'
};

var Box = React.createClass({
  'render': function onRender () {
    return (
      <button style={bottomStyle} onClick={this.handleClick}>{this.props.value}</button>
    );
  }
});

var Row = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0,
      rowValues: ['-', '-', '-']
    };
  },
  render: function(){
    var boxes = this.state.rowValues.map(function(value, index){
      return (
        <Box value={value} key={index} rowIndex={index} />
      );
    });
    return (
      <div>
        {boxes}
      </div>
    );
  }
});


React.render(<Row/>, document.body);
