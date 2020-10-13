// Import css
import 'bootstrap/dist/css/bootstrap.css';
import './view/css/index.css';

// Class files
import Controller from './controller/Controller';
import Model from './model/Model';
import View from './view/View';

// Initialization of the controller
const controller = new Controller(new Model(), new View());
controller.init();