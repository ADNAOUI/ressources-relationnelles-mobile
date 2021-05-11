import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../components/RessourceCard';
import Tendances from '../../pages/Tendances'

const Videos: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
          <Tendances />
          <Card/>
      </IonContent>
    </IonPage>

  );
};

export default Videos;