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
          
            <IonItem lines="none">
              <span className="spanNameCard">Jonathan FERNANDEZ</span>
            </IonItem>
          
        </IonCardSubtitle>
        <Link to="/vue/ressource/article">
          <IonItem lines="none">
            <IonCardTitle className="colorPink positionTextTitleCard">Qu'en pensez vous ? </IonCardTitle>
          </IonItem>
        </Link>
      </IonCardHeader>

      <IonCardContent id="ressourceCardId">
        
          <IonItem lines="none">
            <IonImg className="" src="https://t3.ftcdn.net/jpg/01/72/13/68/360_F_172136874_7syVURiLEyHFMcon8166r4wt7CHohN7f.jpg" />
          </IonItem>
        
        <IonText color="white">Exprimez vous en commentaires </IonText>
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
    </IonCard>
  );
};

export default RessourceCard;
