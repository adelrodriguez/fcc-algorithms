function updateInventory(arr1, arr2) {
	// All inventory must be accounted for or you're fired!
	var inventory = arr1;

	arr2.forEach(function (item) {
		var inInvetory = false;

		for (var i = 0; i < inventory.length; i++) {
			if (inventory[i][1] === item[1]) {
				inventory[i][0] += item[0];
				inInvetory = true;
				break;
			}
		}

		if (!inInvetory) {
			inventory.push(item);
		}
	});

	inventory.sort(function(a, b) {
		if (a[1] === b[1]) {
			return 0;
		} else {
			return (a[0] < b[0]? -1 : 1);
		}
	});

	return inventory;
}

// Example inventory lists
var curInv = [
	[21, "Bowling Ball"],
	[2, "Dirty Sock"],
	[1, "Hair Pin"],
	[5, "Microphone"]
];

var newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"]
];

updateInventory(curInv, newInv);