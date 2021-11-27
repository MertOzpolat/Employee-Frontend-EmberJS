import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmployeeController extends Controller {
  @service('companyApi') companyApi;
  @service('router') router;
  @action
  async editButtonClicked(company) {
    company.employees = [];
    await this.companyApi
      .updateCompany(company)
      .then(
        this.router.transitionTo('/companies').then((route) => route.refresh())
      );
  }
}
