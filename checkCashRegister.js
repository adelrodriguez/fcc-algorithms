function checkCashRegister(price, cash, cid) {
	
	// Here is your change, ma'am.
	var values = [
		{ name: 'ONE HUNDRED', val: 100.00 },
		{ name: 'TWENTY', val: 20.00 },
		{ name: 'TEN', val: 10.00 },
		{ name: 'FIVE', val: 5.00 },
		{ name: 'ONE', val: 1.00 },
		{ name: 'QUARTER', val: 0.25 },
		{ name: 'DIME', val: 0.10 },
		{ name: 'NICKEL', val: 0.05 },
		{ name: 'PENNY', val: 0.01 }
	];

	var money = cash - price;
	var moneyCopy = money;
	var change = [];
	var register = {};

	var totalCid = cid.reduce(function(sum, next) {
		return sum + next[1];
	}, 0);

	if (totalCid === money) {
		return "Closed";
	} else if (money > totalCid) {
		return "Insufficient Funds";
	}

	for (var i = 0; i < cid.length; i++) {
		register[cid[i][0]] = cid[i][1];
	}

	for (var j = 0; j < values.length; j++) {
		var temp = 0;

		// added toFixed to eliminate floating point issue
		while (money.toFixed(2) >= values[j].val && register[values[j].name] > temp) {
			money -= values[j].val;
			temp += values[j].val;
		}

		if(temp !== 0) {
			change.push([values[j].name, temp]);
		}
	}

    var check = change.reduce(function(sum, next) {
		return sum + next[1];
	}, 0);

	if (check < moneyCopy) {
      return "Insufficient Funds";
    } else {
      return change;
    }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);