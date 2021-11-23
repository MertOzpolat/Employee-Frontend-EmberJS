import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class EmployeeApiService extends Service {
  @service('api') api;
  async getEmployees(page = 1, size = 20, companyId = undefined) {
    return await this.api.get(
      `/employees?page=${page - 1}&size=${size}${
        companyId ? `&companyId=${companyId}` : ''
      }`
    );
  }
  async getEmployeeById(id) {
    return await this.api.get(`/employees/${id}`);
  }
  async addEmployee(employee) {
    return await this.api.put(`/employees`, employee);
  }
  async deleteEmployee(id) {
    return await this.api.delete(`/employees/${id}`);
  }
  async updateEmployee(employee) {
    return await this.api.post(`/employees`, employee);
  }
}
