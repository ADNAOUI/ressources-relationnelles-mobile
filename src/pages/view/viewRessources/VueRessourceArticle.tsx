import React, { useState } from 'react';
import { IonPage, IonText, IonTitle, IonContent, IonCardContent, IonItem, IonImg} from '@ionic/react';

import VueTopRessources from './VueTopRessources'
import VueBotRessources from './VueBotRessources'

export const VueRessourceArticle: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <VueTopRessources />
        <section className="ressourceMarginSection">
          <IonText id="textParentVueRessourceArticle">
            <IonTitle className="titlePositionVueRessource">Titre</IonTitle>
          </IonText>
          <IonCardContent id="ressourceCardId">
            <IonItem>
              <IonImg className="" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_15.jpg" />
            </IonItem>
            <IonText color="white">
              "(À Arthur) Moi, j'serais vous, je vous écouterais... Non, moi, j'serais nous, je vous... Si moi, j'étais vous, je vous écouterais ! Non, elle me fait chier, cette phrase !"
            </IonText>
          </IonCardContent>
        </section>
        <VueBotRessources/>
      </IonContent>
    </IonPage>
  );
};

export default VueRessourceArticle;
