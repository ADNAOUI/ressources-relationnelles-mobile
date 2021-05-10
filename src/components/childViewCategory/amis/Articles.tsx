import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';
import Amis from '../../../pages/view/Amis'

const Articles: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <Amis/>
          <Card/>
      </IonContent>
    </IonPage>

  );
};

export default Articles;
