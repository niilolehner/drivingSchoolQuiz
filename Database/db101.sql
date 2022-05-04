-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2022 at 01:32 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

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
  `PopText` text NOT NULL,
  `PopImage` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `achievements`
--

INSERT INTO `achievements` (`AchievementID`, `PopText`, `PopImage`) VALUES
(1, '5x vastaussarja! (oikein peräkkäin)', ''),
(2, '15x vastaussarja! (oikein peräkkäin)', ''),
(3, '30x vastaussarja! (oikein peräkkäin)', ''),
(4, '50x vastaussarja! (oikein peräkkäin)', ''),
(5, 'Ensimmäinen visa suoritettu!', ''),
(6, '5 visaa suoritettu!', ''),
(7, '10 visaa suoritettu!', ''),
(8, '20 visaa suoritettu!', ''),
(9, '50 visaa suoritettu!', ''),
(10, '100 visaa suoritettu!', ''),
(11, '200 visaa suoritettu!', ''),
(12, 'Salama (suoritit visan alle X minuutissa, 100% oikein)', ''),
(13, 'Hitaasti, mutta varmasti... (visaan vastaaminen kesti yli X minuuttia, 100% oikein)', ''),
(14, 'Surullinen Panda (suoritti visan 100% väärin)', ''),
(15, 'Keksihirviö (salainen saavutus, opettaja voi myöntää sen)', ''),
(16, 'Maraton (kaikki saavutukset kerätty)', '');

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
(15, 'Mitä sinun tulee tehdä risteyksessä, kun keltainen valo vilkkuu?', 'Valmistautua pysähtymään', 'Vaihda kaistaa', 'Koventaa vauhtia');

-- --------------------------------------------------------

--
-- Table structure for table `scoreboard`
--

CREATE TABLE `scoreboard` (
  `ScoreID` int(11) NOT NULL,
  `PlayerName` text NOT NULL,
  `TopScoreTime` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `StudentID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Achievements` text NOT NULL,
  `OwnTopScoreTime` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `studentachievements`
--

CREATE TABLE `studentachievements` (
  `StudentID` int(11) NOT NULL,
  `AchievementID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  ADD PRIMARY KEY (`ScoreID`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
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
  MODIFY `QaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `scoreboard`
--
ALTER TABLE `scoreboard`
  MODIFY `ScoreID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `StudentID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
