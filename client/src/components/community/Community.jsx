import { useState } from "react";
import CommunityPost from "../../acomponents/community/CommunityPost";
import './community.css';
import 'remixicon/fonts/remixicon.css';
import Navbar from "../navbar/Navbar";

const Community = () => {
  const [posts, setPosts] = useState([
    { name: "Ramlala Sharma", date: "24/08/24", text: "Mere khat m ye bemari aa rhi h m kya karu eska koi upaye batayga kya?", img: "https://cdn9.dissolve.com/p/D869_29_187/D869_29_187_1200.jpg" },
    { name: "Piyush Thakur", date: "03/08/24", text: "Es bar pumpkin ki khati acchi hui h ab bs barish or acchi ho jaye", img: "https://www.asiafarming.com/wp-content/uploads/2016/04/Pumpkin-Cultivation.jpg" },
    { name: "Rohit Kumar", date: "21/07/24", text: "ya nai nai bimariya tho aati hi ja rhi h kasan hamesa paresan hi rhega", img: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg" },
    { name: "Ayush Parihar", date: "11/07/24", text: "Meri fasal thik lag rhi h ab bs mosam sath dede tho sab sahi rhega", img: "https://www.agrivi.com/wp-content/uploads/2021/05/Crop-Diseases-The-Nightmare-of-Every-Farmer-1200x565.jpeg" },
    { name: "Kartik Namdev", date: "06/05/24", text: "Kya koi Bhopal Inderpuri m rhata h jo meri madad kr de ye bemari m?", img: "https://adigaskell.org/wp-content/uploads/2016/10/crop-disease.jpg" }
  ]);

  const [newPostText, setNewPostText] = useState('');
  const [newPostImg, setNewPostImg] = useState(null);

 
  const handleSendPost = () => {
    if (newPostText.trim()) {
      const newPost = {
        name: "Aadarsh Dangi",
        date: new Date().toLocaleDateString(), 
        text: newPostText,
        img: newPostImg || "https://www.sgs.com/-/media/sgscorp/images/temporary/golden-wheat-grass.cdn.en.2.jpg"
      };

      
      setPosts([newPost, ...posts]);

      
      setNewPostText('');
      setNewPostImg(null);
    }
  };

  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setNewPostImg(upload.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="outer-container">
    <div className="community">
      <Navbar/>
      {posts.map((post, index) => (
        <CommunityPost key={index} name={post.name} date={post.date} text={post.text} img={post.img} />
      ))}

      
      <div className="bottom-part">
        <div className="postbox">
          <div className="left-postbox">
           
            <label htmlFor="imageUpload">
              <i className="ri-gallery-line" style={{ cursor: 'pointer' }}></i>
            </label>
            <input 
              type="file" 
              id="imageUpload" 
              style={{ display: 'none' }} 
              accept="image/*"
              onChange={handleImageUpload} 
            />
            <input 
              type="text" 
              placeholder="Post on community"
              value={newPostText} 
              onChange={(e) => setNewPostText(e.target.value)} 
            />
          </div>
          <div className="right-postbox">
            <i className="ri-mic-fill"></i>
          </div>
        </div>
        
        <div className="sendbox" onClick={handleSendPost}>
          <i className="ri-send-plane-2-fill"></i>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Community;

