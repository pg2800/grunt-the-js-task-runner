(function(){
	Object.defineProperty(Array.prototype, "firstBinaryTreeLikeChildrenOf", {
		value: function (value){
			return this[(2*this.indexOf(value))+1];
		}
	});
	Object.defineProperty(Array.prototype, "parentNodeOf", {
		value: function (value){
			return this[Math.floor((this.indexOf(value) - 1)/2)];
		}
	});
	Object.defineProperty(Array.prototype, "swap", {
		value: function (x, y){
			this[x] = this[y] + (this[y]=this[x], 0);
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
})();

function heapSort(arr){
	var limit = arr.length
	,index
	,leftChildNodeIndex ,rightChildNodeIndex
	,currentNode ,leftChildNode = undefined ,rightChildNode = undefined;

	while(limit>1){
		index = Math.floor((limit - 2)/2);
		while(index>=0){
			rightChildNodeIndex = (leftChildNodeIndex = (2*index)+1) + 1;

			currentNode = arr[index];
			leftChildNode = arr[leftChildNodeIndex];
			rightChildNode = arr[rightChildNodeIndex];
			if(rightChildNodeIndex == limit) rightChildNode = undefined;

			if(currentNode<leftChildNode){
				if(rightChildNode == undefined || leftChildNode>rightChildNode) arr.swap(index, leftChildNodeIndex);
				else arr.swap(index, rightChildNodeIndex);
			}
			else if(rightChildNode != undefined && currentNode<rightChildNode) arr.swap(index, rightChildNodeIndex);
			index--;
		}
		limit--;
		arr.swap(0, limit);

	}
	return arr;
}