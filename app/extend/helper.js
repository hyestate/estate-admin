
module.exports = {
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },
  clone(obj) {
    return obj;
  }
};
