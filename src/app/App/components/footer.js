import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
    return (
      <Router>
        <div id="footer">
          <div className="row">
            <div className="col-md-3 logo">
              <a href="/"><img src="http://biblio.academia.cl/img/logo-uahc-sibi.svg" alt="sistema de bibliotecas"/></a>
            </div>
            <div className="col-md-3">
              <p><strong>{t("footer.bibliotecaCentral")}</strong></p>
              <p><i className="fas fa-map-marker-alt"></i> Condell 343, Providencia</p>
              <p><a href="tel:+56222878050"><i className="fas fa-phone-alt"></i> 22 787 8050</a></p>
              <br/>
              <p><strong>{t("footer.sistemaBibliotecas")}</strong></p>
              <p><a href="https://wa.link/ckud59"><i className="fas fa-phone-alt"></i> +56 9 9426 2908</a></p>
            </div>
            <div className="col-md-3">
              <div className="fono">
                <p><strong>{t("footer.informacionGeneral")}</strong></p>
                <p><a href="tel:+56222878050"><i className="fas fa-phone-alt"></i> 22 787 8050</a></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fono">
                <p><strong>{t("footer.renovaciones")}</strong></p>
                <p><a href="tel:+56222878061"><i className="fas fa-phone-alt"></i> 22 787 8061</a></p>
              </div>
            </div>
          </div>
				<p className="text-center mt-5">{t("footer.copyright")}</p>
				
          <div className="right">
            <div className="info">
              <div id="opengeek">
                <span className="theme-by">Implementado por</span>
                <a
                  href="https://opengeekservice.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="OpenGeek"
                >
                </a>
              </div>
            </div>
          </div>
          <script src="http://bibliotecadigital.academia.cl/xmlui/themes/Mirage2/scripts/theme.js"> </script>
        </div>
      </Router>
    );
  /*}*/
};

export default Footer;
