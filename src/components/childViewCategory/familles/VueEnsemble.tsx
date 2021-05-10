import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';
import Familles from '../../../pages/view/Familles'

const VueEnsemble: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Familles/>
        <Card/>
      </IonContent>
    </IonPage>
  );
};

export default VueEnsemble;
