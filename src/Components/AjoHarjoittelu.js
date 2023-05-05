import VerticalTabs from './VerticalTabs';

const AjoHarjoittelu = () => {
  const contents = [
    {
      id: 0,
      name: "Harjoitteluinfo",
      url: require("../assets/markdowns/ajoharjoitteluinfo.md"),
    },
    {
      id: 1,
      name: "Säännöt",
      url: require("../assets/markdowns/saannot.md"),
      
    },
    {
      id: 2,
      name: "Liput",
      url: require("../assets/markdowns/liput.md"),
    },
    {
      id: 3,
      name: "Liputtaminen",
      url: require("../assets/markdowns/liputus.md"),
    },
    {
      id: 4,
      name: "Kierrosajat",
      url: require("../assets/markdowns/kierrosajat.md"),
    },

  ]
  const mappings = {}
  contents.map((obj) => mappings[obj.name] = obj.id)

  document.title = "Ajoharjoittelu | .ORG!"

  return (
    <div>
      <VerticalTabs content={contents} names={mappings} />
    </div>
  )
}

export default AjoHarjoittelu