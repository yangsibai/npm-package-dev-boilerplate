'use strict';
import {Component, PropTypes} from 'react';

class FooComponent extends Component {
    render() {
        return <span onClick={this.props.onClick}>Foo Component</span>;
    }
}

FooComponent.propTypes = {
    onClick: PropTypes.func
};

FooComponent.defaultProps = {
    onClick: function (e) {
        console.log('clicked');
        e.stopPropagation();
    }
};

export  default FooComponent;
