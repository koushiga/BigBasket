import "./bankoffer.css"

const BankOffer=({bank})=>{
  const bankOffer=  bank.map((e)=>{
        return(
            <div className="col4">
                    <div className="bank_offer">
                        <img src={e.image} alt="image"></img>
                    </div>
                </div>
        )
    })
    return(
        <div className="container">
            <h2>Bank Offers</h2>
            <div className="row">
                {bankOffer}
            </div>
        </div>
    )
}


export default BankOffer;