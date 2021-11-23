import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CompanyDetailsRoute extends Route {
  @service('companyApi') companyApi;

  model(params) {
    
    return {
      company:this.companyApi.getCompanyById(params.companyId),
      avarageSalary:this.companyApi.getCompanyById(params.companyId)
    };
  }

  @action
  refreshModel() {
    this.refresh();
  }
}
