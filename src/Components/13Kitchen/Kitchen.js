import "./kitchen.css"

const Kitchen=({kitchen})=>{
    let home= kitchen.map((e)=>{
        return(
            <div className="col2">
                        <div className="homeImg">
                            <img src={e.image} alt="image"></img>
                        </div>
                    </div>
        )
     })
    return(
        <div className="container">
            <h2>Home and Kitchen</h2>
                <div className="row">
                    {home}
                </div>
        </div>
    )
}


export default Kitchen;