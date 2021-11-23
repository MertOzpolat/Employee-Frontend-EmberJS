import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmployeesEmployeeRoute extends Route {
  @service('employeeApi') employeeApi;

  model(params) {
    return this.employeeApi.getEmployeeById(params.employeeId);
  }
}
