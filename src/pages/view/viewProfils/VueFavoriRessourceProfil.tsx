import React from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

//Component
import TopProfil from '../../../components/childProfils/TopProfil'
import RouteProfil from '../../../components/childProfils/RouteProfil';
import Card from '../../../components/RessourceCard';

const VueFavoriProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <TopProfil />
        <RouteProfil />
        <section className="marginSection">
          <h3>RESSOURCES FAVORITES</h3>
          {
            Array(20).fill(null).map((_, i) => (
              <div>
                <div className="favoriteIcon"><IonIcon icon={star} ></IonIcon></div>
                <Card key={i} />
              </div>
            ))
          }
        </section>
      </IonContent>
    </IonPage>
  );
};

export default VueFavoriProfil;