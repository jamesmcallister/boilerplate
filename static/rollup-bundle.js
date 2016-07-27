import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link, browserHistory, Router, Route, IndexRoute } from 'react-router';
import 'tachyons';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Logo = function (_Component) {
  inherits(Logo, _Component);

  function Logo() {
    classCallCheck(this, Logo);
    return possibleConstructorReturn(this, Object.getPrototypeOf(Logo).apply(this, arguments));
  }

  createClass(Logo, [{
    key: 'render',
    value: function render() {
      var details = this.props.details;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'white' },
          details.logo_text
        ),
        React.createElement(
          'h2',
          { className: 'white' },
          details.title
        )
      );
    }
  }]);
  return Logo;
}(Component);

Logo.propTypes = {
  details: PropTypes.string,
  logo_text: PropTypes.string,
  title: PropTypes.string
};

var Header = function (_Component) {
  inherits(Header, _Component);

  function Header() {
    classCallCheck(this, Header);
    return possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
  }

  createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'bg-black-80 w-100 ph3 pv3 pv4-ns ph4-m ph5-l' },
        React.createElement(
          'nav',
          { className: 'f6 fw6 ttu tracked' },
          React.createElement(
            Link,
            { className: 'link dim white dib mr3', to: '/' },
            ' Home'
          ),
          React.createElement(
            Link,
            { className: 'link dim white dib mr3', to: '/about' },
            ' About'
          ),
          React.createElement(
            Link,
            { className: 'link dim white dib mr3', to: '/contact' },
            ' Contact'
          )
        ),
        React.createElement(Logo, this.props)
      );
    }
  }]);
  return Header;
}(Component);

Header.propTypes = {
  details: PropTypes.string
};

var SiteConfig = {
  logo_text: 'Boilerpate',
  logo_img: 'blank.jpg',
  title: 'YAB',
  copyright: 'James McAllister',
  email: 'james@mcallister.xyz'
};

var reactcopyright = function (_Component) {
  inherits(reactcopyright, _Component);

  function reactcopyright() {
    classCallCheck(this, reactcopyright);
    return possibleConstructorReturn(this, Object.getPrototypeOf(reactcopyright).apply(this, arguments));
  }

  createClass(reactcopyright, [{
    key: 'copyrightDate',
    value: function copyrightDate() {
      var date = new Date();
      var year = date.getFullYear();
      return year;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'span',
        null,
        '© ',
        this.props.fromDate,
        ' - ',
        this.copyrightDate(),
        ' ',
        this.props.copyrightName,
        ' .'
      );
    }
  }]);
  return reactcopyright;
}(Component);

reactcopyright.defaultProps = {
  fromDate: '1908',
  copyrightName: 'Amce Inc'
};
reactcopyright.propTypes = {
  fromDate: PropTypes.string,
  copyrightName: PropTypes.string
};

var App = function (_Component) {
  inherits(App, _Component);

  function App() {
    classCallCheck(this, App);
    return possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'bg-black-10' },
        React.createElement(Header, { details: SiteConfig }),
        React.createElement(
          'div',
          { className: 'vw-100 ph3 pv3 pv4-ns ph4-m' },
          this.props.children
        ),
        React.createElement(reactcopyright, { copyrightName: 'James McAllister', fromDate: '1980' })
      );
    }
  }]);
  return App;
}(Component);

App.propTypes = {
  children: PropTypes.string
};

var About = function (_Component) {
  inherits(About, _Component);

  function About() {
    classCallCheck(this, About);
    return possibleConstructorReturn(this, Object.getPrototypeOf(About).apply(this, arguments));
  }

  createClass(About, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'About'
      );
    }
  }]);
  return About;
}(Component);

var Home = function (_Component) {
  inherits(Home, _Component);

  function Home() {
    classCallCheck(this, Home);
    return possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
  }

  createClass(Home, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Home'
      );
    }
  }]);
  return Home;
}(Component);

var Contact = function (_Component) {
  inherits(Contact, _Component);

  function Contact() {
    classCallCheck(this, Contact);
    return possibleConstructorReturn(this, Object.getPrototypeOf(Contact).apply(this, arguments));
  }

  createClass(Contact, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Contact'
      );
    }
  }]);
  return Contact;
}(Component);

var routes = React.createElement(
  Route,
  { path: '/', component: App },
  React.createElement(IndexRoute, { component: Home }),
  React.createElement(Route, { path: '/about', component: About }),
  React.createElement(Route, { path: '/contact', component: Contact })
);

render(React.createElement(Router, { routes: routes, history: browserHistory }), document.getElementById('app'));