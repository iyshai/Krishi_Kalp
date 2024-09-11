import 'remixicon/fonts/remixicon.css'
import './ecommersboxstyle.css'

export default function ecommersbox(props) {
  return (
    <>
    
    <div className="ecom-main">

   
      <div className="ecom-box">
        <div className="ecom-box-image">
            <img src={props.img} alt="product image" />
        </div>
        <div className="ecom-box-text">
          <h1>{props.shopname}</h1>
        </div>
        <div className="ecom-box-smalltext">
           <h3>{props.place}</h3>
           <h5>{props.distance}</h5>
        </div>
      </div>

      
      </div>
    </>
  )
}
