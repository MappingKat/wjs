(function (context) {
  'use strict';
  // <--]
  context.wjs.loaderAdd('JsScript', {
    /**
     * Execute retrieved javascript.
     * @param {string} name
     * @param {string} value
     * @param {WJSProcessProto} process
     * @return {?}
     */
    parse: function (name, value, process) {
      // If value is not a function, it came from
      // the not cached json response, so
      // we are forced to evaluate it.
      var isFunction = typeof value === 'function';
      if (!isFunction) {
        // wjs, process and loader variables
        // can be used by scripts to register data.
        // We have to add local vars here, this allow to give
        // references to these vars into parsed script,
        // also after wjs script compression, who rename local vars.
        eval(value);
        return value;
      }
    }
  });
  // [-->
}(wjsContext));
