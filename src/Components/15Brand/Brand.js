import "./Brand.css"

const Brand=({brand})=>{
   let brandStore= brand.map((e)=>{
        return(
            <div className="col2">
                        <div className="brandImg">
                            <img src={e.image} alt="image"></img>
                        </div>
                    </div>
        )
    })
    return(
        <div className="container">
            <h2>Brand Store</h2>
                <div className="row">
                    {brandStore}
                </div>
        </div>
    )
}


export default Brand;