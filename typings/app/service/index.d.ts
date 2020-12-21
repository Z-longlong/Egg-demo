// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/service/home');

declare module 'egg' {
  interface IService {
    home: ExportHome;
  }
}
