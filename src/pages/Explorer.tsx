import React from 'react';
import { Link } from 'react-router-dom';
import { IonButton, IonContent, IonIcon, IonLabel, IonPage, IonText} from '@ionic/react';
import { manOutline, briefcaseOutline, peopleOutline, heartHalfOutline, wineOutline} from 'ionicons/icons';


import './css/explorer.css';

export const Explorer: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <section className="marginSection">
          <div className="boutonExplorer">
            <Link to="/category/soi/vueEnsemble">
              <IonButton color="danger">
                <IonText>
                  <IonIcon icon={manOutline}/>
                  <IonLabel>Soi</IonLabel>
                </IonText>
              </IonButton>
            </Link>
            <Link to="/category/conjoints/vueEnsemble">
              <IonButton color="tertiary">
                <IonText>
                  <IonIcon icon={heartHalfOutline}/>
                  <IonLabel>Conjoints</IonLabel>
                </IonText>
              </IonButton>
            </Link>
            <Link to="/category/professionnels/vueEnsemble">
              <IonButton color="success">
                <IonText>
                  <IonIcon icon={briefcaseOutline}/>
                  <IonLabel>Job</IonLabel>
                </IonText>
              </IonButton>
            </Link>
            <Link to="/category/familles/vueEnsemble">
              <IonButton color="primary"> 
                  <IonText>
                  <IonIcon icon={peopleOutline}/>
                  <IonLabel>Famille</IonLabel>
                </IonText>
              </IonButton>
            </Link>
            <Link to="/category/amis/vueEnsemble">
              <IonButton color="warning">
              <IonText>
                  <IonIcon icon={wineOutline}/>
                  <IonLabel>Amis</IonLabel>
                </IonText>
              </IonButton>
            </Link>
          </div>
        </section> 
      </IonContent>
    </IonPage>
  );
};
export default Explorer;

        {/* <div className="boutonExplorer">
        <IonButton color="danger" routerLink="/accueil">Soi</IonButton>
        <IonButton color="tertiary" routerLink="/explore">Conjoints</IonButton>
        <IonButton color="success" routerLink="/monCompte">Professionnelles</IonButton>
        <IonButton color="primary" routerLink="/ajouter">Famille</IonButton>
        <IonButton color="warning" routerLink="/tendances">Amis</IonButton>
        </div> */}