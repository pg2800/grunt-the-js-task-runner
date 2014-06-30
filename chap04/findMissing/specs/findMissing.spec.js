describe("Algorithm", function() {
	describe("Array Functionality", function() {
		var sequenceArr, equalArr, shuffledArray;
		beforeEach(function() {
			sequenceArr = [].populate(0, 1000, true);
			equalArr = [].populate(0, 1000, false);
			shuffledArray = [].populate(0, 1000, true).shuffle();
		});
		it("should have length of 1000", function() {
			expect(equalArr.length).toEqual(1000);
			expect(sequenceArr.length).toEqual(1000);
		});
		it("generates the correct sequence", function() {
			expect(sequenceArr[0]).toEqual(0);
			expect(sequenceArr[500]).toEqual(500);
			expect(sequenceArr[999]).toEqual(999);
		});
		it("shuffles the array", function() {
			expect(shuffledArray).not.toEqual(sequenceArr);
		});


	});
	var arrWithCero 
	,arrWithoutCero 
	,arrWithJustNegatives
	,arrWithBothNegativeAndPositives;

	beforeEach(function (){
		arrWithCero = [].populate(0, 100, true);
		arrWithCero.splice(3,1);
		arrWithCero.shuffle();

		arrWithoutCero = [].populate(1, 100, true);
		arrWithoutCero.splice(3,1);
		arrWithoutCero.shuffle();

		arrWithJustNegatives = [].populate(-50, 20, true);
		arrWithJustNegatives.splice(3,1);
		arrWithJustNegatives.shuffle();

		arrWithBothNegativeAndPositives = [].populate(-50, 100, true);
		arrWithBothNegativeAndPositives.splice(49,1); //-1
		arrWithBothNegativeAndPositives.shuffle();
	});
	describe("Finding The Number", function() {
		it("finds the number", function() {
			expect(findMissing([0,1])).toBeNull();
			expect(findMissing([1,3,7,5,6,4])).toBe(2);
			expect(findMissing([5,8,9,11,6,4,7])).toBe(10);
			expect(findMissing(arrWithoutCero)).toBe(4);
		});
		it("finds even when 0 is present", function() {
			expect(findMissing([0,1,3,5,6,4,7])).toBe(2);
			expect(findMissing(arrWithCero)).toBe(3);
			expect(findMissing([0,1,2,3,5,4,7])).toBe(6);
			expect(findMissing([1,2,3,5,6,4,7])).toBeNull();
		});
		it("finds even negative numbers",function (){
			expect(findMissing([-3,-1])).toBe(-2);
			expect(findMissing(arrWithJustNegatives)).toBe(-47);
		});
		it("finds it even in negative and positive at the same time", function() {
			expect(findMissing([-3,-2,-1,0,1])).toBeNull();
			expect(findMissing([-3,-2,-1,1])).toBe(0);
			expect(findMissing(arrWithBothNegativeAndPositives)).toBe(-1);
		});
	});
});