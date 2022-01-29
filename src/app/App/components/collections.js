import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from 'react-elastic-carousel'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function Collections() {
  const { t } = useTranslation();
  return (
    <div id="colecciones">
      {/*<div>
        <div className="titulo">{t("colecciones.titulo")}</div>
      </div>*/}
      <div className="coleccion_carrousel">
      <div>
          <div className="titulo_container">
            <div className="titulo_portada">{t("colecciones.tesis")}</div>
          </div>
          <div className="carousel">
            <div className="slides titulacion">
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/279">
                <div className="coleccion tesis">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.tesis_2")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/300">
                <div className="coleccion tesis">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.tesis_1")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/1322">
                <div className="coleccion tesis">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.tesis_3")}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="titulo_container">
            <div className="titulo_portada">{t("colecciones.otras")}</div>
          </div>
          <div className="carousel">
            <div className="slides articulos">
              <Carousel 
                breakPoints={breakPoints}
              >
                <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/5608">
                  <div className="coleccion articulos">
                    <div className="imagen"></div>
                    <div className="nombre">{t("colecciones.articulos_2")}</div>
                  </div>
                </a>
                <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/2656">
                  <div className="coleccion articulos">
                    <div className="imagen"></div>
                    <div className="nombre">{t("colecciones.otras_1")}</div>
                  </div>
                </a>
                <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/557">
                  <div className="coleccion articulos">
                    <div className="imagen"></div>
                    <div className="nombre">{t("colecciones.articulos")}</div>
                  </div>
                </a>
                <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/5605">
                  <div className="coleccion articulos">
                    <div className="imagen"></div>
                    <div className="nombre small">{t("colecciones.articulos_1")}</div>
                  </div>
                </a>
              </Carousel>
            </div>
          </div>
        </div>
        <div>
          <div className="titulo_container">
            <div className="titulo_portada">{t("colecciones.revistas")}</div>
          </div>
          <div className="carousel">
            <div className="slides revistas">
            <Carousel 
              breakPoints={breakPoints}
            >
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/4684">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_1")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/2916">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_2")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/359">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_3")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/330">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_4")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/358">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_5")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/3716">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_6")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/301">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_7")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/2892">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_8")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/557">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_9")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/255">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_10")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/319">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_11")}</div>
                </div>
              </a>
              <a href="http://bibliotecadigital.academia.cl/xmlui/handle/123456789/395">
                <div className="coleccion revistas">
                  <div className="imagen"></div>
                  <div className="nombre">{t("colecciones.revistas_12")}</div>
                </div>
              </a>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
