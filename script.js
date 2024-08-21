function mincost(arr)
{ 

	arr.sort((a, b) => a - b);

	let cost = 0;
	while (arr.length > 1) {

		let first = arr.shift();
		let second = arr.shift();
		let sum = first + second;

		cost += sum;

		arr.push(sum);

		arr.sort((a, b) => a - b);
	}

	return cost;
//write your code here
// return the min cost
  
}

module.exports=mincost;
