var multipart = require('co-multipart');

/**
 this.request.body = fields in object
 this.request.files = files in object
*/

module.exports = function() {
  return function*(next) {

    /* ignore if request is a GET */
    if (this.method === 'GET' || this.method === 'HEAD' || this.method === 'OPTIONS') {
      return yield * next;
    }

    var parts =
      yield * multipart(this);
    this.request.body = parts.field;
    this.request.files = parts.file;

    yield * next;

    parts.dispose()
  }
};