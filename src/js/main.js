import angular from 'angular';
import 'angular-ui-router';

import Config from './config';

import AboutMeController from './controllers/aboutMe.js';


angular
.module('app', ['ui.router'])
  .config(Config)
  .controller('AboutMeController', AboutMeController);
