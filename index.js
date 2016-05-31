var loaderUtils = require('loader-utils');

module.exports = function() { }

module.exports.pitch = function(remainingRequest) {
  if (this.cacheable) {
    this.cacheable();
  }
  return [
    "// css-to-string-loader: transforms styles from css-loader to a string output",
    "",
    "// Get the styles",
    "var styles = require(" + loaderUtils.stringifyRequest(this, "!!" + remainingRequest) + ");",
    "",
    "if (typeof styles === 'string') {",
    "  // Return an existing string",
    "  module.exports = styles;",
    "} else {",
    "  // Call the custom toString method from css-loader module",
    "  module.exports = styles.toString();",
    "}"
  ].join('\n');
}

