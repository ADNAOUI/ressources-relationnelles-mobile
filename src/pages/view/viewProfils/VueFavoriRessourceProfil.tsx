import React from 'react';
import { IonContent, IonText, IonPage , IonIcon} from '@ionic/react';
import { star } from 'ionicons/icons';
import RouteProfil from '../../../components/childProfils/RouteProfil';

import Card from '../../../components/RessourceCard';

const VueFavoriProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
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