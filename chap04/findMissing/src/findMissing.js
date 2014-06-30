function findMissing(arr){
	var actualSum = 0
	,max = arr[0], min = arr[0]
	,offset, missing
	,containsCero = false
	,arrOfNegatives = [];

	for(var index = 0, current; index < arr.length; index++){
		current = arr[index];
		if(current < 0) {
			arrOfNegatives.push(-current); 
		} else {
			max = current>max? current:max;
			min = current<min || min<0? current:min;
			actualSum += current==0? (containsCero = true, current) : arr[index];
		}
	}

	offset = /*min === max? 0 :*/ (max*(max+1))/2 - (min*(min+1))/2 - actualSum;
	if(arrOfNegatives.length > 0){
		missing = findMissing(arrOfNegatives);
		missing = missing && -missing;
		if(missing) return missing;
		if(arrOfNegatives.length != arr.length){
			if(offset == 0) return null;
			else return 0;
		}
	}
	return offset > 0? min + offset : null;
}








Object.defineProperty(Array.prototype, 'populate', {
	value: function (of, quantity, sequence){
		var next = of;
		if(sequence) while(quantity>0){
			this.push(next++);
			quantity--;
		}
		else while(quantity>0){
			this.push(next);
			quantity--;
		}
		return this;
	}
});
Object.defineProperty(Array.prototype, "shuffle", {
	value: function (){
		return this.sort(function() {
			return .5 - Math.random();
		});
	}
});