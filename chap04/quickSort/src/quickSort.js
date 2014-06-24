function quickSort(arr){
	if(arr.length <= 1) return arr;
	var pivot = arr.splice(0,1), left = [], right = [];
	while (arr.length > 0){
		var current = arr.splice(0,1)[0];
		if(current <= pivot[0]) left.push(current);
		else right.push(current);
	}
	return quickSort(left).concat(pivot).concat(quickSort(right));
}