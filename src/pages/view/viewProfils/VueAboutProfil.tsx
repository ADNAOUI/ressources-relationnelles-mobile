import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';

const VueAboutProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
          <Card/>
      </IonContent>
    </IonPage>
  );
};

export default VueAboutProfil;