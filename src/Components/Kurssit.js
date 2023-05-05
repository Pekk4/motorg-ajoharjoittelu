import VerticalTabs from './VerticalTabs';

const Kurssit = () => {
  const contents = [
    {
      id: 0,
      name: "Ajotaito 2",
      url: require("../assets/markdowns/ajotaito2.md"),
    },
    {
      id: 1,
      name: "Ajotaito 3",
      url: require("../assets/markdowns/ajotaito3.md"),
    },
    {
      id: 2,
      name: "Ajotaito 4",
      url: require("../assets/markdowns/ajotaito4.md"),
    },
    {
      id: 3,
      name: "Ajotaito 5",
      url: require("../assets/markdowns/ajotaito5.md"),
    },
  ]

  let mappings = {}
  contents.map((obj) => mappings[obj.name] = obj.id)

  return (
    <div>
      <VerticalTabs content={contents} names={mappings} />
    </div>
  )
}

export default Kurssit