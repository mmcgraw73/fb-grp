function Search(props) {
  return (
    <div className="search">
      <input type="text" placeholder="{props.placeholder}" className="bg-green-300" />
    </div>
  )
}

export default Search