-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2022 at 07:45 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db101`
--

-- --------------------------------------------------------

--
-- Table structure for table `achievements`
--

CREATE TABLE `achievements` (
  `AchievementID` int(11) NOT NULL,
  `PopText` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `achievements`
--

INSERT INTO `achievements` (`AchievementID`, `PopText`) VALUES
(1, '5x vastaussarja!'),
(2, '15x vastaussarja!'),
(3, '30x vastaussarja!'),
(4, '50x vastaussarja!'),
(5, 'Ensimmäinen visa suoritettu!'),
(6, '5 visaa suoritettu!'),
(7, '10 visaa suoritettu!'),
(8, '20 visaa suoritettu!'),
(9, '50 visaa suoritettu!'),
(10, '100 visaa suoritettu!'),
(11, '200 visaa suoritettu!'),
(12, 'Salama'),
(13, 'Hitaasti, mutta varmasti...'),
(14, 'Surullinen Panda'),
(15, 'Keksihirviö'),
(16, 'Maraton');

-- --------------------------------------------------------

--
-- Table structure for table `quizqa`
--

CREATE TABLE `quizqa` (
  `QaID` int(11) NOT NULL,
  `Question` text NOT NULL,
  `RightAnswer` text NOT NULL,
  `WrongAnswer1` text NOT NULL,
  `WrongAnswer2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quizqa`
--

INSERT INTO `quizqa` (`QaID`, `Question`, `RightAnswer`, `WrongAnswer1`, `WrongAnswer2`) VALUES
(1, 'Missä sijaitsee kytkin?', 'Vasen', 'Oikea', 'Keskellä'),
(2, 'Minkä on oikea toimintajärjestys?', 'Vilkku-Vilkaisu olan yli-Kaistanvaihto', 'Vilkku-Kaistanvaihto-Olan yli katse', 'Kaistanvaihto-Vilkku-Olan yli vilkaisu'),
(3, 'Mikä on suurin sallittu nopeus Suomessa?', '120km/h', '80km/h', '100km/h'),
(4, 'Näet jalankulkijan koiran kanssa, jolla on keltainen tai viininpunainen takki. Mitä tämä osoittaa? Jalankulkija on:', 'Kuuro ihminen', 'Vanha ihminen', 'Koiran kouluttaja'),
(5, 'Missä näistä tilanteista sinun tulee välttää ohittamista?', 'Kun lähestyn tien pudotusta', 'Heti tien mutkan jälkeen', '50km/h tiellä'),
(6, 'Kuljet 80 km/h hyvällä, kuivalla tiellä. Mikä on tyypillinen kokonaispysähdysmatkasi?', '53 metriä', '36 metriä', '75 metriä'),
(7, 'Mikä väri seuraa vihreää risteyksessä?', 'Keltainen', 'Punainen', 'Vilkkuva punainen'),
(8, 'Kuinka monta prosenttia tieliikenteen päästöistä on?', '20%', '10%', '40%'),
(9, 'Hinaat pientä perävaunua vilkkaalla kolmikaistaisella moottoritiellä. Kaikki kaistat ovat auki. Sinun täytyy:', 'Käytä vain oikeaa ja keskikaistaa', 'Ei saa ylittää 80km/h', 'Älä ohita'),
(10, 'Onnettomuustilanteessa on tärkeää huolehtia mahdollisista uhreista. Kun alue on turvallinen, sinun tulee:', 'Pidä ne ajoneuvonsa sisällä', 'Ota heidät pois ajoneuvostaan', 'Anna heille juotavaa'),
(11, 'Odotat kääntymistä pieneltä tieltä. Iso ajoneuvo lähestyy vasemmalta. Sinulla on aikaa kääntyä, mutta sinun tulee odottaa. Miksi?', 'Suuri ajoneuvo voi helposti piilottaa ohittavan ajoneuvon', 'Suuri ajoneuvo voi kääntyä äkillisesti', 'Isoa ajoneuvoa on vaikea ohjata suoraan'),
(12, 'Milloin voit ohittaa toisen ajoneuvon oikealta?', 'Kun olet yksisuuntaisella kadulla', 'Kun edessä oleva ajoneuvo antaa merkin kääntyä vasemmalle', 'Kun hitaampi ajoneuvo kulkee kaksiajoradan vasemmalla kaistalla'),
(13, 'Valitset väärän reitin ja huomaat olevasi yksisuuntaisella kadulla. Mitä sinun pitäisi tehdä?', 'Jatka tien päähän', 'Käänny ympäri', 'Peruuttaa'),
(14, 'Ajat alas pitkää, jyrkkää mäkeä. Huomaat yhtäkkiä, että jarrut eivät toimi normaalisti. Mikä on tavallinen syy tähän?', 'Jarrujen ylikuumeneminen', 'Hidas kuljettajan reaktioaika', 'Huono jarrut'),
(15, 'Mitä sinun tulee tehdä risteyksessä, kun keltainen valo vilkkuu?', 'Valmistautua pysähtymään', 'Vaihda kaistaa', 'Koventaa vauhtia'),
(16, 'Miten toimit kun ajat taajamassa 60km/h nopeusrajoitus alueella ja huomaat että edessäsi oleva linja-auto on aikomassa poistua pysäkiltä?', 'Hiljennän ja pysäytän tarvittaessa jotta linja-auto pääsee pysäkiltä', 'Vilkautan valoja ja kiihdytän ohittamisen nopeuttamiseksi', 'En anna tietä koska minulla on etuajo-oikeus'),
(17, 'Mikä on kuivalla ajoradalla ajettaessa tyypillinen pysähtymismatka ajoneuvolla jonka nopeus on 80km/h?', 'Noin 50 metriä', '33 metriä', '23 metriä'),
(18, 'Mikä seuraavista on järkevä järjestys kun olet lähtemässä ajamaan autolla?', 'Ensin kannattaa säätää penkki sopivaan asentoon. Seuraavaksi pelien säätö jonka jälkeen turvavyö kiinni', 'Ensiksi turvavyö kiinni. Sen jälkeen peilien säätö. Viimeisenä penkki oikeaan asentoon', 'Ensiksi peilien säätö. Sen jälkeen penkki oikeaan asentoon. Lopuksi turvavyö kiinni'),
(19, 'Voitko vaikuttaa alkoholin poistumiseen verestä?', 'En voi vaikuttaa alkoholin poistumiseen verestä', 'Voin, juomalla runsaasti vettä', 'Saunomalla'),
(20, 'Miten alkoholi vaikuttaa kuljettajaan?', 'Kuljettaja voi unohtaa toimintatavat joita yleensä käyttää liikenteessä', 'Alkoholi vaikuttaa enemmän kokemattomiin kuljettajiin', 'Alkoholilla ei ole vaikutusta kokeneelle kuljettajalle muodostuneisiin rutiineihin ja toimintatapoihin'),
(21, 'Mikä seuraavista on vaikeimmin havaittavissa oleva tienkäyttäjä risteyksessä?', 'Moottoripyöräilijä', 'Henkilöauto', 'Traktori'),
(22, 'Mitä teet jos maantiellä taaksesi alkaa syntyä jonoa?', 'Annat takana ajaville tilaa mennä ohitsesi seuraavassa turvallisessa paikassa', 'Laitat takasumuvalon päälle', 'Et välitä takana ajavista'),
(23, 'Miten jarrutat moottorin avulla?', 'Vapautat kaasun ylös ja annat kytkimen olla ylhäällä', 'Vaihdat pienemmälle ja jarrutat samalla kevyesti', 'Vaihdat isommalle vaihteelle ja painat kaasua'),
(24, 'Mikä seuraavista pitää paikkansa?', 'Hätävilkkua käytetään silloin kun auto on jouduttu pysäköimään vaaralliseen paikkaan', 'Hätävilkkua kuuluu käyttää silloin kun autoa hinataan', 'Hätävilkkua voi käyttää silloin kun ajat muita tienkäyttäjiä kovempaa'),
(25, 'Kuinka pitkä on kuljettajan reaktioaika?', '1-1,5 sekuntia', '2-4 sekuntia', 'Alle sekunnin'),
(26, 'Miten pitkäksi ajaksi törkeästä rattijuopumuksesta voidaan tuomita vankeuteen?', 'Enintään 2 vuodeksi', 'Enintään puoleksi vuodeksi', 'Enintään vuodeksi'),
(27, 'Ketkä seuraavista ovat erityisesti vaarassa kun peruutat ajoneuvollasi?', 'Lapset', 'Pyöräilijät', 'Toiset ajoneuvot'),
(28, 'Miksi risteyksissä tulisi varoa erityisesti kaksipyöräisiä tienkäyttäjiä?', 'Niitä on vaikeampi havaita kuin isompia ajoneuvoa', 'Ne eivät välttämättä huomaa sinua', 'Ne voivat tehdä yllättäviä pysähdyksiä'),
(29, 'Mitä voi aiheutua jos ajat liian lähellä edellä ajavaa ajoneuvoa?', 'Peräänajon riski kasvaa', 'Edellä ajava voi sokaistua ajoneuvosi valoista', 'Moottori voi ylikuumentua'),
(30, 'Mikä vaikutus on jarrutusmatkaan jos ajonopeus laskee 60 km/h:sta 45 km/h:iin?', 'Jarrutusmatka lyhenee noin puolella', 'Ei vaikutusta jarrutusmatkaan', 'Jarrutusmatka lyhenee noin neljänneksellä'),
(31, 'Millä tavoin kuljettaja oppii hyödyntämään ääreisnäköä liikenteessä?', 'Vain kokemuksen karttuessa', 'Harjoittelemalla ääreisnäköä', 'Harjoittelemalla ongelmatilanteita'),
(32, 'Moottorikäyttöisen ajoneuvon kuljettaja määrätään ajokieltoon jos...', 'Kuljettaja on syyllistynyt törkeään liikenneturvallisuuden vaarantamiseen', 'Kuljettaja on ylittänyt sallitun ajonopeuden maantiellä 10:llä kilometillä tunnissa aiheuttamatta vaaraa muille', 'Kuljettaja on saanut viidesti parkkisakot kuluvan vuoden aikana'),
(33, 'Miksi risteyksissä tulisi varoa erityisesti kaksipyöräisiä tienkäyttäjiä?', 'Niitä on vaikeampi havaita kuin isompia ajoneuvoa', 'Ne voivat tehdä yllättäviä pysähdyksiä', 'Ne eivät välttämättä huomaa sinua'),
(34, 'Milloin ei tulisi koskaan ohittaa pyöräilijää?', 'Juuri ennen kuin käännyt oikealle', 'Hiekkatiellä', 'Risteyksen jälkeen'),
(35, 'Olet kääntymässä risteyksessä vasemmalle. Sinulle palaa pyöreä vihreä valo. Ketä seuraavista väistät?', 'Suoraan edestä lähestyviä ajoneuvoja sekä risteävää kevyttä liikennettä', 'Oikealta lähestyviä ajoneuvoja', 'Vasemmalta lähestyviä ajoneuvoja'),
(36, 'Miten toimit kun ajat autokoulun ajoneuvon perässä joka yllättäen pysähtyy risteyksessä vaikka valot ovat vihreät?', 'Ole kärsivällinen ja varaudu siihen että he voivat tehdä virheitä liikenteessä', 'Pysy riittävän lähellä jotta he huomaisivat sinut', 'Pyri ohittamaan mahdollisimman pian'),
(37, 'Kuinka paljon on hidastettava ajoneuvon nopeutta jotta jarrutusmatka lyhenee puoleen?', '25%', 'Puolet', '80%'),
(38, 'Miksi kova vauhti on tärkeää saada pois ennen kaarteeseen ajamista.', 'Kaarteessa ajoneuvo ajautuu helposti pois ajoradalta keskipakoisvoiman ansiosta', 'Koska et välttämättä tiedä mitä kaarteen jälkeen tulee', 'Jotta moottori jäähtyisi'),
(39, 'Miten ajonopeuden lisääminen vaikuttaa havaintojen tekemiseen?', 'Havainnointi sivuille heikkenee nopeuden kasvaessa', 'Nopeuden lisääminen ei vaikuta havaintojen tekoon', 'Havaintojen tekeminen helpottuu'),
(40, 'Milloin tulee kiinnittää erityistä huomiota pyöräilijöihin ja muihin kaksipyöräisiin?', 'Risteyksissä', 'Lähestyessäsi tunnelia', 'Ennen liikennevaloja'),
(41, 'Miten turvavyötä on käytettävä?', 'Ajoneuvossa myös takapenkillä olevien tulee käyttää turvavyötä kuljettajan lisäksi', 'Ainoastaan etupenkillä olevan tulee käyttää turvavyötä', 'Riittää että vain kuljettaja käyttää turvavyötä'),
(42, 'Miten toimit kun ajat autokoulun ajoneuvon perässä joka yllättäen pysähtyy risteyksessä vaikka valot ovat vihreät?', 'Ole kärsivällinen ja varaudu siihen että he voivat tehdä virheitä liikenteessä', 'Pyri ohittamaan mahdollisimman pian', 'Pysy riittävän lähellä jotta he huomaisivat sinut'),
(43, 'Miten vilkkua eli suuntamerkkiä on käytettävä', 'Käyttämällä suuntamerkkiä ajoissa lisäät liikenteen sujuvuutta', 'Liikenneympyrästä poistuttaessa ei tarvitse käyttää vilkkua', 'Kaistan vaihto ei edellytä vilkun käyttöä koska se huomataan muutenkin'),
(44, 'Miten jarrutat moottorin avulla?', 'Vapautat kaasun ylös ja annat kytkimen olla ylhäällä', 'Vaihdat pienemmälle ja jarrutat samalla kevyesti', 'Vaihdat isommalle vaihteelle ja painat kaasua'),
(45, 'Kun joudut pysähtymään tielle pimeällä, mitkä valot sinun tulee kytkeä päälle?', 'Seisonta- tai lähivalot', 'Valoja ei tarvitse kytkeä', 'Takasumuvalo'),
(46, 'Kuljettaja on syyllistynyt rattijuopumukseen jos kuljettajan veren alkoholipitoisuus on ajon aikana tai sen jälkeen vähintään', '0.5 promillea', '0.4 promillea', '0.3 promillea'),
(47, 'Et ole varma mitä edessäsi hitaasti ajava moottoripyöräilijä aikoo tehdä. Miten toimit?', 'Pysy moottoripyöräilijän takana', 'Siirry lähemmäksi', 'Soita äänimerkkiä ja ohita tilanne nopeasti'),
(48, 'Mille seuraavista tulee antaa eniten lisätilaa ohitettaessa?', 'Polkupyöräilijälle', 'Traktorille', 'Pakettiautolle'),
(49, 'Miten liityt liikenneympyrään kun sinulle on väistämismerkki?', 'Väistän liikenneympyrässä ajavaa ja liityn vasta kun on tilaa', 'Minulla on etuajo-oikeus liikenneympyrään liityttäessä', 'Liikenneympyrässä ajavan on väistettävä minua'),
(50, 'Olet kääntymässä yksisuuntaiselta tieltä vasemmalle. Mikä seuraavista on oikein?', 'Ryhmityt tien vasempaan reunaan', 'Ryhmityt tien keskelle', 'Ryhmityt tien oikeaan reunaan');

-- --------------------------------------------------------

--
-- Table structure for table `scoreboard`
--

CREATE TABLE `scoreboard` (
  `ScoreID` int(11) NOT NULL,
  `StudentID` int(11) NOT NULL,
  `Score` int(11) NOT NULL,
  `Time` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Feedback` varchar(255) NOT NULL,
  `FeedbackGiven` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scoreboard`
--

INSERT INTO `scoreboard` (`ScoreID`, `StudentID`, `Score`, `Time`, `Date`, `Feedback`, `FeedbackGiven`) VALUES
(1, 1, 5, 67, '2022-05-21', '', 0),
(2, 2, 4, 32, '2022-05-21', 'Ihan kelpo suoritus! Harjoittele ajoneuvonhallintaa. Kyllä sinä vielä onnistut!', 2),
(3, 2, 2, 25, '2022-05-21', '', 0),
(4, 3, 6, 127, '2022-05-21', '', 0),
(5, 4, 10, 32, '2022-05-21', '', 0),
(6, 5, 8, 46, '2022-05-21', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `studentachievements`
--

CREATE TABLE `studentachievements` (
  `StudentachievementsID` int(11) NOT NULL,
  `StudentID` int(11) NOT NULL,
  `AchievementID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentachievements`
--

INSERT INTO `studentachievements` (`StudentachievementsID`, `StudentID`, `AchievementID`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 2, 5),
(18, 3, 5),
(19, 4, 5),
(20, 4, 12),
(21, 5, 5);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `StudentID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `BestTime` int(11) NOT NULL,
  `BestScore` int(11) NOT NULL,
  `QuizesDone` int(11) NOT NULL,
  `Keksi` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`StudentID`, `Name`, `BestTime`, `BestScore`, `QuizesDone`, `Keksi`) VALUES
