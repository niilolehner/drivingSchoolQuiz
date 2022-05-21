"use strict";

//Get elements to animation and content.
const tableScoreboard = document.getElementById('tableScoreboard');

//Get data from scoreboard;
const scoreboard1 = arrayFromPHP('scoreboard1');
const scoreboard2 = arrayFromPHP('scoreboard2');
const scoreboard3 = arrayFromPHP('scoreboard3');

//Create array for scoreboard headers.
const headers1 = ['#', 'Nimi', 'Aika'];
const headers2 = ['#', 'Nimi', 'Tulos'];
const headers3 = ['#', 'Nimi', 'Kpl'];
const tableHeaders = ['Paras aika', 'Paras tulos', 'Tehdyt tentit']

function createTable(scoreboard, tableName, header) {
  //Create Column container with header for table.
let colDiv = document.createElement('div');
colDiv.setAttribute('class', 'container col-md-4 themed-grid-col p-1 m-0');
let headerH3 = document.createElement('h3');
headerH3.setAttribute('class', 'text-white-50 px-4');
let h3Text = tableName;
let h3Node = document.createTextNode(h3Text);
headerH3.appendChild(h3Node);
let divTable = document.createElement('div');
divTable.setAttribute('class', 'table-responsive');

//Create table for tabledata.
let table = document.createElement('table');
table.setAttribute('class', 'table table-striped table-sm');

//Print out column.
divTable.appendChild(table);
colDiv.appendChild(headerH3);
colDiv.appendChild(divTable);
tableScoreboard.appendChild(colDiv);

//Create table structure.
let tableHead = document.createElement('thead');
let tableBody = document.createElement('tbody');
let headerRow = document.createElement('tr');
headerRow.setAttribute('class', 'text-center');

//Insert header-array items in th-elements.
header.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

//Print out header.
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

let number = 0;
//Get scoreboard-data from database and create td-element for each data.
scoreboard.forEach(Data => {
    let row = document.createElement('tr');
    row.setAttribute('class', 'align-middle text-center');
    number++;
    let numberContent = document.createElement('td');
    let textNode = document.createTextNode(number);
    numberContent.appendChild(textNode);
    row.appendChild(numberContent);

    console.log(Object.keys(Data)[1]);

      //Insert table data.
      Object.values(Data).forEach(contentText => {
        if (Object.keys(Data)[1] === 'BestTime') {
            if (contentText > 59 && Object.values(Data)[1] === contentText) {  
                let minuteDecimal = Object.values(Data)[1] / 60; 
                let integer = parseInt(minuteDecimal.toString().split('.')[0]);
                let decimalNumber = minuteDecimal - integer;
                let seconds = Math.round(decimalNumber * 60);
                contentText = integer + ' min ' + seconds + ' s';
            } else if (Object.values(Data)[1] === contentText) {
                contentText += ' s';
            }
        } else if (Object.keys(Data)[1] === 'BestScore') {
            if (Object.values(Data)[1] === contentText)
                contentText += '/10'
        }
        
        let content = document.createElement('td');
        content.setAttribute('class', 'p-2');
        let textNode = document.createTextNode(contentText);
        content.appendChild(textNode);
        row.appendChild(content);
      });

    tableBody.appendChild(row);
    table.appendChild(tableBody);
});

}

createTable(scoreboard1, tableHeaders[0], headers1);
createTable(scoreboard2, tableHeaders[1], headers2);
createTable(scoreboard3, tableHeaders[2], headers3);