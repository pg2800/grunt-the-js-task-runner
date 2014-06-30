Object.defineProperty(Array.prototype, 'binarySearch', {
	value: function (number, offset){
		offset = offset || 0;
		var array = this.slice(0)
		,length = array.length
		,index = Math.floor(length/2)
		,current = array[index];

		if(length == 0) return -1 * (offset + index);
		if(number < current) return array.splice(0, index).binarySearch(number, offset);
		if(number > current) return array.splice(index + 1).binarySearch(number, offset + index + 1);
		return offset + index;
	}
});


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