(1, 'Matti', 67, 5, 1, 1),
(2, 'Teppo', 25, 4, 2, 0),
(3, 'Seppo', 127, 6, 1, 0),
(4, 'Liisa', 32, 10, 1, 0),
(5, 'Maisa', 46, 8, 1, 0),
(6, 'Kaisa', 0, 0, 0, 0),
(7, 'Lasse', 0, 0, 0, 0),
(8, 'Minna', 0, 0, 0, 0),
(9, 'Manu', 0, 0, 0, 0),
(10, 'Minttu', 0, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`AchievementID`);

--
-- Indexes for table `quizqa`
--
ALTER TABLE `quizqa`
  ADD PRIMARY KEY (`QaID`);

--
-- Indexes for table `scoreboard`
--
ALTER TABLE `scoreboard`
  ADD PRIMARY KEY (`ScoreID`),
  ADD KEY `StudentID` (`StudentID`);

--
-- Indexes for table `studentachievements`
--
ALTER TABLE `studentachievements`
  ADD PRIMARY KEY (`StudentachievementsID`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`StudentID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `achievements`
--
ALTER TABLE `achievements`
  MODIFY `AchievementID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `quizqa`
--
ALTER TABLE `quizqa`
  MODIFY `QaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `scoreboard`
--
ALTER TABLE `scoreboard`
  MODIFY `ScoreID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `studentachievements`
--
ALTER TABLE `studentachievements`
  MODIFY `StudentachievementsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `StudentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
