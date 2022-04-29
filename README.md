# Team_Awesome

### Projektiryhmän kehitysrepo

Tämä repo on olemassa projektiyhteistyötä ja versionhallintaa varten

<br>
<br>

## Recommended order of Git commands:
  1. git status
  2. git pull
  4. git add <file names> &nbsp;// *Try to not use "git add ." and instead use git add <file path -> file name>. Otherwise it will be the whole repo.*
  5. git commit -m "A description of changes"
  6. git pull
  7. git push
  
### Useful Git commands:
  - git log    
  - git branch
  - git checkout
  - git init
  
#### Set Git username and email globally:
  - git config --global user.name "your_username"	
  - git config --global user.email "your_email_address@example.com"

<br>
<br>

## QuickGuide to using this repo with your VSCode!

### Step by step

0.0 Tätä varten sinulla on oltava Git ja VSCode asennettuna tietokoneellesi, GitBash on myös hyödyllinen. Muista rekisteröityä GitHubiin ja määrittää globaalinen käyttäjätunnus/sähköposti VSCode-terminaalilla!

#### 1.0 KLOONAAMISEEN repon koneellesi:    
1.1 Siirry osoitteeseen https://github.com/niilolehner/Team_Awesome  
1.2 Napsauta oikealla olevaa vihreää koodipainiketta, valitse HTTPS, kopioi URL-osoite   
1.3 Ava sun tietokoneen terminaali/GitBash, kirjoita git clone, liitä sitten kopioimasi URL-osoite ja paina enter   

#### 2.0 AVAAKSEEN repon koneellesi:   
2.1 Ava VSCode   
2.2 Vasemmassa yläkulmassa olevasta file, valitse open folder...   
2.3 Valitse juuri kloonaamasi Team_Awesome-kansio, se on tämän repo!   

#### 3.0 TYÖSKENTELEMISEEN repossa:   
3.1 Luo uusi tiedosto, esim. tiedoston_nimi.php     
3.2 Kooda    
3.3 Vasemmassa yläkulmassa olevasta file, valitse save    

#### 4.0 PUSHAMAAN/PULLAMAAN työtä repossa:    
4.1 Valitse terminaali VSCodessa   
4.2 Kirjoita: git status   
4.3 Kirjoita: git pull    
4.4 Kirjoita esim.: git add ".\tiedoston_nimi.php" lisätäksesi kaikki työsi/muutoksesi   
4.5 Kirjoita: git commit -m "kommentoi mitä teit tai muutit"   
4.6 Kirjoita: git pull    
4.7 Kirjoita git push    

#### 5.0 Be AWESOME!
