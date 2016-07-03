'use strict';

function DNE(value) {
	return value === null || value === undefined;
}

var Heap = function(sort) {
	this.max_capacity = 0;
	this.arr = [];
	this.size = 0;
	this.sort = sort;
	this.newHeap = function(len) {
		this.max_capacity = len;
		this.arr = [];
		this.size = 0;
	};
	this.buildHeap = function(arr) { // takes an int array
		if (arr.length > this.max_capacity) {
			return;
		}
		for (var i = 0; i < arr.length; i++) {
			this.arr[i + 1] = arr[i];
			this.size++;
		}
		if (this.sort) {
			for (var i = Math.floor(this.size / 2); i >= 1; i--) {
				this.driftDown(i);
			}
		}
		return;
	};
	this.heapContents = function() {
		var temp = [];
		for (var i = 0; i < this.arr.length - 1; i++) {
			temp[i] = this.arr[i + 1];
		}
		return temp;
	};
	this.insert = function(i) {
		if (this.isFull()) {
			return;
		}
		this.arr[++this.size] = i;
		if (this.sort) {
			this.driftUp(this.size);
		}
		return;
	};
	this.findMax = function() {
		if (this.isEmpty()) {
			return null;
		}
		return this.arr[1];
	};
	this.deleteMax = function() {
		if (this.isEmpty()) {
			return;
		}
		var temp = this.arr[1];
		this.arr[1] = this.arr[this.size];
		this.size--;
		this.driftDown(1);
		return;
	};
	this.isEmpty = function() {
		return this.size === 0;
	};
	this.isFull = function() {
		return this.size === this.max_capacity;
	};
	this.heapSize = function() {
		return this.size;
	};
	this.driftDown = function(hole) {
		var child;
		var temp = this.arr[hole];
		while (Math.floor(hole * 2) <= this.size) {
			child = Math.floor(hole * 2);
			if (child + 1 <= this.size && this.arr[child + 1] > this.arr[child]) {
				child++;
			}
			if (this.arr[child] > temp) {
				this.arr[hole] = this.arr[child];
				hole = child;
			} else {
				break;
			}
		}
		this.arr[hole] = temp;
	};
	this.driftUp = function(hole) {
		var parent;
		var temp = this.arr[hole];
		while (Math.floor(hole / 2) >= 1) {
			parent = Math.floor(hole / 2);
			if (this.arr[parent] < temp) {
				this.arr[hole] = this.arr[parent];
				hole = parent;
			} else {
				break;
			}
		}
		this.arr[hole] = temp;
	};
	this.toString = function() {
		var str = '';
		for (var i = 1; i < this.arr.length; i++) {
			str += `${this.arr[i]}${(i < this.arr.length - 1 ? ', ' : '')}`;
		}
		return str;
	};
};

Node = function(i) {
	this.i = i;
	this.left = null;
	this.right = null;
};

// BTreePrinter is based on code found here: http://stackoverflow.com/a/4973083/5781945

var BTreePrinter = {
	printNode: function(root) {
		this.printNodeInternal([root], 1, this.maxLevel(root));
	},
	printNodeInternal: function(nodes, level, maxLevel) {
		if (nodes.length === 0 || BTreePrinter.allElementsDNE(nodes)) {
			return '';
		}
		
		var floor = maxLevel - level + 1;
        var endgeLines = Math.floor(Math.pow(2, (Math.max(floor - 1, 0))));
        var firstSpaces = Math.floor(Math.pow(2, (floor)) - 1);
        var betweenSpaces = Math.floor(Math.pow(2, (floor + 1)) - 1);
		var oneLongString = '';
		
		oneLongString += this.printWhitespaces(firstSpaces);
		var newNodes = [];
		for (var i = 0; i < nodes.length; i++) {
			var value = nodes[i];
			if (!DNE(value)) {
				oneLongString += `<span>${value.i}</span>`;
                newNodes.push(value.left);
                newNodes.push(value.right);
            } else {
				oneLongString += ' ';
                newNodes.push(null);
                newNodes.push(null);
            }
            
            if (value != null && i < nodes.length - 1 && floor < maxLevel) {
               oneLongString += this.printWhitespaces(betweenSpaces - ((value.i + '').length - 1));
            }
		}
		oneLongString += ','; // splitter character
			
		for (var i = 1; i <= endgeLines; i++) {
			for (var j = 0; j < nodes.length; j++) {
				oneLongString += this.printWhitespaces(firstSpaces - i);
				if (j > 0) {
					oneLongString += this.printWhitespaces(firstSpaces - i + 1);
				}
				if (DNE(nodes[j])) {
					oneLongString += this.printWhitespaces(endgeLines + endgeLines + i + 1);
					continue;
				}
				
				if (!DNE(nodes[j].left)) {
					oneLongString += '/';
				} else {
					oneLongString += ' ';
				}
				
				oneLongString += this.printWhitespaces(i + i - 1);
				
				if (!DNE(nodes[j].right)) {
					oneLongString += '\\';
				} else {
					oneLongString += ' ';
				}
				
				this.printWhitespaces(endgeLines + endgeLines - i);
			}
			oneLongString += ','; // splitter character
		}
		
		oneLongString += this.printNodeInternal(newNodes, level + 1, maxLevel);
		if (level === 1) {
			oneLongString = oneLongString.replace(/ /g, '&nbsp;').replace(/,/g, '<br>');
			oneLongString = oneLongString.substr(0, oneLongString.length - 4).replace(/(?:&nbsp;)+$/,'');
			$('.tree').html(`
<span class="normal"><a onclick="showHeapOnTree(inputHeap)">Your input array</a>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${inputHeap}
<br><a onclick="showHeapOnTree(sortedHeap)">Heap-formatted array</a>: ${sortedHeap}
<br>Number of elements: ${inputHeap.heapSize()}
<br>Number of levels: ${maxLevel}</span>
<br><br>${oneLongString}<br>`);
		}
		return oneLongString;
	},
	printWhitespaces: function(len) {
		var temp = '';
		for (var i = 0; i < len; i++) {
			temp += ' ';
		}
		return temp;
	},
	maxLevel: function(node) {
		return DNE(node)
			? 0
			: Math.max(this.maxLevel(DNE(node) ? node : node.left), this.maxLevel(DNE(node) ? node : node.right)) + 1;
	},
	allElementsDNE: function(list) {
		var allDNE = true;
		list.forEach(function(value) {
			if (!DNE(value)) {
				allDNE = false;
			}
		});
		return allDNE;
	}
};

