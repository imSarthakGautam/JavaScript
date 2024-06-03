
function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let changeDue = cash - price;
  let totalCid = cid.reduce((total, [_, amount]) => total + amount, 0);

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    let change = [];
    let remainingChange = changeDue;

    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      let coinName = currencyUnit[i][0];
      let coinValue = currencyUnit[i][1];
      let coinTotal = cid[i][1];
      let coinAmount = 0;

      while (remainingChange >= coinValue && coinTotal > 0) {
        remainingChange -= coinValue;
        remainingChange = Math.round(remainingChange * 100) / 100; // Round to avoid floating point precision issues
        coinTotal -= coinValue;
        coinAmount += coinValue;
      }

      if (coinAmount > 0) {
        change.push([coinName, coinAmount]);
      }
    }

    if (remainingChange > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: change };
    }
  }
}
