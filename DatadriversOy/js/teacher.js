//Get tableContainer from HTML
const tableContainer = document.getElementById('tableContainer');
//Get data from scoreboard;
const scoreboard = arrayFromPHP('scoreboard');

//Create array for headers and teacher comments.
const headers = ['#', 'Nimi', 'Pisteet', 'Aika', 'Päivämäärä','Palaute'];
const overallArray = ['...', 'Loistavaa!', 'Ihan kelpo suoritus!', 'Nyt taisi mennä vähän penkin alle.', 'Hyhhyh...'];
const thingsToDevelopArray = ['Kertaa liikennemerkkejä.', 'Kertaa ajoneuvonhallintaa.', 'Kiinnitä huomiota jalankulkijoihin.', 'Harjoittele ajoneuvonhallintaa.'];
const tipsArray = ['Jatka harjoittelua ja muista ajojärjestys', 'Jatka harjoittelua ja muista ennakoida liikenteessä.', 'Jatka harjoittelua ja älä pidä kiirettä.', 'Jos jatkat harjoittelua, olet ammattilainen liikenteessä.', 'Jos jatkat samaan malliin, olet mestari liikenteessä.', 'Muista myös levätä autokoulun ohessa, että jaksat keskittyä tehtävissä.', 'Suosittelen kertailemaan harjoitustehtäviä.', 'Kyllä sinä vielä onnistut!', 'Uskon, että läpäiset teoriakokeen!'];


//Create Column container with header for table.
let colDiv = document.createElement('div');
colDiv.setAttribute('class', 'col');
let headerH3 = document.createElement('h3');
headerH3.setAttribute('class', 'text-white-50');
let h3Text = 'Kaikki tulokset';
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
tableContainer.appendChild(colDiv);

//Create table structure.
let tableHead = document.createElement('thead');
let tableBody = document.createElement('tbody');
let headerRow = document.createElement('tr');

//Insert header-array items in th-elements.
headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

//Print out header.
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

//Get scoreboard-data from database and create td-element for each data.
scoreboard.forEach(Data => {
    let row = document.createElement('tr');
    Object.values(Data).forEach(contentText => {
      let content = document.createElement('td');
      let textNode = document.createTextNode(contentText);
      content.appendChild(textNode);
      row.appendChild(content);
    });

    let scoreID = Object.values(Data)[0];
    
    //Create button with styles and text.
    let buttonFeedback = document.createElement('div');
    buttonFeedback.innerHTML = '<button class="btn btn-secondary p-2 m-2" type="button" onclick="showModal('+ scoreID +')">Palaute</button>';

    row.appendChild(buttonFeedback);
    tableBody.appendChild(row);
    table.appendChild(tableBody);
});


//Creates Modal for each score result
let modalWrap = null;
const showModal = (
  scoreID
) => {
    if (modalWrap !== null){
        modalWrap.remove();
    }
    modalWrap = document.createElement('div');
    modalWrap.innerHTML = '<div class="modal fade" id="exampleModal" tabindex="-1">\
    <div class="modal-dialog modal-dialog-centered ">\
      <div class="modal-content ">\
        <div class="modal-header">\
          <h5 class="modal-title" id="exampleModalLabel">Anna palautetta oppilaalle</h5>\
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
        </div>\
        <div class="modal-body">\
          <form id="sendFeedback">\
            <div class="row g-3">\
              <div class="col-12 mb-2">\
                <label for="overall">Suoriutuminen</label>\
                <select id="inputOverall" class="form-select">\
                  <option>' + overallArray[0] + '</option>\
                  <option>' + overallArray[1] + '</option>\
                  <option>' + overallArray[2] + '</option>\
                  <option>' + overallArray[3] + '</option>\
                  <option>' + overallArray[4] + '</option>\
                </select>\
              </div>\
              <div class="col-12 mb-2">\
                <label for="thingsToDevelop">\Kehitettävää</label>\
                <select id="inputThingsToDevelop" class="form-select">\
                  <option>' + overallArray[0] + '</option>\
                  <option>' + thingsToDevelopArray[0] + '</option>\
                  <option>' + thingsToDevelopArray[1] + '</option>\
                  <option>' + thingsToDevelopArray[2] + '</option>\
                  <option>' + thingsToDevelopArray[3] + '</option>\
                </select>\
              </div>\
              <div class="col-12 mb-2">\
                <label for="tip">Loppuun</label>\
                <select id="inputTip" class="form-select">\
                  <option>' + overallArray[0] + '</option>\
                  <option>' + tipsArray[0] + '</option>\
                  <option>' + tipsArray[1] + '</option>\
                  <option>' + tipsArray[2] + '</option>\
                  <option>' + tipsArray[3] + '</option>\
                  <option>' + tipsArray[4] + '</option>\
                  <option>' + tipsArray[5] + '</option>\
                  <option>' + tipsArray[6] + '</option>\
                  <option>' + tipsArray[7] + '</option>\
                  <option>' + tipsArray[8] + '</option>\
                  </select>\
              </div>\
            </div>\
            <div class="modal-footer">\
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Sulje</button>\
              <button id="sendFeedbackBtn" type="button" class="btn btn-success modal-success-btn" data-bs-dismiss="modal" onclick="Testi(' + scoreID + ')">Lähetä palaute</button>\
            </div>\
          </form>\
        </div>\
      </div>\
    </div>\
  </div>';

  document.body.append(modalWrap);
  const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}

function Testi(scoreID) {
  let overallOutput = document.getElementById('inputOverall');
  let ThingsToDevelopOutput = document.getElementById('inputThingsToDevelop');
  let TipOutput = document.getElementById('inputTip');

  let overallValue = overallOutput.options[overallOutput.selectedIndex].value;
  let ThingsToDevelopValue = ThingsToDevelopOutput.options[ThingsToDevelopOutput.selectedIndex].value;
  let TipValue = TipOutput.options[TipOutput.selectedIndex].value;

  console.log(scoreID, overallValue, ThingsToDevelopValue, TipValue);
}