import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CompaniesController extends Controller {
  @service('companyApi') companyApi;
  @service('router') router;
  @action
  editButtonClicked(id) {
    this.router.transitionTo(`/edit-company/${id}`, id);
  }
  @action
  async deleteButtonClicked(id) {
    await this.companyApi.deleteCompany(id);
    this.send('refreshModel');
  }
  @action
  showButtonClicked(id) {
    this.router.transitionTo(`/company-details/${id}`, id);
  }
  @action
  async addButtonClicked() {
    const companyToGo = {
      name: this.name,
    };
    await this.companyApi
      .addCompany(companyToGo)
      .then(() => this.send('refreshModel'));
  }
}
