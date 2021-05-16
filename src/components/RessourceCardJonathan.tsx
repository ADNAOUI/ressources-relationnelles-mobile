import React from 'react';
import { IonItem, IonTitle, IonLabel, IonIcon, IonCardHeader, IonText, IonAvatar, IonCard, IonCardSubtitle, IonImg, IonCardTitle, IonCardContent } from '@ionic/react';
import { heart, chatbubblesOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

//CSS
import './css/ressourceCard.css'

const RessourceCard: React.FC = () => {
  return (
    <IonCard className="formatCard">
      <Link to="/vue/ressource/article">
      <IonCardHeader>
        <IonCardSubtitle className="colorBlue positionAvatarHome">
          <IonAvatar>
            <img src="https://i.pinimg.com/originals/46/1c/9a/461c9a527c2a8a44b3862dbb5937a2d2.png" />
          </IonAvatar>
          <IonItem lines="none">
            <span className="spanNameCard">Jonathan JOESTAR</span>
          </IonItem>
        </IonCardSubtitle>

        <IonItem lines="none">
          <IonCardTitle className="colorPink positionTextTitleCard">Qu'en pensez vous ? </IonCardTitle>
        </IonItem>
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
      </Link>
    </IonCard>
  );
};

export default RessourceCard;
