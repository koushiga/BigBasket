import './staples.css'

const Staples=({daily})=>{
    let staple=daily.map((e)=>{
        return(
            <div className='col2'>
                    <div className='stapleImage'>
                        <img src={e.image} alt='image'></img>
                    </div>
                </div>
        )
    })
    return(
        <div className='container'>
            <h2>Your Daily Staples</h2>
            <div className='row'>
                {staple}
            </div>
        </div>
    )
}


export default Staples;