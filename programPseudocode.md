# index.php sivusto
/*

Alkuun ylätunniste, joka tulostetaan kaikille sivuille;


//Virheiden tarkistus.
JOS (URL-parametreissä virheellä $ERROR = joku arvo) {
  //Tutkitaan, mikä on virheen arvo
  JOS (Error === 1) {
    tulosta tämä punainen huomio;
  }
  JOS (Error === 2) {
    tulosta toinen punainen huomio;
  }
}


//Tulostetaan sivuston sisältö URL mukaan.
HAE URL-parametrit ja tallenna $page;

Tarkistetaan muuttujan $page arvo;
JOS page === 1 {
  tulosta tämä sivu näkyviin;
} 
JOS page === 2 {
  tulosta tämä sivu näkyviin;
}
 jne...


//Tulostetaan tietokannasta sisältöä.
JOS (kysymys) {
  tulosta tämä sisältö;
}
JOS (Oppilas saavuttaa palkinnon) {
  tulosta tämä sisältö;
}


//Tulostetaan tietokannasta onnitteluviesti oikeasta vastauksesta.
JOS (vastaus === oikea vastaus) {
  tulostetaan tämä onnittelu viesti
}
JOS (vastaus === väärä vastaus) {
  Tulostetaan tämä epäonnistunut viesti
}


Loppuun alatunniste, joka tulostuu myös kaikille sivuille;

*/

# Tietokannasta tietojen haku
/*

//Tarkistetaan URL-parametrin avulla, mille sivustolle haetaan dataa.
JOS (Tarkistetaan, onko sivuston URL-parametri asetettu) {
  perustetaan evästeelle muuttuja $cookie;

  JOS (URL-parametri sisältää sivuston arvon) {
      JOS (sivuston arvo) {
        case '1':
            tallenna cookie-muuttujaan tämän arvo;
            break;
        case '2';
            tallenna cookie-muuttujaan tämän arvo;
            break;
        case '3':
            tallenna cookie-muuttujaan tämän arvo;;
            break;
        case '4':
            tallenna cookie-muuttujaan tämän arvo;;
            break;
        case '5':
            tallenna cookie-muuttujaan tämän arvo;;
            break;
        default:
            tallenna cookie-muuttujan arvoksi error;
      }
  } MUUTEN {
    // Näyttää index.html sivuston etusivun (tervetuloa, tms.)
  }


  JOS (cookie === 1) {
    haetaan tietokannasta käyttäjän tiedot;
    tulostetaan tiedot näytölle;
  } 
  JOS (cookie === 2) {
    haetaan tietokannasta harjoitusten tiedot;
    tulostetaan tiedot näytölle;
  }
  JOS (cookie === 3) {
    haetaan tietokannasta kysymysten tiedot;
    tulostetaan tiedot näytölle;
  }
  JOS (cookie === ) {
    haetaan tietokannasta tulosten tiedot;
    tulostetaan tiedot näytölle;
  }
  JNE..
}

*/

# Tietokantaan tietojen syöttö
/*

//Harjoittelun tuloksien käsittely.
Tarkistetaan, onko POST-muuttujalle syötetty arvoa;
Tallennetaan arvo muuttujaan;
Tarkistetaan, ettei syötetty arvo sisällä virheitä/hakkerointia;
Luodaan kokonaispiste muuttuja;

JOS (arvo === oikea vastaus) {
  lisätään yksi piste oikeisiin pisteisiin;
}
JOS (arvo === väärä vastaus) {
  lisätään yksi piste vääriin vastauksiin;
}

JOS (kysymystenmäärä === luku) {
  tarkistetaan, saavutettiinko palkinto;
  syötetään tulokset tietokantaan;
}
JOS (kysymystenmäärä < luku) {
  tulostetaan uusi kysymys;
}


JOS (palkinto === tosi) {
  tulostetaan palkinto oppilaalle;
  näytetään tulokset;
}
MUUTEN {
  näytetään tulokset;
}

Lähetetään tulokset opettajan näkymään;

*/


