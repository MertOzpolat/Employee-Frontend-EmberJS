import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmployeesController extends Controller {
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
  showButtonClicked() {
    //route değişecek
    //this.router.transitionTo('');
  }
}
