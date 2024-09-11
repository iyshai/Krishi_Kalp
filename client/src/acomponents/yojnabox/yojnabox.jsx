import './yojnaboxstyle.css'

export default function yojnabox(props) {
  return (
    <div className='yojnabox'>
        <div className="yojnafont">
        <h1 className='yojnafont1'>{props.heading}</h1>
        <h2 className='yojnafont2'>{props.para}</h2>
        </div>
        
        <button className="yojnabtn">Read more</button>
    </div>
  )
}
