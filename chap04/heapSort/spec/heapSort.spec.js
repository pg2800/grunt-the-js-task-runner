describe("Heap Sort Algorithm", function() {
	var arr, result, length;

	beforeEach(function() {
		arr = [2,6,5,4,8,7,3,9,1];
		result = [1,2,3,4,5,6,7,8,9];
		length = arr.length;
	});

	describe("formulas", function() {
		it("finds the children", function() {
			expect( arr.firstBinaryTreeLikeChildrenOf(2) ).toEqual(6);
			expect( arr.firstBinaryTreeLikeChildrenOf(6) ).toEqual(4);
			expect( arr.firstBinaryTreeLikeChildrenOf(5) ).toEqual(7);
			expect( arr.firstBinaryTreeLikeChildrenOf(4) ).toEqual(9);
			expect( arr.firstBinaryTreeLikeChildrenOf(8) ).toBeUndefined();
			expect( arr.firstBinaryTreeLikeChildrenOf(7) ).toBeUndefined();
			expect( arr.firstBinaryTreeLikeChildrenOf(3) ).toBeUndefined();
			expect( arr.firstBinaryTreeLikeChildrenOf(9) ).toBeUndefined();
			expect( arr.firstBinaryTreeLikeChildrenOf(1) ).toBeUndefined();
		});
		it("finds the parent", function() {
			expect(arr.parentNodeOf(6)).toBe(2);
			expect(arr.parentNodeOf(5)).toBe(2);
			expect(arr.parentNodeOf(4)).toBe(6);
			expect(arr.parentNodeOf(8)).toBe(6);
			expect(arr.parentNodeOf(9)).toBe(4);
			expect(arr.parentNodeOf(1)).toBe(4);
			expect(arr.parentNodeOf(7)).toBe(5);
			expect(arr.parentNodeOf(3)).toBe(5);
			expect(arr.parentNodeOf(2)).toBeUndefined();
		});
		it("swaps the elements", function() {
			expect([1,3,2].swap(1,2)).toEqual([1,2,3]);
		});
	});
	//
	describe("Result", function() {
		it("should sort the array", function() {
			expect(heapSort(arr)).toEqual(result);
		});
	});
	describe("More dificult tests", function() {
		it("should sort repeated values", function() {
			expect(heapSort([0,0,1,2,3,4,4,5,5,6,7,8,9].shuffle())).toEqual([0,0,1,2,3,4,4,5,5,6,7,8,9]);
		});
		it("should sort negative values", function() {
			expect(heapSort([-7,-6,-5,0,1,2,3,4,5,6,7,8,9].shuffle())).toEqual([-7,-6,-5,0,1,2,3,4,5,6,7,8,9]);
			expect(heapSort([-7,-6,-5,0,1].shuffle())).toEqual([-7,-6,-5,0,1]);
		});
		it("has a problem with strings", function() {
			// console.log(repeatedValues.shuffle() + ' --> '+ [0,0,1,2,3,4,4,5,5,6,7,8,9]);
			expect(heapSort(["-7",-6,-5,"0",1,2,3,4,5,6,7,8,9].shuffle())).not.toEqual(["-7",-6,-5,"0",1,2,3,4,5,6,7,8,9]);
		});
	});
});