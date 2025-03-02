"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let disc = (b ** 2) - 4 * a * c;
	if (disc > 0) {
		arr.push((-b + Math.sqrt(disc)) / (2 * a));
		arr.push((-b - Math.sqrt(disc)) / (2 * a));
	} else if (disc === 0) {
		arr.push(-b / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let totalAmount;
	if (isNaN(Number(percent)) || Number(percent) < 0) {
		return `"Процентная ставка" содержит неправильное значение "${percent}"`;
	}
	if (isNaN(Number(contribution)) || Number(contribution) < 0) {
		return `"Начальный взнос" содержит неправильное значение "${contribution}"`;
	}
	if (isNaN(Number(amount)) || Number(amount) < 0) {
		return `"Общая стоимость" содержит неправильное значение "${amount}"`;
	}

	if (isNaN(Number(countMonths)) || Number(countMonths) < 0) {
		return `"Количество месяцев" содержит неправильное значение "${countMonths}"`;
	}
	percent = (Number(percent) / 100 / 12);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);
	let creditBody = amount - contribution;
	let everyMonthPay = creditBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	totalAmount = Number((everyMonthPay * countMonths).toFixed(2));
	return totalAmount;
}