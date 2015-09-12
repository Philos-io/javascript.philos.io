// TODO: Don't use native Array methods such as .slice, to solve this issues
function Collection(){}

function first(collection, n){
	return  n == undefined ? [collection[0]] : collection.slice(0, n);
}

function first(collection, n){
	if (!n) {
		return (n === 0) ? [] : [collection[0]];
	}
	// n > 0
	var result = [];

	for(var i = 0; (i <= collection.length - 1 && i < n) ; i++){
		result.push(collection[i]);
	}

	return result;
}

function last(){}

function map(){}

function each(){}

function sort(){}


Collection.prototype = {
	first: first,
	last: last,
	map: map,
	each: each,
	sort: sort,
};

module.exports = Collection;
