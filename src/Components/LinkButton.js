import { Link } from "react-router-dom"

const LinkButton = (props) => (
  <Link to={`/${props.name}`}>
    <div className="
      hover:cursor-pointer
      text-white
      hover:text-orange-500
      font-med
      sm:inline-block
      px-[13px]
      py-5"
    >{props.name}</div>
  </Link>
)

export default LinkButton