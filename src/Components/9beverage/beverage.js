import "./beverage.css"

const Beverage=({beverage})=>{
   let bever= beverage.map((e)=>{
        return(
            <div className="col2">
                        <div className="beverageImage">
                            <img src={e.image} alt="beberageimage"></img>
                        </div>
                    </div>
        )
    })
    return(
             <div className="container">
             <h2>Beverage</h2>
                <div className="row">
                    {bever}
                </div>
            </div>

           
    )
}

export default Beverage;