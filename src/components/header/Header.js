//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import faGlobeSnow from './globe-snow-solid.svg'





function Header(props) {
  // welcome message
const WELCOME_MESSAGE = 'test welcome, ' + props.name
// const element = <FontAwesomeIcon icon={faGlobeSnow} />
  return (
    <div className="header">
      <div className="w-full h-8 p-4 bg-red-800">tailwind not working?</div>
      {WELCOME_MESSAGE}
    </div>
  )
}

export default Header