var inputHeap;
var sortedHeap;

function checkForUrlArray() {
    var url = window.location.href;
    var index = url.indexOf('?');
    if (index === -1) {
		$('hr').hide();
		$('.tree').hide();
		return;
	}
    
    var urlArr = url.substring(index + 1).trim();
    if (urlArr.length == 0) {
		$('hr').hide();
		$('.tree').hide();
		return;
	}
    
    try { urlArr = decodeURIComponent(urlArr); }
    catch(err) { window.location.href = url.substr(0, index); }
    
	$('#user-input').val(urlArr);
	var rawList = urlArr.split(',');
	var ints = [];
	for (var i = 0; i < rawList.length; i++) {
		var temp = parseInt(rawList[i]);
		ints[i] = temp;
	}
	
	if (ints.length === 0) {
		$('hr').hide();
		$('.tree').hide();
	} else {
		$('hr').show();
		$('.tree').show();
	}
	
	inputHeap = new Heap(false);
	sortedHeap = new Heap(true);
	inputHeap.newHeap(ints.length);
	sortedHeap.newHeap(ints.length);
	for (var i = 0; i < ints.length; i++) {
		inputHeap.insert(ints[i]);
		sortedHeap.insert(ints[i]);
	}
	
	BTreePrinter.printNode(test1(inputHeap.heapContents()), inputHeap, sortedHeap);
}

function inputArray() {
	var rawInput = $('#user-input').val();
	if (rawInput.length === 0) { return; }
	var rawList = rawInput.replace(/ /g, '').split(',');
	if (rawList.length === 0 || (rawList.length === 1 && rawList[0] === '')) {
		$('#user-input').val('');
		return;
	}
	var ints = [];
	for (var i = 0; i < rawList.length; i++) {
		var temp = parseInt(rawList[i]);
		if (isNaN(temp)) {
			alert('Detected a non-numerical value in the array.\nPlease check your values and comma placement.');
			return;
		}
		ints[i] = temp;
	}
	
	if (ints.length === 0) {
		$('.tree').hide();
	} else {
		$('hr').show();
		$('.tree').show();
	}
	
	inputHeap = new Heap(false);
	sortedHeap = new Heap(true);
	inputHeap.newHeap(ints.length);
	sortedHeap.newHeap(ints.length);
	for (var i = 0; i < ints.length; i++) {
		inputHeap.insert(ints[i]);
		sortedHeap.insert(ints[i]);
	}
	
	var url = window.location.href;
    var index = url.indexOf('?');
	if (index === -1) {
		window.location.href += `?${encodeURIComponent(ints)}`;
	} else {
		window.location.href = `${url.substr(0, index)}?${encodeURIComponent(ints)}`;
	}
	BTreePrinter.printNode(test1(inputHeap), inputHeap, sortedHeap);
}

function test1(arr) {
	
	var data = [];
	
	for (var i = 1; i <= arr.length; i++) {
		data[i] = new Node(arr[i - 1]);
	}
	
	for (var i = 1; i < data.length; i++) {
		if (i * 2 < data.length) {
			data[i].left = data[i * 2];
		} else {
			break;
		}
		if (i * 2 + 1 < data.length) {
			data[i].right = data[i * 2 + 1];
		}
	}

	return data[1];
}

function showHeapOnTree(heap) {
	BTreePrinter.printNode(test1(heap.heapContents()), inputHeap, sortedHeap);
}

checkForUrlArray();