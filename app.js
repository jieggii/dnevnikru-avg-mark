function cleanRawMarks(string) {
    return string.replace(/\D/g, "");
}

function getMarks(string) {
    return string.split("").map((item) => parseInt(item))
}

function countAverage(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
}

function generateMarkClass(mark) {
    if (mark >= 4) {
        return "mG"
    } else if (mark >= 3) {
        return "mY"
    } else {
        return "mR"
    }
}

function insertCell(row, content) {
    row.insertCell().outerHTML = "<td>" + content + "</td>";
}

function insertMarkCell(row, mark) {
    let mark_class = generateMarkClass(mark);
    insertCell(row, "<span class='mark " + mark_class + "'>" + mark + "</span>");
}

let table = document.getElementById("journal");
table.rows[0].insertCell().outerHTML = "<th rowspan=2>Среднее арифметическое оценок</th>"

for (let row of [...table.rows].slice(2)) {
    let rawMarks = row.cells[2].textContent;
    let marksFlow = cleanRawMarks(rawMarks);
    if (marksFlow !== "") {
        let marks = getMarks(marksFlow);
        let average = countAverage(marks);
        insertMarkCell(row, Math.round(average * 100) / 100);
    } else {
        insertCell(row, "");
    }
}