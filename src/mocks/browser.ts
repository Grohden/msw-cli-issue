// https://github.com/mswjs/msw/discussions/2062
import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
