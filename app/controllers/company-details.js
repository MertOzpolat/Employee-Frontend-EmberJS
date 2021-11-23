import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CompanyDetailsController extends Controller {
  @service('employeeApi') employeeApi;
  @service('router') router;
  @action
  editButtonClicked(id) {
    this.router.transitionTo(`/employee/${id}`, id);
  }
  @action
  async deleteButtonClicked(id) {
    await this.employeeApi.deleteEmployee(id);
    this.send('refreshModel');
  }
  @action
  async addButtonClicked(employee) {
    const companyToGo = {
      id: this.model.id,
      name: this.model.name,
    };
    const employeeToGo = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      salary: this.salary,
      company: companyToGo,
    };
    await this.employeeApi
      .addEmployee(employeeToGo)
      .then(() => this.send('refreshModel'));
  }
}
