import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('number') id;
  @attr('string') name;
  @attr('string') surname;
  @attr('string') email;
  @attr('number') surname;
  @belongsTo('company') company;
}
