var Heap = {
	max_capacity: 0,
	arr: [],
	size: 0,
	newHeap: function(len) {
		this.max_capacity = len;
		this.arr = [];
		this.size = 0;
	},
	buildHeap: function(arr) { // takes an int array
		if (arr.length > this.max_capacity) {
			return;
		}
		for (var i = 0; i < arr.length; i++) {
			this.arr[i + 1] = arr[i];
			this.size++;
		}
		for (var i = Math.floor(this.size / 2); i >= 1; i--) {
			//this.driftDown(i);
		}
		return;
	},
	heapContents: function() {
		var temp = [];
		for (var i = 0; i < this.arr.length - 1; i++) {
			temp[i] = this.arr[i + 1];
		}
		return temp;
	},
	insert: function(i) {
		if (this.isFull()) {
			return;
		}
		this.arr[++this.size] = i;
		//this.driftUp(this.size);
		return;
	},
	/*findMax: function() {
		return this.arr[1];
	},
	deleteMax: function() {
		if (this.isEmpty()) {
			return;
		}
		var temp = this.arr[1];
		this.arr[1] = this.arr[this.size];
		this.size--;
		this.driftDown(1);
		return;
	},
	isEmpty: function() {
		return this.size === 0;
	},*/
	isFull: function() {
		return this.size === this.max_capacity;
	},
	heapSize: function() {
		return this.size;
	},
	driftDown: function(hole) {
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
	},
	driftUp: function(hole) {
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
	},
	toString: function() {
		var str = '';
		for (var i = 1; i < this.arr.length; i++) {
			str += `${this.arr[i]}${(i < this.arr.length - 1 ? ', ' : '')}`;
		}
		return str;
	}
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
		if (nodes.length === 0 || BTreePrinter.isAllElementsNull(nodes)) {
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
			var val = nodes[i];
			if (val !== null) {
				oneLongString += `<span>${val.i}</span>`;
                newNodes.push(val.left);
                newNodes.push(val.right);
            } else {
				oneLongString += ' ';
                newNodes.push(null);
                newNodes.push(null);
            }
            
            if (val != null && i < nodes.length - 1 && floor < maxLevel) {
               oneLongString += this.printWhitespaces(betweenSpaces - ((val.i + '').length - 1));
            }
		}
		oneLongString += ','; // splitter character
			
		for (var i = 1; i <= endgeLines; i++) {
			for (var j = 0; j < nodes.length; j++) {
				oneLongString += this.printWhitespaces(firstSpaces - i);
				if (j > 0) {
					oneLongString += this.printWhitespaces(firstSpaces - i + 1);
				}
				if (nodes[j] === null) {
					oneLongString += this.printWhitespaces(endgeLines + endgeLines + i + 1);
					continue;
				}
				
				if (nodes[j].left !== null) {
					oneLongString += '/';
				} else {
					oneLongString += ' ';
				}
				
				oneLongString += this.printWhitespaces(i + i - 1);
				
				if (nodes[j].right != null) {
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
			$('.tree').html(`<br><span class="normal">Array: ${Heap.toString()}<br>Number of elements: ${Heap.heapSize()}<br>Number of levels: ${maxLevel}</span><br><br>${oneLongString}<br>`);
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
		return node === null ? 0 : Math.max(this.maxLevel(node.left), this.maxLevel(node.right)) + 1;
	},
	isAllElementsNull: function(list) {
		var allNull = true;
		list.forEach(function(val) {
			if (val !== null) {
				allNull = false;
			}
		});
		return allNull;
	}
};

function checkForUrlArray() {
    let url = window.location.href;
    let index = url.indexOf('?');
    if (index === -1) { return; }
    
    let urlArr = url.substring(index + 1).trim();
    if (urlArr.length == 0) { return; }
    
    try { urlArr = decodeURIComponent(urlArr); }
    catch(err) { window.location.href = url.substr(0, index); }
    
	$('#user-input').val(urlArr);
	var rawList = urlArr.split(',');
	var ints = [];
	for (let i = 0; i < rawList.length; i++) {
		let temp = parseInt(rawList[i]);
		ints[i] = temp;
	}
	BTreePrinter.printNode(test1(ints));
}

function inputArray() {
	var rawInput = $('#user-input').val();
	var rawList = rawInput.replace(/ /g, '').split(',');
	var ints = [];
	for (let i = 0; i < rawList.length; i++) {
		let temp = parseInt(rawList[i]);
		if (isNaN(temp)) {
			alert('Detected a non-numerical value in the array.\nPlease check your values (and your commas).');
			return;
		}
		ints[i] = temp;
	}
	let url = window.location.href;
    let index = url.indexOf('?');
	if (index === -1) {
		window.location.href += `?${encodeURIComponent(ints)}`;
	} else {
		window.location.href = `${url.substr(0, index)}?${encodeURIComponent(ints)}`;
	}
	BTreePrinter.printNode(test1(ints));
}

function test1(arr) {
	Heap.newHeap(arr.length);
	Heap.buildHeap([]);
	for (var i = 0; i < arr.length; i++) {
		Heap.insert(arr[i]);
	}
	
	var temp = Heap.heapContents();
	var data = [];
	
	for (var i = 1; i <= temp.length; i++) {
		data[i] = new Node(temp[i - 1]);
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

checkForUrlArray();