import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EditCompanyRoute extends Route {
    @service('companyApi') companyApi;

  model(params) {
    return this.companyApi.getCompanyById(params.companyId);
  }
}
