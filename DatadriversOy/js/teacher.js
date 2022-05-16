"use strict";

//Get elements to animation and content.
const tableContainer = document.getElementById('tableContainer');

//Get data from scoreboard;
const scoreboard = arrayFromPHP('scoreboard');

//Create array for headers and teacher comments.
const headers = ['Nimi', 'Pisteet', 'Aika', 'Päivämäärä','Palaute'];
const overallArray = ['...', 'Loistavaa!', 'Ihan kelpo suoritus!', 'Nyt taisi mennä vähän penkin alle.', 'Hyhhyh...'];
const thingsToDevelopArray = ['Kertaa liikennemerkkejä.', 'Kertaa ajoneuvonhallintaa.', 'Kiinnitä huomiota jalankulkijoihin.', 'Harjoittele ajoneuvonhallintaa.'];
const tipsArray = ['Jatka harjoittelua ja muista ajojärjestys.', 'Jatka harjoittelua ja muista ennakoida liikenteessä.', 'Jatka harjoittelua ja älä pidä kiirettä.', 'Jos jatkat harjoittelua, olet ammattilainen liikenteessä.', 'Jos jatkat samaan malliin, olet mestari liikenteessä.', 'Muista myös levätä autokoulun ohessa, että jaksat keskittyä tehtävissä.', 'Suosittelen kertailemaan harjoitustehtäviä.', 'Kyllä sinä vielä onnistut!', 'Uskon, että läpäiset teoriakokeen!'];


//Create Column container with header for table.
let colDiv = document.createElement('div');
colDiv.setAttribute('class', 'col');
let headerH3 = document.createElement('h3');
headerH3.setAttribute('class', 'text-white-50');
let h3Text = 'Teoriakoeharjoitusten tulokset';
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

    //Get student name from object.
    let studentName = Object.values(Data)[0];

    //Get student ID from database.
    let studentData = arrayFromPHP2('getStudentID', studentName); 
    let studentID = studentData[0].StudentID;

    //Get student Score ID from database.
    let studentDataScore = arrayFromPHP2('getScoreID', studentID); 
    let studentScoreID = studentDataScore[0].ScoreID;

    //Create button with styles and text.
    let buttonFeedback = document.createElement('div');
    buttonFeedback.innerHTML = '<button class="btn btn-secondary p-2 m-2" type="button" onclick="showModal('+ studentScoreID +', ' + studentID +')">Anna <br> Palaute</button>';

    row.appendChild(buttonFeedback);
    tableBody.appendChild(row);
    table.appendChild(tableBody);
});


//Creates Modal for each score result
let modalWrap = null;
const showModal = (
  scoreID,
  studentID
) => {
    if (modalWrap !== null){
        modalWrap.remove();
    }
    modalWrap = document.createElement('div');
    modalWrap.innerHTML = '<div class="modal fade" id="exampleModal" tabindex="-1">\
    <div class="modal-dialog modal-dialog-centered ">\
      <div class="modal-content">\
        <div class="modal-header">\
          <h3 class="modal-title" id="exampleModalLabel">Oppilaan palaute</h3>\
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
        </div>\
        <div class="modal-body">\
          <p>Pakollinen merkitty *</p>\
          <form id="sendFeedback">\
            <div class="row g-3">\
              <div class="col-12 mb-2">\
                <label for="overall">Suoriutuminen</label>\
                <select id="inputOverall" class="form-select" required>\
                  <option>' + '' + '</option>\
                  <option>' + overallArray[1] + '</option>\
                  <option>' + overallArray[2] + '</option>\
                  <option>' + overallArray[3] + '</option>\
                  <option>' + overallArray[4] + '</option>\
                </select>\
              </div>\
              <div class="col-12 mb-2">\
                <label for="thingsToDevelop">\Kehitettävää</label>\
                <select id="inputThingsToDevelop" class="form-select">\
                  <option>' + '' + '</option>\
                  <option>' + thingsToDevelopArray[0] + '</option>\
                  <option>' + thingsToDevelopArray[1] + '</option>\
                  <option>' + thingsToDevelopArray[2] + '</option>\
                  <option>' + thingsToDevelopArray[3] + '</option>\
                </select>\
              </div>\
              <div class="col-12 mb-2">\
                <label for="tip">Tsemppi*</label>\
                <select id="inputTip" class="form-select">\
                  <option>' + ' ' + '</option>\
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
              <div class="col-12 mb-2">\
                <div class="form-check">\
                  <input class="form-check-input" type="checkbox" value="15" id="cookieMonster">\
                  <label class="form-check-label" for="cookieMonster">\
                    Anna Keksihirviö palkinto!\
                  </label>\
                </div>\
              </div>\
            </div>\
            <div class="modal-footer">\
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Sulje</button>\
              <button id="sendFeedbackBtn" type="button" class="btn btn-success modal-success-btn" data-bs-dismiss="modal" onclick="giveFeedback(' + scoreID + ', ' + studentID +')">Lähetä palaute</button>\
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

function giveFeedback(scoreID, studentID) {
  let OverallOutput = document.getElementById('inputOverall');
  let thingsToDevelopOutput = document.getElementById('inputThingsToDevelop');
  let tipOutput = document.getElementById('inputTip');
  let cookieMonsterOutput = document.getElementById('cookieMonster');

  let overallValue = OverallOutput.options[OverallOutput.selectedIndex].value;
  let thingsToDevelopValue = thingsToDevelopOutput.options[thingsToDevelopOutput.selectedIndex].value;
  let tipValue = tipOutput.options[tipOutput.selectedIndex].value;
  let cookieMonsterValue = cookieMonsterOutput.checked;

  let unlockedAchievsArray = arrayFromPHP2("studentachievementsAesmouVersion", studentID);

  if (tipValue === '') {
    Swal.fire({
      title: "Tyhjä kenttä!", 
      text: 'Anna vähintään tsemppi palaute', 
      icon: "error",
      showConfirmButton: false,
      timer: 2000});
    setTimeout(() => {
      showModal(scoreID, studentID);
    }, 2300);
    return false;
  }

  if (cookieMonsterValue) {
    if (isAchievUnlocked(unlockedAchievsArray, '15') === false) {
      let studentCookieAchiev = {
          Keksi: 1,
          StudentID: studentID
      }
      arrayToPHP(studentCookieAchiev, "giveCookie");
    }
  }

  let sendFeedback = {
    keyScoreId: scoreID,
    keyFeedbackGiven: 1,
    keyFeedbackText: overallValue + ' ' + thingsToDevelopValue + ' ' + tipValue
  }

  let alertText = '';

  if (overallValue !== '' && thingsToDevelopValue !== '') {
    alertText = '"' + overallValue + ' <br> ' + thingsToDevelopValue + ' <br> ' + tipValue + '"';
  } else if (overallValue !== '') {
    alertText = alertText = '"' + overallValue + ' <br> ' + tipValue + '"';
  } else if (thingsToDevelopValue !== '') {
    alertText = alertText = '"' + thingsToDevelopValue + ' <br> ' + tipValue + '"';
  } else {
    alertText = '"' + tipValue + '"';
  }

  arrayToPHP(sendFeedback, "feedback");
    
  Swal.fire("Palaute lähetetty!", alertText, "success").then((result) => {
      if (result.isConfirmed) {
          location.reload();
      }
  });
  
}