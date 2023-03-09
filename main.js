let result = document.getElementById('result');
let equationSpan = document.getElementById('equation');
let expression = '';
let equation = '';

function addNumber(num) {
	if (expression.length < 10 && equation.length < 10) {
		expression += num;
		equation += num;
        result.textContent = expression;
		updateResultAndEquation();
	}
}

function addOperator(op) {
	if (expression.length < 10 && equation.length < 10) {
		expression += op;
		equation += ' ' + op + ' ';
		updateResultAndEquation();
	}
}

function calculate() {
	try {
		expression = eval(expression);
		equation += ' = ' + expression;
        result.textContent = expression;
		updateResultAndEquation();
	} catch (error) {
		result.value = 'Error';
	}
}

function clearAll() {
	expression = '';
	equation = '';
	updateResultAndEquation();
}

function clearLast() {
	expression = expression.slice(0, -1);
	equation = equation.slice(0, -1);
	updateResultAndEquation();
}

function updateResultAndEquation() {
	result.value = expression;
    result.textContent = expression;
	equationSpan.textContent = equation;
}