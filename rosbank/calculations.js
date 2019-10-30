function addRows() {
    let rows = document.getElementById('inputRows').value;
    rows = parseInt(rows);

    let rowInput = document.getElementById('inputRows');
    if (rowInput.getAttribute('disabled') === null) {
        rowInput.setAttribute('disabled', 'disabled');
    }

    return rows;
}

function addCols() {
    let cols = document.getElementById('inputColumns').value;
    cols = parseInt(cols);

    let colInput = document.getElementById('inputColumns');
    if (colInput.getAttribute('disabled') === null) {
        colInput.setAttribute('disabled', 'disabled');
    }


    return cols;
}
//
function addElements(rows, cols) {
    console.log("there are " + rows + " rows and " + cols +" cols");
    let folder = document.querySelector('#addElements');
    for (let i = 0; i < rows; i++) {

        let p = document.createElement('p');
        p.textContent = "введите элементы " + (i + 1) + " строки: ";

        let newInputRow = document.createElement('input');
        newInputRow.type = "text";
        newInputRow.id = "row[" + i + "]";

        folder.appendChild(p);
        p.appendChild(newInputRow);
    }
    let button = document.querySelector('#startButton');
    button.disabled = true;

    let parseButton = document.getElementById('parseButton');
    parseButton.removeAttribute('disabled');
}

function parseElements(rows) {
    let userMatrix = [];
    for (let i = 0; i < rows; i++) {
        let currentRow = document.getElementById("row[" + i + "]");
        currentRow.disabled = true;
        let stringArray = currentRow.value.split(' ');
        for (let j = 0; j < stringArray.length; j++) {
            stringArray[j] = parseInt(stringArray[j]);
        }
        console.log(stringArray);
        userMatrix[i] = stringArray;
    }
    return userMatrix;
}

let config = {
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: false,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    downloadRequestHeaders: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
};

//
// let c = [[1, 2], [4, 3]];
// const d = [[1, 2, 3], [3, -4, 7]];
// return math.multiply(c, d);