describe("Binary Search",function (){
	var arr, arrMissingNumber, shuffledArr;
	beforeEach(function() {
		arr = [].populate(0,10,true);
		arrMissingNumber = [].populate(0,11,true);
		arrMissingNumber.splice(3,1);
		shuffledArr = [].populate(0,10,true).shuffle();
	});
	it("finds everything setted up", function() {
		expect(arr.length).toBeGreaterThan(0);
		expect(arrMissingNumber.length).toBeGreaterThan(0);
		expect(shuffledArr.length).toBeGreaterThan(0);
	});
	it("should find the number", function (){
		expect(arr.binarySearch(1)).toBe(1);
		expect(arr.binarySearch(2)).toBe(2);
		expect(arr.binarySearch(3)).toBe(3);
		expect(arr.binarySearch(4)).toBe(4);
		expect(arr.binarySearch(5)).toBe(5);
		expect(arr.binarySearch(6)).toBe(6);
		expect(arr.binarySearch(7)).toBe(7);
		expect(arr.binarySearch(8)).toBe(8);
		expect(arr.binarySearch(9)).toBe(9);
	});
	it("should find the index where it should be", function (){
		expect(arrMissingNumber.binarySearch(3)).toBeLessThan(0);
		expect(arrMissingNumber.binarySearch(3)).toBe(-3);
	});
	xit("should not find the number MOST OF THE TIMES", function (){
		// console.log(shuffledArr);
		// console.log(shuffledArr.binarySearch(5));
		expect(shuffledArr.binarySearch(5)).toBeLessThan(0);
	});
});