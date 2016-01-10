'use strict';
import {Component, PropTypes} from 'react';
import {add} from './bar';

class FooComponent extends Component {
    render() {
        return <span onClick={this.props.onClick}>Foo Component, 1 + 2 = {add(1, 2)}</span>;
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

export default FooComponent;
