import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CompanyDetailsRoute extends Route {
  @service('companyApi') companyApi;

  async model(params) {
    var res = await Promise.all([
      this.companyApi.getCompanyById(params.companyId),
      this.companyApi.getAverageSalary(params.companyId),
    ]);
    return {
      company: res[0],
      avarageSalary: res[1],
    };
  }

  @action
  refreshModel() {
    this.refresh();
  }
}
