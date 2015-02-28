'use strict';
var React = require('react');

var Html = React.createClass({
  render: function() {
    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" sizes="16x16 32x32 64x64" />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
      </body>
      <script src="/js/client.js" defer></script>
      </html>
    );
  }
});

module.exports = Html;