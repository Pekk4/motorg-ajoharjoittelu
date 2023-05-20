# Ajoharjoittelu-app

Ajoharjoittelu-app koostaa kaiken [MotOrg ry](http://www.moottoripyora.org/motorg):n [ajoharjoittelutapahtumiin](http://www.moottoripyora.org/keskustelu/forumdisplay.php/384-MotOrg-ry-n-ratap%C3%A4iv%C3%A4t-ja-ajokoulutukset) liittyvän tiedon yhteen paikkaan, jolloin tieto olisi helposti kaikkien saatavilla.

Ajoharjoittelu-app on toteutettu Reactilla (create-react-app) ja on allekirjoittaneen ensimmäinen React-kötöstys ikinä. Sovelluksen layout on toteutettu MaterialUI:lla, sekä Tailwind CSS:lla.

### Tuotanto

Sovelluksen tuotantoversio pyörii [fly.io](https://fly.io):ssa osoitteessa [https://ajoharjoittelu.moottoripyora.org](https://ajoharjoittelu.moottoripyora.org).

### Jatkokehitys

Sovellusta jatkokehitetään aina kun aikaa ja intoa riittää.

Tällä hetkellä tiedossa olevia ongelmia:
 - layout ei toimi vielä kunnolla mobiilissa, toimii joten kuten käyttämällä `Työpöytäsivusto`/`Tietokonesivusto` -toimintoa selaimessa 
 - sisällön ylläpitäminen; nyt pitää päivittää tieto sekä lankoihin foorumilla, että sivuston materiaaliin erikseen
   * sovellus on tällä hetkellä pelkkä staattinen sivusto, dynaamisuus tarvitsisi jonkinlaisen backendin
