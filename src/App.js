
import './App.css';
import Navbar from './Components/0navbar/Navbar';
import Banner from './Components/1carousel/Banner';
import Offer from './Components/2offers/Offer';
import Basket from './Components/3Basket/Basket';
import Json from "./arrayOfObject.json";
import BankOffer from './Components/4BankOffers/BankOffer';
import BestSeller from './Components/5BestSeller/BestSeller';
import TopOffers from './Components/6TopOffers/TopOffer';
import Fruits from './Components/7Fruits/Fruits';
import Staples from './Components/8staples/Staples';
import Beverage from './Components/9beverage/beverage';
import Snacks from './Components/10Snacks/Snack';
import Cleaning from './Components/11Cleaning/Cleaning';
import Beauty from './Components/12Beauty/Beauty';
import Kitchen from './Components/13Kitchen/Kitchen';
import AddBanner from './Components/14Addbanner/AddBanner';
import Brand from './Components/15Brand/Brand';
import Footer from './Components/16Footer/Footer';


function App() {
  let offerJson = Json.offer;
  let bigBasket=Json.bigBasket;
  let bankOffer=Json.bankOffers;
  let bestseller=Json.bestSellers;
  let topoffer=Json.topOffers;
  let fruit=Json.fruitsAndVegtables;
  let staple=Json.dailyStaples;
  let bever=Json.beverages;
  let snack=Json.snacksStore;
  let clean=Json.cleaning;
  let beauty=Json.beautyAndHygieue;
  let home=Json.homeAndKitchen;
  let brand=Json.brandStore;

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Offer offer={offerJson}/>
      <Basket big={bigBasket}/>
      <BankOffer bank={bankOffer}/>
      <BestSeller best={bestseller}/>
      <TopOffers top={topoffer}/>
      <Fruits fruits={fruit}/>
      <Staples daily={staple} />
      <Beverage beverage={bever}/>
      <Snacks store={snack}/>
      <Cleaning clean={clean}/>
      <Beauty beauty={beauty}/>
      <Kitchen kitchen={home}/>
      <AddBanner/>
      <Brand brand={brand} />
      <Footer/>

    </div>
  );
}

export default App;
