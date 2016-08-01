function countUpvoteRanges(data, rangeLength) {
	for (var i = 0; i < data.length - rangeLength + 1; i++) {
		rangeTotal(data.slice(i, i + rangeLength));
	}
}

function rangeTotal(arr) {
	var nonDecreasingRanges = 0;
	var nonIncreasingRanges = 0;
	var lastComparison = { nonDecreasing: null, nonIncreasing: null };
	var currentNonDecreasingRangesToAdd = 1;
	var currentNonIncreasingRangesToAdd = 1;

	for (var i = 1; i < arr.length; i++) {
		var comparison = compare(arr[i - 1], arr[i]);
		
		if (comparison.nonDecreasing) {
			if (lastComparison.nonDecreasing) {
				currentNonDecreasingRangesToAdd++;
			} else {
				currentNonDecreasingRangesToAdd = 1;
			}
			nonDecreasingRanges += currentNonDecreasingRangesToAdd;
		}

		if (comparison.nonIncreasing) {
			if (lastComparison.nonIncreasing) {
				currentNonIncreasingRangesToAdd++;
			} else {
				currentNonIncreasingRangesToAdd = 1;
			}
			nonIncreasingRanges += currentNonIncreasingRangesToAdd;
		}
		
		lastComparison = comparison;
	}
	
	console.log(nonDecreasingRanges - nonIncreasingRanges);
}

function compare(a, b) {
	return {
		nonDecreasing: a <= b,
		nonIncreasing: b <= a
	};
}

var testCases = [
	{
		data: [1,2,3,1,1],
		rangeLength: 3,
		expected: '3 0 -2'
	},
	{
		data: [9,5],
		rangeLength: 2,
		expected: '-1'
	},
	{
		data: [2,7],
		rangeLength: 2,
		expected: '1'
	},
	{
		data: [5,5,4,1,8,7],
		rangeLength: 6,
		expected: '-5'
	},
	{
		data: [3,3,9,6,4,1],
		rangeLength: 1,
		expected: '0 0 0 0 0 0'
	}
];

testCases.forEach(function(testCase) {
	countUpvoteRanges(testCase.data, testCase.rangeLength);
	console.log(testCase.expected);
	console.debug('----------------');
});
