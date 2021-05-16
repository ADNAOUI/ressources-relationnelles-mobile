import React from 'react';
import { Link } from 'react-router-dom';
import { IonButton, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonText, IonTitle, IonToolbar} from '@ionic/react';
import { manOutline, briefcaseOutline, peopleOutline, heartHalfOutline, wineOutline} from 'ionicons/icons';

//Component
import Card from '../components/RessourceCard';
import CardMichel from '../components/RessourceCardMichel';
import CardJonathan from '../components/RessourceCardJonathan';

//CSS
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
        <section className="marginSection">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Ressources les plus vues</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Card />
          <CardMichel />
          <CardJonathan />
          {
            Array(3).fill(null).map((_, i) => (
              <div>                            
                <Card key={i} />
              </div>
            ))
          }
          {
            Array(3).fill(null).map((_, i) => (
              <div>                            
                <CardMichel key={i} />
              </div>
            ))
          }
          {
            Array(3).fill(null).map((_, i) => (
              <div>                            
                <CardJonathan key={i} />
              </div>
            ))
          }
        </section>
      </IonContent>
    </IonPage>
  );
};
export default Explorer;