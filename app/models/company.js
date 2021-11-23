import Model, { attr, hasMany } from '@ember-data/model';
export default class CompanyModel extends Model {
  @hasMany('employee') employees;
  @attr('number') id;
  @attr('string') name;
}
