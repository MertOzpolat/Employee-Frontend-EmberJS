import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class CompanyApiService extends Service {
  @service('api') api;
  async getCompanies(page = 1, size = 20) {
    return await this.api.get(`/companies?page=${page - 1}&size=${size}`);
  }
  async getCompanyById(id) {
    return await this.api.get(`/companies/${id}`);
  }
  async addCompany(company) {
    return await this.api.put(`/companies`, company);
  }
  async deleteCompany(id) {
    return await this.api.delete(`/companies/${id}`);
  }
  async updateCompany(company) {
    return await this.api.post(`/companies/`, company);
  }
  async getAverageSalary(id) {
    return await this.api.get(`/companies/averageSalary/${id}`);
  }
  async getEmployeeCountByCompanyId(id) {
    return await this.api.get(`/companies/employeeCount/${id}`);
  }
}
