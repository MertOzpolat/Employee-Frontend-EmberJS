import EmberRouter from '@ember/routing/router';
import config from 'employee/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('company-details', { path: 'company-details/:companyId' });
  this.route('employees');
  this.route('employee', { path: '/employee/:employeeId' });
  this.route('companies');
  this.route('edit-company', { path: '/edit-company/:companyId' });
});
