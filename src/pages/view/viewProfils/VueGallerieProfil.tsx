import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

import Card from '../../../components/RessourceCard';
import RouteProfil from '../../../components/childProfils/RouteProfil';

const VueGallerieProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RouteProfil />
        <section className="marginSection">          
          <h3>Gallerie d'images </h3>
          <mobiscroll.FormGroup>
            <mobiscroll.ScrollView
              theme="ios"
              themeVariant="light"
              layout={1}
              paging={true}
              className="md-fullpage"
            >
              {
                Array(10).fill(null).map((_, i) => (
                  <Card key={i} />
                ))
              }
            </mobiscroll.ScrollView>
          </mobiscroll.FormGroup>
        </section>
      
      </IonContent>
    </IonPage>
  );
};

export default VueGallerieProfil;