import "./bestseller.css";
import { FaStar } from "react-icons/fa";

const BestSeller=({best})=>{
   let bestres= best.map((e)=>{
        return(
            <div className="col4">
                 <div className="best_seller">
                    <div className="bestImg">
                        <img src={e.image} alt="image"></img>
                    </div>
                        <div className="bestcontent">
                            <p className="brand">{e.brand}</p>
                            <p>{e.productName}</p>
                            <span>{e.rating}<span className="iocn"><FaStar/></span></span>
                     </div>
                </div>
             </div>
        )
    })
    return(
        <div className="container">
            <h2>Best Sellers</h2>
            <div className="row">
               {bestres}
            </div>
        </div>
    )
}

export default BestSeller;