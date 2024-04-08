import "./beauty.css"

const Beauty=({beauty})=>{
   let bea= beauty.map((e)=>{
        return(
            <div className="col2">
                <div className="beautyImg">
                    <img src={e.image} alt="image"></img>
                </div>
        </div>
        )
    })
    return(
        <div className="container">
            <h2>Beauty and Hygiene</h2>
                <div className="row">
                    {bea}
                </div>
        </div>
    )
}


export default Beauty;