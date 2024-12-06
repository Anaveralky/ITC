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
        result = value * 3.28084 + " Feet";
    } else {
        result = value / 3.28084 + " Meters";
    }

    document.getElementById('distanceResult').innerHTML = `Result: ${result}`;
}

// Tax calculation (simple example)
function calculateTax() {
    let income = parseFloat(document.getElementById('income').value);
    let tax = income * 0.2;  // Simple 20% tax rate
    document.getElementById('result').innerHTML = `Your tax is: ₱${tax}`;
}

// Factorial, sum, and average calculation
function calculate() {
    let n = parseInt(document.getElementById('number').value);
    let factorial = 1, sum = 0, average;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
        sum += i;
    }

    average = sum / n;

    document.getElementById('factorialResult').innerHTML = `Factorial: ${factorial}`;
    document.getElementById('sumResult').innerHTML = `Sum: ${sum}`;
    document.getElementById('averageResult').innerHTML = `Average: ${average}`;
}

// Payroll Management
let payrollList = [];
function addEmployee() {
    let empName = document.getElementById('empName').value;
    let daysWorked = parseFloat(document.getElementById('daysWorked').value);
    let dailyRate = parseFloat(document.getElementById('dailyRate').value);
    let deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    let grossPay = daysWorked * dailyRate;
    let netPay = grossPay - deductionAmount;

    payrollList.push({ empName, daysWorked, dailyRate, grossPay, deductionAmount, netPay });

    displayPayroll();
}

function deleteEmployee() {
    let lineNumber = parseInt(document.getElementById('lineNumberToDelete').value) - 1;
    payrollList.splice(lineNumber, 1);
    displayPayroll();
}

function displayPayroll() {
    let tableBody = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    payrollList.forEach((emp, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${emp.empName}</td>
            <td>${emp.daysWorked}</td>
            <td>${emp.dailyRate}</td>
            <td>${emp.grossPay}</td>
            <td>${emp.deductionAmount}</td>
            <td>${emp.netPay}</td>
            <td><button onclick="deleteEmployee()">Delete</button></td>
        `;
    });
}
