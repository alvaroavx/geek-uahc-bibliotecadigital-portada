import React from "react";
import { useTranslation } from "react-i18next";
import handleClick from "./utils/links"

function myFunction() {
  var x = document.getElementById("sidebar-left");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Header() {
  const { t } = useTranslation();
  return (
    <div
      id="navportada"
      role="navigation"
      className="navbar navbar-default navbar-static-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            data-toggle="home"
            className="navbar-toggle"
            type="button"
            onClick={myFunction}
          >
            <span className="sr-only">Cambiar navegaci&oacute;n</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div id="brand">
            <div id="logo" className="transparent">
              <a className="navbar-brand" href="http://bibliotecadigital.academia.cl/">
                <img
                  src="http://bibliotecadigital.academia.cl/xmlui/themes/Mirage2/images/logo-black.svg"
                  alt="Logo Institucional"
                  className="logo"
                />
              </a>
            </div>
            <div id="title">
              {/*
              <div className="repositorio">{t("principal.repositorioDigital")}</div>
              <div className="banco">{t("principal.bancoCentralChile")}</div>
              */}
            </div>
          </div>
        </div>
        <div className="navbar-header pull-right hidden-xs" id="topbar">
          <ul id="languageSelection" className="">
            <li><button id="es" onClick={() => handleClick("es_ES")}><div className="flag es_ES"></div></button></li>
            <li><button id="en" onClick={() => handleClick("en")}><div className="flag en"></div></button></li>
          </ul>
          <ul id="menu-principal">
            <li><a href="http://biblio.academia.cl/">{t("principal.biblioteca")}</a></li>
            <li><a href="http://descubridor.academia.cl/">{t("principal.descubridor")}</a></li>
            <li><a href="http://campusvirtual.academia.cl/login/index.php/">{t("principal.campusvirtual")}</a></li>
            <li><a href="http://navegador.academia.cl/intranet/">{t("principal.navegador")}</a></li>
            <li><a href="mailto:biblioteca@academia.cl">{t("principal.contacto")}&nbsp;&nbsp;<i className="far fa-envelope"></i></a></li>
          </ul>
          <button
            type="button"
            className="navbar-toggle visible-sm"
            data-toggle="offcanvas"
          >
            <span className="sr-only">Cambiar navegaci&oacute;n</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        
      </div>
      <hr className="header"/>
      <div id="sidebar-left">
        <ul id="menu-sidebar">
        <li><a href="http://biblio.academia.cl/">{t("principal.biblioteca")}</a></li>
            <li><a href="http://descubridor.academia.cl/">{t("principal.descubridor")}</a></li>
            <li><a href="http://campusvirtual.academia.cl/login/index.php/">{t("principal.campusvirtual")}</a></li>
            <li><a href="http://navegador.academia.cl/intranet/">{t("principal.navegador")}</a></li>
            <li><a href="mailto:biblioteca@academia.cl">{t("principal.contacto")}&nbsp;&nbsp;<i className="far fa-envelope"></i></a></li>
            <li>
              <ul id="languageSelection" className="">
                <li><button id="es" onClick={() => handleClick("es_ES")}><div className="flag es_ES"></div></button></li>
                <li><button id="en" onClick={() => handleClick("en")}><div className="flag en"></div></button></li>
              </ul>
            </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
