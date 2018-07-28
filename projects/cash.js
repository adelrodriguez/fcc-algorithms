'use strict';

function checkCashRegister(price, cash, cid) {
  const values = [
    { name: 'ONE HUNDRED', val: 100.0 },
    { name: 'TWENTY', val: 20.0 },
    { name: 'TEN', val: 10.0 },
    { name: 'FIVE', val: 5.0 },
    { name: 'ONE', val: 1.0 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.1 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 },
  ];

  // Deal with precision errors
  const precision = num => +num.toFixed(2);

  // Sum all the current cash in the drawer
  const registerCash = precision(cid.reduce((sum, curr) => sum + curr[1], 0));
  let difference = cash - price;
  const drawer = {};

  // If cash-in-drawer is less than the change due
  if (difference > registerCash) return { status: 'INSUFFICIENT_FUNDS', change: [] };

  // If cash-in-drawer is equal to the change due
  if (registerCash === difference) return { status: 'CLOSED', change: cid };

  // Change cash in drawer to an object
  cid.forEach((unit) => {
    drawer[unit[0]] = unit[1];
  });

  const change = values.reduce((result, unit) => {
    let temp = 0;
    while (difference >= unit.val && drawer[unit.name] >= unit.val) {
      temp += unit.val;
      difference -= unit.val;
      drawer[unit.name] -= unit.val;
      difference = precision(difference);
    }

    if (temp) result.push([unit.name, temp]);

    return result;
  }, []);

  // If exact change cannot be returned
  if (difference > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] };

  return { status: 'OPEN', change };
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
