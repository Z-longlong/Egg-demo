// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNotFoundHandler = require('../../../app/middleware/notFoundHandler');

declare module 'egg' {
  interface IMiddleware {
    notFoundHandler: typeof ExportNotFoundHandler;
  }
}
