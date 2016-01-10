'use strict';

import 'babel-polyfill';
import {add} from '../src/bar';
import 'should';

describe('module bar test', () => {
    context('methods test', ()=> {
        it('add test', ()=> {
            add(1, 2).should.be.exactly(3);
        });
    });
});
