'use strict';

//import 'should';
import * as React from 'react';
import FooComponent from '../FooComponent.jsx';
import {assert} from 'chai';

import {renderIntoDocument} from 'react-addons-test-utils';

describe('FooComponent test', ()=> {
    it('should work', ()=> {
        var foo = renderIntoDocument(
            <FooComponent />
        );
        var resultNode = foo.refs.result;
        assert.equal(resultNode.value, '3');
    });
});
