import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';
import Conjoints from '../../../pages/view/Conjoints'


const Videos: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <Conjoints/>
          <Card/>
      </IonContent>
    </IonPage>

  );
};

export default Videos;
