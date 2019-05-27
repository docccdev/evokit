import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as Babel from 'babel-standalone';
import * as DemoBoxReact from 'docsify-demo-box-react/dist/docsify-demo-box-react.min';
import * as EvoKit from 'evokit';

window.React = React;
window.ReactDOM = ReactDOM;
window.PropTypes = PropTypes;
window.Babel = Babel;
window.DemoBoxReact = DemoBoxReact;
window.EvoKit = EvoKit;

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

window.topFunction = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
