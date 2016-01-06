'use strict';
import React from 'react';
import { render } from 'react-dom';
import './style.less';

import FooComponent from './FooComponent.jsx';

render((
    <FooComponent />
), document.getElementById('container'));
