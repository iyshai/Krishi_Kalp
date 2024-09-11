import 'remixicon/fonts/remixicon.css'
import PropTypes from 'prop-types';
import './communitypost.css'
export default function CommunityPost(props) {
  return (
    <>
    <div className="post">
        <div className="post-header">
          <div className="post-author">
            <div className="userphoto">
                <i className="ri-user-line"></i>
            </div>
            <span className="post-font1">{props.name}</span>
          </div>
          <span className="post-font2 post-timestamp">{props.date}</span>
        </div>
        <div className="post-line"></div>
        <div className="post-content">
          <div className="post-image">
            <img  src={props.img} alt="Post Image" /> 
          </div>
           <div className="post-endsection">
            <p className="post-font3">{props.text}</p>
            <div className="post-icons">
                <i className="ri-heart-line"></i>
                <i className="ri-chat-3-line"></i>
            </div>
           </div>       
        </div>
        
      </div>
     
    </>
    
    
  )
}

CommunityPost.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
