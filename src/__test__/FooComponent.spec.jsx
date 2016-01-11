'use strict';

//import 'should';
import * as React from 'react';
import FooComponent from '../FooComponent.jsx';
import {assert} from 'chai';

window.React = React;

import {renderIntoDocument} from 'react-addons-test-utils';

describe('FooComponent test', ()=> {
    it('should work', ()=> {
        var foo = renderIntoDocument(
            <FooComponent />
        );
        var resultNode = foo.refs.result;
        assert.equal(resultNode.innerHTML, '3');
    });
});
