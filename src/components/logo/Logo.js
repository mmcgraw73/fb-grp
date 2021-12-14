import logo from '../../assets/images/farcelook-4.png'

function Logo(props) {
  return (
    <div className="logo-wrap">
      <img title="props.title" src={logo} />
    </div>
  )
}

export default Logo