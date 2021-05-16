import React from 'react';
import { IonItem, IonRouterOutlet, IonTitle, IonLabel, IonIcon, IonText, IonAvatar, IonCard,  IonCardSubtitle, IonImg, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { heart, chatbubblesOutline } from 'ionicons/icons';
import {Route, Link } from 'react-router-dom';


//CSS
import './css/ressourceCard.css'

const RessourceCard: React.FC = () => {
  return (
    <IonCard className="formatCard">
      <Link to="/vue/ressource/video">
      <IonCardHeader>
        <IonCardSubtitle className="colorBlue positionAvatarHome">
          <IonAvatar>
            <img src="http://pm1.narvii.com/7158/c170e801266e77cea52ac68934ba6596647a7795r1-604-443v2_uhq.jpg" />
          </IonAvatar>
          
            <IonItem lines="none">
              <span className="spanNameCard">Michel PARSETTI</span>
            </IonItem>
          
        </IonCardSubtitle>
        
          <IonItem lines="none">
            <IonCardTitle className="colorPink positionTextTitleCard">Une vidéo pour les gouverner tous </IonCardTitle>
          </IonItem>
       
      </IonCardHeader>

      <IonCardContent id="ressourceCardId">
        
          <IonItem lines="none">
            <IonImg className="" src="https://transformationdigitale.coach/wp-content/uploads/2018/12/D%C3%A9veloppement-personnel.jpg" />
          </IonItem>
        
        
        <IonText color="white">Vidéo de developpement personel</IonText>
        
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
      </Link>
    </IonCard>
  );
};

export default RessourceCard;
