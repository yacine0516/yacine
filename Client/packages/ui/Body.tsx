import { Title } from "./Title";
import { animated, useSpring } from "@react-spring/web";
import { Btn } from "./Button";
import { Footer } from "./Footer";
import Image from "next/image";
import plaque from "../img/plaque.jpg";
import main from "../img/postes-cuisine.jpeg";
import photo from "../img/man.jpg";
import second from "../img/second.jpg";
import friggo from "../img/friggo.jpg";
import exterieur from "../img/exterieur.jpg";
import photo_2 from "../img/piano-gaz-fourfour-5-et-10-niveau.jpeg";
import "./style.css";

export function Body() {
  const props = useSpring({
    to: { x: 0, y: 0 },
    from: { y: -1000 },
    delay: 250,
  });
  return (
    <>
      <div className="body">
        <div className="body_title_img">
          <div className="body_title_btn">
            <Title />
            <animated.div className="accuile_contact" style={props}>
              <Btn nom={"Prenez un render-vous"} />
              <strong style={{ color: "black" }}>
                Appelez-nous sur <span>0789745654</span>
              </strong>
            </animated.div>
          </div>

          <div className="body_title_img_img">
            <Image src={main} alt="main" />
          </div>
        </div>
        <h2 className="service_title" style={{ marginTop: "2em" }}>
          Nos Services
        </h2>
        <div className="scroll_wrapper">
          <div className="scroll_element">
            <Image src={plaque} alt="plaque" width={260} height={220} />
            <h6 className="scroll_element">Les Plaques Chauffantes</h6>
          </div>
          <div className="scroll_element">
            <Image
              className="img"
              src={friggo}
              alt="main"
              width={260}
              height={220}
            />
            <h6 className="scroll_element">Les Friggos</h6>
          </div>
          <div className="scroll_element">
            <Image
              className="img"
              src={second}
              alt="second"
              width={260}
              height={220}
            />
            <h6 className="scroll_element">Snack-Camion</h6>
          </div>
          <div className="scroll_element">
            <Image
              className="img"
              src={exterieur}
              alt="exterireur"
              width={260}
              height={220}
            />
            <h6 className="scroll_element">Snack-Camion</h6>
          </div>
        </div>
        <div>
          <div className="service_one">
            <div className="service_one_p">
              <h4 style={{ paddingBottom: "1.5rem", textAlign: "center" }}>
                Dépannage de cuisines professionnelles et de matériel de
                restauration
              </h4>
              <p>
                Le dépannage et l’installation de matériels de cuisine
                professionnel est au centre de notre démarche qualité, quelle
                que soit la marque de votre équipement de restaurant ou de
                collectivité. Tout en apportant des innovations dans notre façon
                de travailler, notre entreprise de matériels de restauration sur
                Alger est motivée par la satisfaction unique de chaque client !
              </p>
            </div>
            <div className="service_one_img">
              <Image src={photo} alt="plaque" height={300} />
            </div>
          </div>
          <div className="service_one">
            <div className="service_one_p">
              <h4 style={{ paddingBottom: "1.5rem", textAlign: "center" }}>
                Nous effectuons l’installation complète de votre cuisine
                professionnelle
              </h4>
              <p>
                Exclusivement dédiée aux professionnels de la restauration et
                des métiers de bouche (restaurants, brasseries, hôtels,
                traiteurs, sandwicheries, campings, maisons de retraite, snacks,
                etc.), notre équipe intervient pour l’installation de tous les
                appareils de cuisson, du four professionnel à la plaque à snaker
                en passant par la table à cuisson, la friteuse, le fourneau ou
                encore le bain-marie.
              </p>
            </div>
            <div className="service_one_img">
              <Image src={photo_2} alt="plaque" width={600} height={300} />
            </div>
          </div>
          {/*<p>
            le matériel réfrigéré (arrière bar, meuble et table à pizza,
            saladette, vitrine réfrigérée, machine à glaçons) et le dépannage de
            votre hotte professionnelle, nous ne manquons pas de cordes à notre
            arc d’activités !
            </p>*/}
        </div>

        <br />
        <h2 className="service_title" style={{ marginBottom: "1em" }}>
          Pourquoi nous{" "}
        </h2>
        <div
          className="service"
          style={{ lineHeight: " 2em", marginBottom: "1.5em" }}
        >
          <p>
            Parce qu’il n’y a pas de cuisine de qualité sans matériel de cuisine
            professionnelle de qualité, met toutes les chances de votre côté en
            intervenant efficacement dans les meilleurs délais. Mieux, notre
            réseau de fournisseurs en pièces détachées est un véritable avantage
            pour opérer rapidement dans l’urgence, pour un dépannage de chambre
            froide défectueuse, de four professionnel défaillant ou de table à
            cuisson inutilisable ! Pour offrir le meilleur de son expertise,
            notre entreprise de matériel de restauration a fait le choix
            d’intervenir uniquement sur Alger et sa région, avec des tarifs
            ultra compétitifs et une main-d’œuvre compétente.
            <p>
              Persuadés qu’une démarche de bien-être alimentaire doit forcément
              passer par un équipement de restaurant de qualité, nous
              sélectionnons les meilleures pièces pour un dépannage rapide et
              une installation optimale !
            </p>
          </p>
        </div>

        <section className="accuile_contact_service">
          <div className="accuile_contact_service_el">
            <h2
              style={{
                fontSize: "3em",
                color: "white",
                fontFamily: "Montserrat ,sans-serif",
                fontWeight: "700",
              }}
            >
              Contactez-nous Aujourd'hui
            </h2>
            <p
              style={{
                fontFamily: "Varela ,Round",
                fontWeight: "300",
                width: "max-content",
                textAlign: "center",
                padding: "2em",
              }}
            >
              Notre équipe spécilisée est la solution de tous vos problèmes Vous
              pouvez nous conatcter
            </p>
            <div className="accuile_contact">
              <Btn nom={"Contactez-nous"} />
              <strong>
                Appelez-nous : <span>0789745654</span>
              </strong>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
