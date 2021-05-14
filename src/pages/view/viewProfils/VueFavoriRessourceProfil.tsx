import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';

const VueFavoriProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Card/>
      </IonContent>
    </IonPage>
  );
};

export default VueFavoriProfil;