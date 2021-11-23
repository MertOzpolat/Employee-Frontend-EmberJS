import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CompaniesRoute extends Route {
  @service('companyApi') companyApi;
  @action
  refreshModel() {
    this.refresh();
  }
  model() {
    return this.companyApi.getCompanies();
  }
}
