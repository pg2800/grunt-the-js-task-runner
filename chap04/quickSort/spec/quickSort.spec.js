describe("Quick Sort Algorithm", function() {
	var arr, result;
	beforeEach(function() {
		arr = [1,7,6,2,4,9,5,3,8];
		result = [1,2,3,4,5,6,7,8,9];
	});
	describe("Actual Result", function() {
		it("should sort an unordered array", function() {
			expect(quickSort(arr)).toEqual(result);
		});
	});
	
});