// Remove all native functions from an array
'use strict';

var expect = require('chai').expect;
var chai = require('chai');
chai.expect();

var Collection =  require('../array.js');


describe('Array', function(){
	var list, $;

	beforeEach(function(){
		list = [1, 3, 4];
		$ = new Collection();
	});

	describe('first', function(){
		it('Should return the first element of an array', function(){
			expect($.first(list)).to.deep.equal([1]);
		});

	 	it('Should return an empty array if 0 is passed as second argument', function(){
				expect($.first(list, 0)).to.deep.equal([]);
		});

		it('Should return the first 2 elements', function(){
				expect($.first(list, 2)).to.deep.equal([1, 3]);
		});

		it('Should return the first n elements', function(){
				expect($.first(list, 3)).to.deep.equal([1, 3, 4]);
		});

		it('Should return the entire collection if n is greater than the length of the collection', function(){
				expect(list.length).to.be.below(10);
				expect($.first(list, 10)).to.deep.equal(list);
		});
	});
});
