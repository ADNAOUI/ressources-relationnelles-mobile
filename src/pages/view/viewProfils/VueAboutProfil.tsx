import React from 'react';
import { IonAvatar, IonContent,  IonIcon,  IonImg,  IonItem,  IonPage, IonText } from '@ionic/react';
import { heart, logoFacebook , logoInstagram, documentText } from 'ionicons/icons';

import RouteProfil from '../../../components/childProfils/RouteProfil';
import TopProfil from '../../../components/childProfils/TopProfil'


//Images
import profilPicture from "../../../img/profilPicture.png";
import Commentaires from "../../../img/commentaires.png";


const VueAboutProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <TopProfil/>
        <RouteProfil/>
        <section className="marginSection"> 
          <div className="topAboutProfil">
            <IonAvatar className="positionAvatarVueAboutProfil">
              <img src="http://pm1.narvii.com/7158/c170e801266e77cea52ac68934ba6596647a7795r1-604-443v2_uhq.jpg" />
            </IonAvatar> 
            <h2 className="aboutProfil">Farid Noxus</h2>
            <p>Développeur informatique</p>
          </div>

          <div className="clearContent">
            <h2 className="aboutProfil">ME SUIVRE </h2>
            <IonItem>
              <IonIcon icon={logoFacebook} className="logoAboutProfil" />
              <IonIcon icon={logoInstagram}  className="logoAboutProfil" />
            </IonItem>
          </div>

          <div className="clearContent">
            <h2 className="aboutProfil">MA BIOGRAPHIE</h2>
            <IonText>
              <p>
                C'est moi qui remporte le tour. Quand on remporte le tour à Sloubi, on a quatorze solutions possibles : soit on annule le tour ; soit on passe ; soit on change de sens ;
                soit on recalcule les points ; soit on compte ; soit on divise par six ; soit on jette les bouts de bois de quinze pouces, ça c'est quand on joue avec les bouts
                de bois ; soit on se couche ; soit on joue sans atouts. Et après y'a les appels : plus un ; plus deux ; attrape oiseaux ; régoudon ; ou chante Sloubi. [...]
                Comme vous êtes second, vous avez plus que dix-neuf solutions possibles : soit vous passez ; soit vous sciez en deux les cinquante poutrelles de trente pieds, mais ça c'est quand on joue avec les bouts de bois.
                Sinon c'est les relances : doublette ; jeu carré ; jeu de piste ; jeu gagnant ; jeu moulin ; jeu-jeu ; joue-jeu ; joue-joue ; joue-jié ; joue-ganou ; gagnar ; catakt ; tacat ; cacatac ; cagat-cata et ratacat-mic.
                Ou : chante Sloubi. Nous, on va faire que chante Sloubi.
              </p>
            </IonText> 
          </div>

          <div className="clearContent">
            <h2 className="aboutProfil">STATISTIQUES</h2>
            <section>
              <div className="iconStats">
                <IonIcon icon={heart} className="logoAboutProfil" />
                <IonText>
                  LIKES<br/>34
                </IonText>
              </div>

              <div className="iconStats" >
                <IonIcon icon={documentText} className="logoAboutProfil" />
                <IonText>
                  COMMENTS <br />154
                </IonText>
              </div>
            </section>
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