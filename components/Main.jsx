import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artista populares</h2>
          <a className="item-list__link" href="/">
            Mostrar mais
          </a>
        </div>
        <div className="item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Imagen do Henrique e Juliano"
                  className="single-item_image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <p className="single-item__title">Henrique e Juliano</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Imagen do Henrique e Juliano"
                  className="single-item_image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <p className="single-item__title">Henrique e Juliano</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Imagen do Henrique e Juliano"
                  className="single-item_image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <p className="single-item__title">Henrique e Juliano</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Imagen do Henrique e Juliano"
                  className="single-item_image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <p className="single-item__title">Henrique e Juliano</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Imagen do Henrique e Juliano"
                  className="single-item_image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <p className="single-item__title">Henrique e Juliano</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Imagen do Henrique e Juliano"
                  className="single-item_image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <p className="single-item__title">Henrique e Juliano</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
