function generateTable(baseNumber, length) {
    const tableOutput = document.getElementById('tableOutput');

    if (isNaN(baseNumber)) {
        tableOutput.innerHTML = '<p>Please enter a valid base number.</p>';
        return;
    }

    if (isNaN(length)) {
        tableOutput.innerHTML = '<p>Please enter a valid length.</p>';
        return;
    }

    if (length <= 0) {
        tableOutput.innerHTML = '<p>Length must be a positive integer.</p>';
        return;
    }

    let tableHTML = `<h2>Table of ${baseNumber} up to ${length}:</h2>`;
    
    for (let i = 1; i <= length; i++) {
        tableHTML += `<p>${baseNumber} x ${i} = ${baseNumber * i}</p>`;
    }

    tableOutput.innerHTML = tableHTML;
}

function handleGenerateTable() {
    const numberInput = document.getElementById('numberInput').value;
    const lengthInput = document.getElementById('lengthInput').value;

    const num = parseInt(numberInput);
    const len = parseInt(lengthInput);

    generateTable(num, len);
}

