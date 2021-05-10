import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';

import Professionnels from '../../../pages/view/Professionnels'

const Jeux: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <Professionnels/>
          <Card/>
      </IonContent>
    </IonPage>

  );
};

export default Jeux;
