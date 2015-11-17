'use strict';

var React = require('react');

var bottomStyle={
'height' : '100px',
'width' : '100px'
};

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={bottomStyle}>{this.props.value}</button>
    );
  }
});
React.render(<Box value='Y'/>, document.body);
