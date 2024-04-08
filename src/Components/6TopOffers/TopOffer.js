import './topoffer.css'

const TopOffers=({top})=>{
   let topoffer= top.map((e)=>{
        return(
            <div className='col4'>
                    <div className='offerImage'>
                        <img src={e.image} alt='image'></img>
                    </div>
                </div>
        )
    })
    return(
        <div className='container'>
            <h2>Top Offers</h2>
            <div className='row'>
                {topoffer}
            </div>
        </div>
    )
}


export default TopOffers;