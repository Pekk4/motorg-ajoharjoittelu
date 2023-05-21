const Home = () => (
  <div className="my-16 mx-auto text-center">
    <p className="m-10">
      Tälle sivustolle on pyritty koostamaan kaikki oleellinen tieto MotOrg ry:n ajoharjoittelutapahtumista ns. yksiin kansiin.<br /><br />
      Kaiken ajoharjoitteluun liittyvän, kuten esimerkiksi säännöt ja erilaiset infot löydät osiosta <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/Ajoharjoittelu">Ajoharjoittelu</a>.<br />
      Kaiken Ajotaito-kursseihin liittyvän löydät puolestaan osiosta <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/Kurssit">Kurssit</a>.<br />
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/Tapahtumat">Tapahtumat</a>-osiosta puolestaan löytyy kauden 2023 tapahtumat.
    </p>
    <img className="mx-auto my-10" src={require("../assets/images/welcome.jpg")} alt="#kneedown" />
    <p>
      Palautetta ja kehitysideoita sivustosta voi antaa vaikkapa MotOrg ry:n <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://discord.gg/mVe6mwwC8T">Discordissa</a>.<br /><br />
      Sivusto ei toistaiseksi vielä näy välttämättä oikein kaikilla mobiililaitteilla.
    </p>
  </div>
)

export default Home