import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service router;

  @action
  onRenderBarcodes() {
    console.log(this.barcodes);
    this.router.transitionTo('render', {
      queryParams: {
        barcodes: this.barcodes.split('\n'),
      },
    });
  }
}
