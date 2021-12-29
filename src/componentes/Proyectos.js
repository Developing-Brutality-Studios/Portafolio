import * as React from "react";
import "../css/ProyectosCss.css";

import AppImage from "../images/AppImage.jpg";

const Proyectos = () => {
  return (
    <section className="section">
      <div className="card-grid">
        <a className="card reveal fade-bottom1" href="#">
          <div  className="card__background"
            style={{backgroundImage:`url(${AppImage})`}}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a>
        <a className="card reveal fade-bottom2" href="#">
          <div  className="card__background"
            style={{backgroundImage:`url(${AppImage})`}}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a> 
        <a className="card reveal fade-bottom3" href="#">
          <div  className="card__background"
            style={{backgroundImage:`url(${AppImage})`}}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a> 
        <a className="card reveal fade-bottom4" href="#">
          <div  className="card__background"
            style={{backgroundImage:`url(${AppImage})`}}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a> 
      </div>
    </section>
  );
};
export default Proyectos;
