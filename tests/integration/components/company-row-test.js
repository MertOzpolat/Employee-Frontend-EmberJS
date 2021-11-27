import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import click from '@ember/test-helpers/dom/click';

module('Integration | Component | company-row', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    
    this.set('companies', [
      {
        id: 1,
        name: 'EBF',
      },
      {
        id: 2,
        name: 'otherCompany',
      },
    ]);

    var isShowButtonClicked = 0;
    var isDeleteButtonClicked = 0;
    var isEditButtonClicked = 0;
    this.set('showButtonClicked', () => {
      isShowButtonClicked++;
    });
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
            {{#each this.companies as |company| }}
                <CompanyRow @company={{company}} @showButtonClicked={{this.showButtonClicked}} @deleteButtonClicked={{this.deleteButtonClicked}} @editButtonClicked={{this.editButtonClicked}}/>
            {{/each}}
      </tbody>
    </table>
    `);

    assert.dom('tr').exists({ count: 2 });
    assert.dom('tr:nth-child(1) td:first-child').containsText('EBF');
    assert.dom('tr:nth-child(2) td:first-child').containsText('otherCompany');

    await click('tr:nth-child(1) td:nth-child(2) button');
    await click('tr:nth-child(1) td:nth-child(3) button');
    await click('tr:nth-child(1) td:nth-child(4) button');

    await click('tr:nth-child(2) td:nth-child(2) button');
    await click('tr:nth-child(2) td:nth-child(3) button');
    await click('tr:nth-child(2) td:nth-child(4) button');

    assert.equal(isShowButtonClicked, 2, 'isShowButtonClicked');
    assert.equal(isDeleteButtonClicked, 2, 'isDeleteButtonClicked');
    assert.equal(isEditButtonClicked, 2, 'isEditButtonClicked');
  });
});
