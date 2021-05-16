import React from 'react';
import { IonItem, IonTitle, IonLabel, IonIcon, IonText, IonAvatar, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { heart, chatbubblesOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';


//CSS
import './css/ressourceCard.css'

const RessourceCard: React.FC = () => {
  return (
    <IonCard className="formatCard">
      <Link to="/vue/ressource/texte">
        <IonCardHeader>
          <IonCardSubtitle className="colorBlue positionAvatarHome">
            <IonAvatar>
              <img src="https://besthqwallpapers.com/Uploads/30-12-2018/76297/thumb2-seto-kaiba-4k-manga-protagonist-yu-gi-oh.jpg" />
            </IonAvatar>
            <IonItem lines="none">
              <span className="spanNameCard">Seto KAIBA</span>
            </IonItem>
          </IonCardSubtitle>
          <IonItem lines="none">
            <IonCardTitle className="colorPink positionTextTitleCard">Faciliter les relations</IonCardTitle>
          </IonItem>
        </IonCardHeader>

        <IonCardContent id="ressourceCardId">
          <IonText color="white">
            (Dagonnet): A quoi ça sert de se pointer là-bas? Quel intérêt?

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
