let table = document.getElementById('tableAll');
let scoreboard = arrayFromPHP("scoreboard");
console.log(scoreboard);

let headers = ['Nimi', 'Pisteet', 'Aika', 'Päivämäärä','Palaute'];
let comments = ['Hyhhyh!', 'Nyt meni kyllä aivan päin persettä!', 'Jatka samaan malliin!', 'Loistavaa!', 'Uskon, että läpäiset teoriakokeen!'] 

let tableHead = document.createElement('thead');
let tableBody = document.createElement('tbody');
let headerRow = document.createElement('tr');


headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});
tableHead.appendChild(headerRow);
table.appendChild(tableHead);


scoreboard.forEach(Data => {
    let row = document.createElement('tr');
    Object.values(Data).forEach(contentText => {
        let content = document.createElement('td');
        let textNode = document.createTextNode(contentText);
        content.appendChild(textNode);
        row.appendChild(content);
    });
            let dropdownDiv = document.createElement('div');
        dropdownDiv.setAttribute('class', 'dropdown');
        
        let button = document.createElement('button');
        button.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        button.setAttribute('type', 'button');
        button.setAttribute('id', 'dropdownMenuButton1');
        button.setAttribute('data-bs-toggle', 'dropdown');
        button.setAttribute('aria-expanded', 'false');
        let buttonText = 'PALAUTE...';
        let buttonNode = document.createTextNode(buttonText);
        button.appendChild(buttonNode);

        
        let unOrderedList = document.createElement('ul');
        unOrderedList.setAttribute('class', 'dropdown-menu dropdown-menu-dark text');
        unOrderedList.setAttribute('aria-labelledby', 'dropdownMenuButton1');

            comments.forEach(commentText => {
              let listItem = document.createElement('li');
              let link = document.createElement('a');
              link.setAttribute('class', 'dropdown-item');
              link.setAttribute('href', '#');
              let innerText = document.createTextNode(commentText);

              link.appendChild(innerText);
              listItem.appendChild(link);
              unOrderedList.appendChild(listItem);
            });

          dropdownDiv.appendChild(button);
          dropdownDiv.appendChild(unOrderedList);
          
          
          row.appendChild(dropdownDiv);

    tableBody.appendChild(row);
    table.appendChild(tableBody);
});
