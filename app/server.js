require('node-jsx').install({ extension: '.jsx' });

var React = require('react');
var HtmlComponent = React.createFactory(require('./components/Html.jsx'));
var Router = require('react-router');

var express = require('express');
var routes = require('./components/Routes.jsx');

var server = express();
server.use('/js', express.static(__dirname + '/../build/js'));
server.use(express.static(__dirname + '/assets'));

server.use(function (req, res, next) {
  Router.run(routes, req.path, function (Handler, state) {
    var html = React.renderToStaticMarkup(HtmlComponent({
      title: 'Example',
      markup: React.renderToString(React.createFactory(Handler)())
    }));

    console.log('Rendering ' + req.path);
    res.send(html);
  });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);