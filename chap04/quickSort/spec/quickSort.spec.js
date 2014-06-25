describe("Quick Sort Algorithm", function() {
	var simpleUnordered, repeatedValues, negativeValues;
	beforeEach(function() {
		simpleUnordered = {
			arr: [1,7,6,2,4,9,5,0,3,8]
			,result: [0,1,2,3,4,5,6,7,8,9]
		}
		repeatedValues = {
			arr: [3,1,7,6,2,8,4,0,9,7,5,3,8]
			,result: [0,1,2,3,3,4,5,6,7,7,8,8,9]
		}
		negativeValues = {
			arr: [-3,1,7,-6,0,2,8,4,9,7,5,3,8]
			,result: [-6,-3,0,1,2,3,4,5,7,7,8,8,9]
		}
	});
	describe("Actual Result", function() {
		it("should sort an unordered array", function() {
			expect(quickSort(simpleUnordered.arr)).toEqual(simpleUnordered.result);
		});
		it("should sort repeated values", function() {
			expect(quickSort(repeatedValues.arr)).toEqual(repeatedValues.result);
		});
		it("should sort negative values", function() {
			expect(quickSort(negativeValues.arr)).toEqual(negativeValues.result);
		});
	});
	
});