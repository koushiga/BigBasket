import "./offer.css"
// import Extra from "../../arrayOfObject.json"

const Offer=({offer})=>{
   const offerImage= offer.map((e)=>{
        return(
            <div className="col2">
                <div className="offer_image">
                         <img src={e.image} alt="img"/>
                    </div>
           
            </div>
            
        )
    })
    return(
        <div className="container">
            <div className="row">
                {offerImage}
            </div>
        </div>
    )
}

export default Offer;