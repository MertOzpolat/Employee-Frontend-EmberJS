import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import click from '@ember/test-helpers/dom/click';

module('Integration | Component | employee-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('employees',[
      {
        id:1,
        name:'mert',
        surname:'testSurname',
        email:'test@test.com',
        salary:1000
      },
      {
        id:2,
        name:'test',
        surname:'testSurname2',
        email:'test2@test.com',
        salary:2000
      }
    ]);
    
    var isDeleteButtonClicked = 0;
    var isEditButtonClicked = 0;
    
    this.set('deleteButtonClicked', () => {
      isDeleteButtonClicked++;
    });
    this.set('editButtonClicked', () => {
      isEditButtonClicked++;
    });

    // Template block usage:
    await render(hbs`
    <table class="table">
      <tbody>
            {{#each this.employees as |employee| }}
                <EmployeeRow @employee={{employee}} @deleteButtonClicked= {{this.deleteButtonClicked}} @editButtonClicked ={{this.editButtonClicked}}/>
            {{/each}}
      </tbody>
  
    </table>
    `);

    assert.dom('tr').exists({ count: 2 });
    assert.dom('tr:nth-child(1) td:first-child').containsText('mert');
    assert.dom('tr:nth-child(2) td:first-child').containsText('test');

    await click('tr:nth-child(1) td:nth-child(5) button');
    await click('tr:nth-child(1) td:nth-child(6) button');

    await click('tr:nth-child(2) td:nth-child(5) button');
    await click('tr:nth-child(2) td:nth-child(6) button');

    assert.equal(isDeleteButtonClicked, 2, 'isDeleteButtonClicked');
    assert.equal(isEditButtonClicked, 2, 'isEditButtonClicked');

  });
});
