function Desc({heading,desc}) {
  return (
      <div className = "container rounded-lg  bg-white p-8 filter drop-shadow-lg">
      <h1 className = "font-medium">{heading}</h1>
      <h2>{desc}</h2>
    </div>
    
  )
}

export default Desc;
