// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');
var _ = require('underscore');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {
  // Structure the graph in JavaScript in a way that will be of service to you
  this.nodes = {};
  var file = fs.readFileSync(adjacencyListPath) ;
  var nodatArr = file.toString().split('\n');
  _.each(nodatArr, function (line) {
  	var splitted = line.split(' ');
  	this.nodes[splitted[0]] = splitted.slice(1);
  }, this);


  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = 'CONSTANCE';

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = 'CONSTANCE';

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = 'linear';

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	return Object.keys(this.nodes).length;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	return this.nodes[node];
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	var acc = {};
	for (var node in this.nodes) {
		_.each(this.nodes[node] , function (edge) {
			var e1 =   edge + ':' + node ;
			var e2 =  node  + ':' + edge ;
			acc[e1] = 1 ;
			acc[e2] = 1 ;
		}, this);
	}
	return Object.keys(acc).length / 2 ;
};

module.exports = Graph;












