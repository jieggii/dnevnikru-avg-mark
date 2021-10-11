function parseMarks(string) {
    string = string.replace(/\D/g, "");
    let rawMarks = string.split("");
    return rawMarks.map((item) => parseInt(item))
}

function countAverage(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
}

function insertCell(row, content) {
    row.insertCell().outerHTML = "<td>" + content + "</td>";
}

let table = document.getElementById("journal");
table.rows[0].insertCell().outerHTML = "<th rowspan=2>Среднее арифметическое оценок</th>"

for (let row of [...table.rows].slice(2)) {
    let rawMarks = row.cells[2].textContent;
    if (rawMarks) {
        let marks = parseMarks(rawMarks);
        let average = countAverage(marks);
        insertCell(row, Math.round(average*100) / 100);
    } else {
        insertCell(row, "");
    }
}