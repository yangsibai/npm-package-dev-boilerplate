'use strict';

import 'babel-polyfill';
import {add} from '../src/bar';
import {assert} from 'chai';

describe('module bar test', () => {
    context('methods test', ()=> {
        it('add test', ()=> {
            assert.equal(add(1, 2), 3);
        });
    });
});
