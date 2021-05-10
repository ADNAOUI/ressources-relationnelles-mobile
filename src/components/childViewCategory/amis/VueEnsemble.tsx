import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';
import Amis from '../../../pages/view/Amis'

const VueEnsemble: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Amis/>
          <Card/>
      </IonContent>
    </IonPage>

  );
};

export default VueEnsemble;
