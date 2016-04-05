module.exports = exports = {
    greet : function(name) {
      return 'hello ' + name;
    }
};

(function hiNode() {
  if(process.argv[2]) {
    console.log('hello ' + process.argv[2]);
  }
}());




