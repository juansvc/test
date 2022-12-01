import * as ResizeObserverModule from 'resize-observer-polyfill';

import 'whatwg-fetch';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

global.setImmediate = jest.useRealTimers;
global.ResizeObserver = ResizeObserverModule.default;
