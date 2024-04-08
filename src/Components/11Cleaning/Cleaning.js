import "./cleaning.css"

const Cleaning=({clean})=>{
   let cleaning= clean.map((e)=>{
        return(
            <div className="col4">
        <div className="cleanImg">
            <img src={e.image} alt="image"></img>
        </div>
    </div>
        )
        
    })
    return(
        <div className="container">
            <h2>Cleaning & Household</h2>
                <div className="row">
                   {cleaning}
                </div>
        </div>
    )
}


export default Cleaning;