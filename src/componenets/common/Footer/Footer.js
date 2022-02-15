import React from 'react';
import "./Footer.css"



const footer = () => {
  return (
   <footer className='footer'>
     <div className="container">
       <div className='row'>
         <div className='footer-col'>
           <h4>COMPANY</h4>
           <ul className='company'>
           <li><a htef="#">Who we Are</a></li>
             <li><a htef="#">Blog</a></li>
             <li><a htef="#">Careers </a></li>
             <li><a htef="#"> Report Fraud</a></li>
             <li><a htef="#">Contact</a></li>
             <li><a htef="#">Investor Relations</a></li>
           </ul>
         </div>

         <div className='footer-col'>
           <h4>FOR FOODIES</h4>
           <ul className='company'>
           <li><a htef="#">FAQ</a></li>
             <li><a htef="#">Code of Conduct</a></li>
             <li><a htef="#">Community</a></li>
             <li><a htef="#">Blogger Help</a></li>
             <li><a htef="#">Mobile Apps</a></li> 
           </ul>
         </div>

         <div className='footer-col'>
           <h4>FOR RESTAURANTS</h4>
           <ul className='company'>
           <li><a htef="#">Add restaurant</a></li>
           <h4 className='for'> For ENTERPRISES</h4>
           <li><a htef="#">Zomato for work</a></li>
           </ul>
         </div>

         
         <div className='footer-col'>
           <h4>FOR YOU</h4>
           <ul className='company'>
           <li><a htef="#">Privacy</a></li>
           <li><a htef="#">Terms</a></li>
           <li><a htef="#">Security</a></li>
           <li><a htef="#">Sitemap</a></li>
           </ul>
           
         </div>

         <div className='footer-col'>
           <h3>SOCIAL LINKS</h3>
           <div className='social-links'>
         <i class="fab fa-facebook-square"></i>
         Start 
           </div>
         </div>
       
         
       </div>

     </div>
   </footer>

  );
};

export default footer;
