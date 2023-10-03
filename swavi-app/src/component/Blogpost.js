import React from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import './Style.css'
import './Utils.css'
import './Blogpost.css'
import './Mobile.css'
import article from './Article.json';
import logo from './img/logo.png';


const Blogpost = () => {
  const navigate = useNavigate();
    const { id } = useParams();
  const selectedArticle = article.find((article) => article.id === parseInt(id));

  if (!selectedArticle) {
    
    return <div>
       Not Found   
    </div>;
  }   
     
  return (
    <div>
      <nav className="navigation max-width-1 m-auto">
        <div className="nav-left">
          <NavLink to="/">
            <span><img src={logo} width="94px" alt="" /></span>
          </NavLink>
          <ul>
          
          <i class="fa-solid fa-backward" onClick={() => navigate(-1)}></i>
          
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="nav-right">
         
        </div>
      </nav>

      <div className="max-width-1 m-auto">
        <hr />
      </div>

      <div className="post-img">
         <img src={`../${selectedArticle.image}`} alt="" />
      </div>

      <div className="m-auto blog-post-content max-width-2 m-auto my-2">
        <h1 className="font1">{selectedArticle.title}</h1>
        <div className="blogpost-meta">
          <div className="author-info">
            <div>
              <b>Author - {selectedArticle.author}</b>
            </div>
            <div>{selectedArticle.date}. {selectedArticle.duration}</div>
          </div>
        </div>

        <h2 className="font2">XR could be the next big thing in the digital realm — but what makes for a great XR experience? Follow along as we navigate the world of spatial computing that’s finally getting its turn in the spotlight.</h2><br /><br />

        <p className="font1">Companies like HTC and Meta have been active in the XR space for years, but 2023 is looking to be the year XR finally reaches a broader audience. The anticipation around Apple’s upcoming Vision Pro headset is already taking the XR hype to the next level. At 14islands, we’ve had the opportunity to work on a few XR projects over the years and we want to share some of our top learnings for anyone looking to create great XR experiences<br /><br /></p>

        <h2 className="font2">Leverage reality</h2><br />

        <p className="font1">Learning new things takes both time and dedication, which most people might not have an abundance of. A great way to quickly teach your audience how something works or behaves in XR is to leverage familiarity with real-life experiences.<br /><br />
          In XR, you’re not in front of a screen, you’re inside the screen. The experience doesn’t have a border around it, and there are few UI elements to guide you. Instead, an immersive experience uses objects and patterns that are natural and familiar to interact with, without looking like UI elements.</p><br /><br />

        <h2 className="font2">“It's not just about imitating reality, but also adding a magic twist that is going to create a memorable experience.”</h2><br /><br />

        <p className="font1">Humans were not made to sit in front of a screen. We’re made to pick up objects and interact with people and to speak and to listen. In that way, XR forces us to change the whole way we think about design. It's not just about imitating reality though, but also adding a magic twist — and it's usually the magic twist that is going to create a memorable experience. It's the surprises that make it fun.<br /><br />
          When we created the XR Developer Portal for Pluto, we represented each content category as boxes with card decks, where every card was a tutorial or article related to that category. The similarities with physical objects, such as boxes and cards, made it intuitive to understand how to interact with them and how they relate to each other. Combining that with a layer of digital interactions, such as sound effects, gravity manipulation, and holographic portals, is what makes the whole experience feel magical.</p>
      </div>

      <div className="max-width-1 m-auto">
        <hr />
      </div>
      <div className="footer">
        <p>Copyright &copy; iBlog.com</p>
        <a href="https://www.vecteezy.com/free-vector/typewriter">Vector Credits: Vecteezy</a>
      </div>
    </div>
  )
}

export default Blogpost
