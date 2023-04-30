import { Container, Typography } from '@mui/material';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import VerticalTabs from './VerticalTabs';
import TabPanel from './VerticalTabs';

const AjoHarjoittelu = () => {
  const contents = [
    {
      id: 0,
      name: "Ajoharjoitteluinfo",
      url: "https://raw.githubusercontent.com/motorgry/markdowns/main/ajoharjoittelu.md",
    },
    {
      id: 1,
      name: "Säännöt",
      url: "https://raw.githubusercontent.com/motorgry/markdowns/main/saannot.md",
    }
  ]

  return (
    <div>
      <VerticalTabs content={contents}></VerticalTabs>
      <Container maxWidth="lg">
        <HashLink to={"/ajoharjoittelu#Ajoharjoittelu"}>
          Ajoharjoittelu
        </HashLink><br />
        <HashLink to={"/ajoharjoittelu#Säännöt"}>
          Säännöt
        </HashLink>
        <h1>
          <HashLink to={"/ajoharjoittelu#Ajoharjoittelu"}>
            Ajoharjoittelu
          </HashLink>
        </h1>

        <p id="Säännöt">Paskaa paketissa</p>
        <h1>
          <HashLink to={"#"}>
            Top
          </HashLink>
        </h1>
      </Container>
    </div>
  )
}

export default AjoHarjoittelu