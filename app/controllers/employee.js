import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmployeeController extends Controller {
  @service('employeeApi') employeeApi;
  @service('router') router;
  @action
  async editButtonClicked(employee) {
    await this.employeeApi
      .updateEmployee(employee)
      .then(
        this.router
          .transitionTo(`/company-details/${employee.company.id}`)
          .then((route) => route.refresh())
      );
  }
}
