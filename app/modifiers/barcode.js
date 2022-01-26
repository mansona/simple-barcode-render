import { modifier } from 'ember-modifier';
import JsBarcode from 'jsbarcode';

export default modifier(function barcode(element, positional /*, named*/) {
  JsBarcode(element)
    .options({ font: 'OCR-B' })
    .CODE128(positional[0], { fontSize: 18, textMargin: 0 })
    .render();
});
