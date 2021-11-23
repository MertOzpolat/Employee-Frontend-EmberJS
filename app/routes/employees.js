import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CompaniesRoute extends Route {
  @service('employeeApi') employeeApi;
  @action
  refreshModel() {
    this.refresh();
  }
  model() {
    return this.employeeApi.getEmployees();
  }
}
