import React from 'react';
import { IonButton, IonContent, IonPage} from '@ionic/react';
import { Link } from 'react-router-dom';

import './css/explorer.css';

export const Explorer: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <section className="marginSection">
          <div className="boutonExplorer">
            <Link to="/category/soi/vueEnsemble">
              <IonButton color="danger">Soi</IonButton>
              </Link>
            <Link to="/category/conjoints/vueEnsemble">
            <IonButton color="tertiary">Conjoints</IonButton>
            </Link>
            <Link to="/category/professionnels/vueEnsemble">
              <IonButton color="success">Professionnelles</IonButton>
            </Link>
            <Link to="/category/familles/vueEnsemble">
              <IonButton color="primary">Famille</IonButton>
            </Link>
            <Link to="/category/amis/vueEnsemble">
              <IonButton color="warning">Amis</IonButton>
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