const money = {
    "ONE HUNDRED": 10000,
    TWENTY: 2000,
    TEN: 1000,
    FIVE: 500,
    ONE: 100,
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1,
};

function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    let cidTotal = cid.reduce((acc, curr) => acc + curr[1] * 100, 0);

    if (change > cidTotal) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    if (change == cidTotal) {
        return { status: "CLOSED", change: cid };
    }

    cid = cid.reverse();

    const result = [];
    for (let item of cid) {
        const values = [item[0], 0];
        item[1] = item[1] * 100;
        while (change >= money[item[0]] && item[1] > 0) {
            change -= money[item[0]];
            item[1] -= money[item[0]];
            values[1] += money[item[0]] / 100;
        }
        if (values[1] > 0) {
            result.push(values);
        }
    }
    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: result };
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
]);
