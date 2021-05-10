import React from 'react';
import { IonButton, IonTitle, IonHeader, IonToolbar, IonButtons, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import { chevronBack } from 'ionicons/icons';


class Amis extends React.Component {
  render() {
    return (
      <section className="categoryMarginSection">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton routerLink="/explore"><IonIcon icon={chevronBack}></IonIcon></IonButton>
            <IonTitle>Amis</IonTitle>
            </IonButtons>
          </IonToolbar>
          <IonToolbar className="positionEnfantToolbarCategory">
            <ul className="positionParentListNavigationCategory">
              <Link to="/category/amis/vueEnsemble"> 
                <li>Vue d'ensemble</li> 
              </Link>
              <Link to="/category/amis/articles"> 
                <li>Articles</li> 
              </Link>
              <Link to="/category/amis/jeux"> 
              <li>Jeux</li> 
              </Link>
              <Link to="/category/amis/videos"> 
              <li>Vidéos</li> 
              </Link>
              <Link to="/category/amis/about"> 
              <li>A Propos</li> 
              </Link>
            </ul>
          </IonToolbar>
        </IonHeader>
      </section>  
    );
  };
};
export default Amis;
