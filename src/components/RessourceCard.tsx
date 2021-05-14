import React from 'react';
import { IonItem, IonRouterOutlet, IonTitle, IonLabel, IonIcon, IonText, IonAvatar, IonCard,  IonCardSubtitle, IonImg, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { heart, chatbubblesOutline } from 'ionicons/icons';
import {Route, Link } from 'react-router-dom';
import Articles from '../pages/view/viewRessources/VueRessourceTexte';
import Video from '../pages/view/viewRessources/VueRessourceTexte';

//CSS
import './css/ressourceCard.css'

const RessourceCard: React.FC = () => {
  return (
    <IonCard className="formatCard">
      <IonCardHeader>
        <IonCardSubtitle className="colorBlue positionAvatarHome">
          <IonAvatar>
            <img src="http://pm1.narvii.com/7158/c170e801266e77cea52ac68934ba6596647a7795r1-604-443v2_uhq.jpg" />
          </IonAvatar>
          <Link to="/vue/ressource/texte">
            <IonItem lines="none">
              <span className="spanNameCard">Farid Noxus</span>
            </IonItem>
          </Link>
        </IonCardSubtitle>
        <Link to="/vue/ressource/article">
          <IonItem lines="none">
            <IonCardTitle className="colorPink positionTextTitleCard">Titre</IonCardTitle>
          </IonItem>
        </Link>
      </IonCardHeader>

      <IonCardContent id="ressourceCardId">
        <Link to="/vue/ressource/video">
          <IonItem lines="none">
            <IonImg className="" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_15.jpg" />
          </IonItem>
        </Link>
        <IonText color="white">"Dans la vie, j'avais deux ennemis : le vocabulaire et les épinards."</IonText>
      </IonCardContent>

      <IonText className="footerCard">
        <IonTitle>
          <IonIcon color="pinkofficial" className="tailleIconFooterCard" icon={heart} />
          <IonLabel>130</IonLabel>
        </IonTitle>

        <IonTitle>
          <IonIcon color="primary" className="tailleIconFooterCard" icon={chatbubblesOutline} />
          <IonLabel>120</IonLabel>
        </IonTitle>
      </IonText>

      <IonRouterOutlet>
        <Route path="/vue/2" component={Articles} />
        <Route path="/vue/3" component={Video} />
        {/* <Route path="/explore" component={Explorer} /> */}
        {/* <Route path="/ajouter" component={Ajouter} /> */}
        {/* <Route path="/tendances" component={Tendances} /> */}
      </IonRouterOutlet>
    </IonCard>
  );
};

export default RessourceCard;
