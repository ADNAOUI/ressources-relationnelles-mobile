import React, { useState } from 'react';
import { IonPage, IonText, IonTitle, IonContent } from '@ionic/react';

import VueTopRessources from './VueTopRessources'
import VueBotRessources from './VueBotRessources'

import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

export const VueRessourceVideo: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <VueTopRessources/>
          <section className="ressourceMarginSection">
            <IonText id="textParentVueRessourceArticle">
              <IonTitle className="titlePositionVueRessource">Titre</IonTitle>
            </IonText>
            <div>
                <mobiscroll.Card theme="windows" themeVariant="dark" lang="fr">
                  <video autoPlay controls>
                    <source src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfa2accf67922dd3a/5f495972a11538653ea58f65/ss2020_lux_sylas_1920x1080.mp4" type="video/webm" />
                  </video>
                  <mobiscroll.CardHeader>
                      <mobiscroll.CardTitle>Aimer la vie</mobiscroll.CardTitle>
                  </mobiscroll.CardHeader>
                  <mobiscroll.CardContent>
                    Sire, Sire ! On en a gros !
                  </mobiscroll.CardContent>
                </mobiscroll.Card>
            </div>
          </section>
          <VueBotRessources/>
      </IonContent>
    </IonPage>
  );
};
export default VueRessourceVideo;
