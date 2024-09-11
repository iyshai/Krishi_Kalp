import './yojnastyle.css'
import Yojnabox from '../../acomponents/yojnabox/yojnabox'
import Navbar from '../navbar/Navbar'

export default function Yojna() {
  return (
    <div className='yojna-main'>
      <Navbar/>
        <div className="yojna-partmain">
        <Yojnabox heading="Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)" para="Direct income support to farmers by providing ₹6,000 per year in three equal installments."/>

        <Yojnabox heading="Kisan Credit Card (KCC)" para="Provides short-term formal credit to farmers at a low-interest rate for agricultural needs, including crop production"/>

        <Yojnabox heading="Pradhan Mantri Fasal Bima Yojana (PMFBY)" para="Crop insurance scheme to protect farmers against crop losses due to natural calamities and pests"/>

        <Yojnabox heading="Soil Health Card Scheme" para="Provides farmers with soil health cards that inform them about the nutrient status of their land, promoting better soil management."/>

        <Yojnabox heading="e-National Agriculture Market (e-NAM)" para="A pan-India electronic trading portal that connects existing Agricultural Produce Market Committee (APMC) ."/>

        <Yojnabox heading="Paramparagat Krishi Vikas Yojana (PKVY)" para="Promotes organic farming and provides financial assistance to farmers adopting eco-friendly farming methods."/>

        <Yojnabox heading="Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)" para="Aims to improve irrigation and ensure more efficient water usage in agriculture."/>
        </div>

        

        
      
    </div>
  )
}
