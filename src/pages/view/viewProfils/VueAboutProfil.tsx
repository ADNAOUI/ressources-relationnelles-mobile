import React from 'react';
import { IonContent,  IonIcon,  IonImg,  IonPage } from '@ionic/react';
import { heart, chatbubblesOutline, logoFacebook , logoInstagram, documentText } from 'ionicons/icons';


import RouteProfil from '../../../components/childProfils/RouteProfil';
import profilPicture from "../../../img/profilPicture.png";
import Commentaires from "../../../img/commentaires.png";

const VueAboutProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RouteProfil />
        <section className="marginSection"> 
          <div className="topAboutProfil">
            <img src={profilPicture} alt="photo jeune homme" ></img>
            <h2 className="aboutProfil">Fabien</h2>
            <p>Développeur informatique</p>
          </div>
          <div className="clearContent">
            <h2 className="aboutProfil">ME SUIVRE </h2>
            <IonIcon icon={logoFacebook} className="logoAboutProfil" />
            <IonIcon icon={logoInstagram}  className="logoAboutProfil" />
          </div>


          <div className="clearContent">
            <h2 className="aboutProfil">MA BIOGRAPHIE</h2>
            <p>
            C'est moi qui remporte le tour. Quand on remporte le tour à Sloubi, on a quatorze solutions possibles : soit on annule le tour ; soit on passe ; soit on change de sens ;
             soit on recalcule les points ; soit on compte ; soit on divise par six ; soit on jette les bouts de bois de quinze pouces, ça c'est quand on joue avec les bouts
              de bois ; soit on se couche ; soit on joue sans atouts. Et après y'a les appels : plus un ; plus deux ; attrape oiseaux ; régoudon ; ou chante Sloubi. [...]
               Comme vous êtes second, vous avez plus que dix-neuf solutions possibles : soit vous passez ; soit vous sciez en deux les cinquante poutrelles de trente pieds, mais ça c'est quand on joue avec les bouts de bois.
                Sinon c'est les relances : doublette ; jeu carré ; jeu de piste ; jeu gagnant ; jeu moulin ; jeu-jeu ; joue-jeu ; joue-joue ; joue-jié ; joue-ganou ; gagnar ; catakt ; tacat ; cacatac ; cagat-cata et ratacat-mic.
                 Ou : chante Sloubi. Nous, on va faire que chante Sloubi.
            </p>
          </div>


          <div className="clearContent">
            <h2 className="aboutProfil">STATISTIQUES</h2>
            <div className="iconStats">
              <IonIcon icon={heart} className="logoAboutProfil" />
              <p>
              LIKES<br />
              34
              </p>
             
            </div>
            <div className="iconStats" >
            <IonIcon icon={documentText}  className="logoAboutProfil"/>
            <p>
            COMMENTS <br />
              154
            </p>
              
            </div>
          </div>

          <div className="clearContent">
            <h2 className="aboutProfil">COMMENTAIRES</h2>

            {
            Array(10).fill(null).map((_, i) => (
              <div>
                     <IonImg src={Commentaires} className="CommentsAboutProfil"/>
              </div>
              

            ))
          }

             
          
          </div>

            
        </section>
         
      </IonContent>
    </IonPage>
  );
};

export default VueAboutProfil;