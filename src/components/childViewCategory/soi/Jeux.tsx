import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';
import Soi from '../../../pages/view/Soi'

const Jeux: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Soi/>
        <Card/>
      </IonContent>
    </IonPage>
  );
};

export default Jeux;
