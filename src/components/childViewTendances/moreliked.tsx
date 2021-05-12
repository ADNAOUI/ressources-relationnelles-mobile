import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../RessourceCard';
import Tendances from '../../pages/Tendances'

const MoreLiked: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
          <Tendances />
          <Card/>
      </IonContent>
    </IonPage>

  );
};

export default MoreLiked;
