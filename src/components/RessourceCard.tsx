import React from 'react';
import { IonItem, IonTitle, IonLabel, IonIcon, IonText, IonAvatar, IonCard,  IonCardSubtitle, IonImg, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { heart, chatbubblesOutline } from 'ionicons/icons';
import {Link } from 'react-router-dom';


//CSS
import './css/ressourceCard.css'

const RessourceCard: React.FC = () => {
  return (
    <IonCard className="formatCard">
       <Link to="/vue/ressource/texte">
      <IonCardHeader>
        <IonCardSubtitle className="colorBlue positionAvatarHome">
          <IonAvatar>
            <img src="http://pm1.narvii.com/7158/c170e801266e77cea52ac68934ba6596647a7795r1-604-443v2_uhq.jpg" />
          </IonAvatar>
          
            <IonItem lines="none">
              <span className="spanNameCard">Jennifer BAYAUX</span>
            </IonItem>
          
        </IonCardSubtitle>
        
          <IonItem lines="none">
            <IonCardTitle className="colorPink positionTextTitleCard">Faciliter les relations</IonCardTitle>
          </IonItem>
        
      </IonCardHeader>

      <IonCardContent id="ressourceCardId">
        
         
        
        <IonText color="white">(Dagonnet): A quoi ça sert de se pointer là-bas? Quel intérêt?

                                Loth: La surprise, Seigneur Dagonnet. Une discipline pour laquelle vous n’avez aucun talent.

                                (Dagonnet): C’est-à-dire?

                                Loth: Vous êtes toujours désespérément là où l’on vous attend. Par exemple, tout le royaume pense que vous êtes un con.

                                (Dagonnet): Oui

                                Loth: Et quand vous ouvrez la bouche, vous ne faites que confirmer que vous en êtes un. Vous n’avez pas le sens du coup de théâtre.

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
      </Link>
    </IonCard>
  );
};

export default RessourceCard;
