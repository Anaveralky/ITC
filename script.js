// Show the main content after the introduction screen
function startProjects() {
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    showProject('conversion');  // Show Unit Converter as the default project
}

// Show the selected project
function showProject(projectId) {
    const projects = document.querySelectorAll('.project-container');
    projects.forEach(project => {
        project.style.display = 'none';
    });
    document.getElementById(projectId).style.display = 'block';
}

// Temperature conversion
function convertTemperature() {
    let value = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('tempUnit').value;
    let result;

    if (unit === 'Celsius') {
        result = (value * 9/5) + 32 + " °F";
    } else {
        result = (value - 32) * 5/9 + " °C";
    }

    document.getElementById('tempResult').innerHTML = `Result: ${result}`;
}

// Distance conversion
function convertDistance() {
    let value = parseFloat(document.getElementById('distanceInput').value);
    let unit = document.getElementById('distanceUnit').value;
    let result;

    if (unit === 'Meters') {
        result = value * 3.28084 + " feet";
    } else {
        result = value / 3.28084 + " meters";
    }

    document.getElementById('distanceResult').innerHTML = `Result: ${result}`;
}

// Income Tax Calculation
function calculateTax() {
    let income = parseFloat(document.getElementById('income').value);
    let taxAmount = 0;

    if (income <= 250000) {
        taxAmount = 0;
    } else if (income <= 400000) {
        taxAmount = (income - 250000) * 0.2;
    } else if (income <= 800000) {
        taxAmount = (income - 400000) * 0.25 + 30000;
    } else if (income <= 2000000) {
        taxAmount = (income - 800000) * 0.3 + 120000;
    } else if (income <= 8000000) {
        taxAmount = (income - 2000000) * 0.32 + 500000;
    } else {
        taxAmount = (income - 8000000) * 0.35 + 2000000;
    }

    document.getElementById('result').innerHTML = `Income Tax: ₱${taxAmount.toFixed(2)}`;
}

// Factorial, Sum, and Average calculation
function calculate() {
    let n = parseInt(document.getElementById('number').value);
    let factorial = 1;
    let sum = 0;
    let average = 0;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
        sum += i;
    }

    average = sum / n;

    document.getElementById('factorialResult').innerHTML = `Factorial: ${factorial}`;
    document.getElementById('sumResult').innerHTML = `Sum: ${sum}`;
    document.getElementById('averageResult').innerHTML = `Average: ${average.toFixed(2)}`;
}

// Payroll Management System
let employeeList = [];

function addEmployee() {
    let name = document.getElementById('empName').value;
    let daysWorked = parseInt(document.getElementById('daysWorked').value);
    let dailyRate = parseFloat(document.getElementById('dailyRate').value);
    let deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    let grossPay = daysWorked * dailyRate;
    let netPay = grossPay - deductionAmount;

    employeeList.push({
        name: name,
        daysWorked: daysWorked,
        dailyRate: dailyRate,
        grossPay: grossPay,
        deductionAmount: deductionAmount,
        netPay: netPay
    });

    updatePayrollTable();
}

function updatePayrollTable() {
    let tableBody = document.getElementById('payrollTable').querySelector('tbody');
    tableBody.innerHTML = '';

    employeeList.forEach((employee, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate.toFixed(2)}</td>
            <td>${employee.grossPay.toFixed(2)}</td>
            <td>${employee.deductionAmount.toFixed(2)}</td>
            <td>${employee.netPay.toFixed(2)}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteEmployee(index) {
    employeeList.splice(index, 1);
    updatePayrollTable();
}

