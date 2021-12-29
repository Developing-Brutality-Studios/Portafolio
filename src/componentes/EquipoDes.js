import * as React from "react"
import "../css/EquipoDes.css"

import designer1 from "../images/designer1.jpg"
import designer2 from "../images/designer2.jpg"
const NotFoundPage = () => {
  
  
 // window.addEventListener("scroll", reveal);
  window.addEventListener('scroll', (reveal) => {
    var reveals = document.querySelectorAll(".reveal");
   
   
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 800;
      if (((elementTop)*(-1)) < ((windowHeight - elementVisible)*-1)) {
       
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      
      }
    }
  });
    return (
      
        <section className="container">
            <div className="gridImages1  reveal fade-left">
                <div className="containerImage "> 
                  <img alt="designer1" src={designer1} className="imageDesigner"/>
                </div>
               
                <text className="containerTexto">
                  
                  <h2>Designer </h2>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    
                </text>
            </div>
            <div className="gridImages2 reveal fade-right" >
                <text className="containerTexto">
                  <h2>Designer </h2>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    
                </text>
                <div className="containerImage "> 
                  <img alt="designer2" src={designer2} className="imageDesigner"/>
                </div>
            </div>
        </section>
     
    )
  }
  
  export default NotFoundPage
  