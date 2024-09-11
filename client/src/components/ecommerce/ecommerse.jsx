import Ecommersbox from "../../acomponents/ecommersbox/ecommersbox";
import "./ecommersestyle.css";
import Navbar from "../navbar/Navbar";
const Ecommerce = () => {
  return (
    <div className="ecommain1">
<Navbar/>
    
    <div className="ecompartmain">
     <h1 className="ecomfont">Agrishops</h1>
      <div className="ecomagrishops">

     
      <Ecommersbox shopname="KISAN SUPPORTS AND SERVICES" img="https://www.kissanagrimall.com/wp-content/uploads/2022/05/Complete-range-of-Agri-Inputs.jpg" place="Bhopal" distance="3 km away"/>
      <Ecommersbox shopname="BHARAT AGRO SOLUTIONS" img="https://www.shutterstock.com/image-photo/barcelona-spain-november-14-2019-600nw-2058199073.jpg" place="Bhopal" distance="4 km away"/>
      <Ecommersbox shopname="KISAN KRISHI MART" img="https://www.smergers.com/media/businessphoto/63285-1632394590-0ccfd44b-8eea-475b-87df-6a33bb345b08.png" place="Bhopal" distance="5 km away"/>
      <Ecommersbox shopname="AGROCARE FARMERS HUB" img="https://i.ytimg.com/vi/dKHyOPuZCPc/maxresdefault.jpg" place="Bhopal" distance="6 km away"/>
      <Ecommersbox shopname="KRISHI UDYOG SERVICES" img="https://greenday.co/assets/images/green-day-store-1.png" place="Bhopal" distance="6 km away"/>
      <Ecommersbox shopname="GREENGROW AGRO SUPPLIES" img="https://content.jdmagicbox.com/comp/medak/k5/9999p8452.8452.180125215505.y1k5/catalogue/madhu-agro-agencies-gajwel-medak-agricultural-product-dealers-5yrulnzmen.jpg" place="Bhopal" distance="8 km away"/>

      </div>
      

      <h1 className="ecomfont">Fertilizers</h1>
      <div className="ecomagrishops">

     
                <Ecommersbox shopname="GREENHARVEST ORGANIC PLANT " img="https://www.foodicine.co.in/img/products/amino-acid-fertilizer.jpg" place="kisan mart" distance="5 km away"/>
                <Ecommersbox shopname="KISAN CROP ENHANCER" img="https://4.imimg.com/data4/DG/DM/MY-11923085/agricultural-organic-fertilizer-500x500.jpg" place="krishi hub" distance="6 km away"/>
                <Ecommersbox shopname="AGRO GROWTH FORMULA" img="https://www.cropchemicals.co.in/images/fert-thumb.png" place="bharat agro" distance="7 km away"/>
                <Ecommersbox shopname="BHARAT YIELD BOOSTER" img="https://www.cropchemicals.co.in/images/fung-thumb.png" place="farmer supplies" distance="11 km away"/>
                <Ecommersbox shopname="ECOGRO SOIL MIXUTRE" img="https://www.cropchemicals.co.in/images/oil-thumb.png" place="agro solutions" distance="14 km away"/>
                <Ecommersbox shopname="FARMER'S GOLD FERTILIZER" img="https://www.yara.com/siteassets/crop-nutrition/our-global-fertilizer-brands/yarabela-packs-web-770x-500-pix.jpg" place="green grow" distance="15 km away"/>

</div>

      </div>

      
      
    </div>
  )
}

export default Ecommerce;
