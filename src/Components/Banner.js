import LinkButton from "./LinkButton"

const Banner = () => {
  const routes = [
    "Ajoharjoittelu",
    "Kurssit",
    "Tapahtumat",
    "Kauppa",
  ]

  return (
    <div>
      <a href="/"><div className="bg-org-logo bg-no-repeat absolute top-7 w-[179px] mx-auto left-0 right-0 h-[71px]"></div></a>
      <div className="bg-gradient-to-b from-org-gray to-black w-screen grid grid-cols-1 border-b-2 border-orange-500">
        <div className="flex flex-col sm:flex-row justify-start items-center">
          {routes.map((route, index) => <LinkButton key={index} name={route}/>)}
        </div>
      </div>
    </div>
  )
}

export default Banner