import './fruits.css'
const Fruits=({fruits})=>{
      let fru = fruits.map((e)=>{
        return(
            <div className='col4'>
            <div className='fruitsImage'>
                <img src={e.image} alt="image"></img>
            </div>
        </div>
        )
           
        })
    return(
        <div className='container'>
            <h2>Fruits and Vegetables</h2>
            <div className='row'>
                {fru}
            </div>
        </div>
    )
}


export default Fruits;