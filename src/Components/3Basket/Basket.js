import "./basket.css";

const Basket=({big})=>{
  let imageSec = big.map((e)=>{
        return(
        <div className="col4">
             <div className="homepage">
                <img src={e.image} alt="image"></img>
                <div className="imagecontent">
                    <p className="brandName">{e.brand}</p>
                    <p>{e.productName}</p>
                </div>
            </div>
        </div>
        
        )
    })
    return(
        <div className="container">
            <h2>My Smart Basket</h2>
            <div className="row">
               {imageSec}
            </div>
        </div>
    )
}


export default Basket;