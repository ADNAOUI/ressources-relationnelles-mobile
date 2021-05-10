import React, { useState } from 'react';
import { IonProgressBar, IonLoading, IonButton, IonContent, IonSpinner, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './css/tendances.css';

export const Tendances: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 1000);

  return (
    <IonPage>
      <IonContent>
        <section className="marginSection">
          <IonProgressBar></IonProgressBar>
          <IonButton onClick={() => setShowLoading(true)}>Activer</IonButton>
          <IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Please wait...'}
          />
              {/*-- Default Spinner --*/}
              <IonSpinner />

              {/*-- Lines --*/}
              <IonSpinner name="lines" />

              {/*-- Lines Small --*/}
              <IonSpinner name="lines-small" />

              {/*-- Dots --*/}
              <IonSpinner name="dots" />

              {/*-- Bubbles --*/}
              <IonSpinner name="bubbles" />

              {/*-- Circles --*/}
              <IonSpinner name="circles" />

              {/*-- Crescent --*/}
              <IonSpinner name="crescent" />

              {/*-- Paused Default Spinner --*/}
              <IonSpinner paused />
          </section>
      </IonContent>

    </IonPage>
  );
};

export default Tendances;
