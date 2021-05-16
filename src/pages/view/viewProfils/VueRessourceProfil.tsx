import React from 'react';
import { IonContent, IonText, IonPage , IonIcon} from '@ionic/react';
import { checkmarkCircle,  create,  time, trash } from 'ionicons/icons';
import Card from '../../../components/RessourceCard';
import RouteProfil from '../../../components/childProfils/RouteProfil';


const VueRessourceProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <section className="marginSection">
        <RouteProfil />
        <h3>RESSOURCES EN ATTENTES DE CONFIRMATION</h3>
          {
            Array(3).fill(null).map((_, i) => (             
              <div>
                <div className="waitingText" >
                <IonIcon icon={time}  ></IonIcon><IonText> En attente</IonText>
                </div>
                  <div className="opacityCard" >
                    <Card key={i}  />
                  </div>
                  
              </div>
            ))
          }
        </section>

        <section className="marginSection">
        <h3>RESSOURCES VALIDEES</h3>
          {
            Array(3).fill(null).map((_, i) => (             
              <div className="RessourceCardContainer">
                <div className="validateText">
                  <IonIcon icon={checkmarkCircle} ></IonIcon><IonText> Validée</IonText>
                </div>
                
                  <Card key={i} />

                  <div className="subtitlesCards"> 
                  <div className="deleteText" >
                    <IonIcon icon={trash} ></IonIcon><IonText>  Supprimer</IonText>  
                  </div>
                  <div className="editText">
                    <IonIcon icon={create} ></IonIcon><IonText>  Modifier</IonText>
                  </div>                 
                  </div>

                  
              </div>
            ))
          }
        </section>
      </IonContent>
    </IonPage>
  );
};

export default VueRessourceProfil;