import React from 'react';
import { IonToolbar, IonTitle, IonLabel, IonIcon, IonFooter, IonText, IonAvatar, IonCard,  IonCardSubtitle, IonImg, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { heart, chatbubblesOutline } from 'ionicons/icons';

//CSS
import './css/ressourceCard.css'

//Images 
import Image from '../img/hackaton.png'

const RessourceCard: React.FC = () => {
  return (
    <IonCard className="formatCard">

      <IonCardHeader>
        <IonCardSubtitle className="colorBlue positionAvatarHome">
          <IonAvatar>
            <img src="http://pm1.narvii.com/7158/c170e801266e77cea52ac68934ba6596647a7795r1-604-443v2_uhq.jpg" />
          </IonAvatar>
          <span className="spanNameCard">Farid Noxus</span>
        </IonCardSubtitle>
        <IonCardTitle className="colorPink positionTextTitleCard">Titre</IonCardTitle>
      </IonCardHeader>

      <IonCardContent id="ressourceCardId">
        <IonImg className="" src={Image} />
        <IonText color="white">
          "Dans la vie, j'avais deux ennemis : le vocabulaire et les épinards."
          </IonText>
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
