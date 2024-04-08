import "./snack.css"

const Snacks=({store})=>{
    let  snacks=    store.map((e)=>{
            return(
                <div className="col4">
                        <div className="snackImg">
                            <img src={e.image} alt="image"></img>
                        </div>
                    </div>
            )
        })
    return(
        <div className="container">
            <h2>Snacks Store</h2>
                <div className="row">
                    {snacks}
                </div>
        </div>
    )
}


export default Snacks;