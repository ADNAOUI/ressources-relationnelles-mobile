import React from 'react';
import { IonButton, IonTitle, IonHeader, IonToolbar, IonButtons, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import { chevronBack } from 'ionicons/icons';


class Conjoints extends React.Component {
  render() {
    return (
      <section className="categoryMarginSection">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton routerLink="/explore"><IonIcon icon={chevronBack}></IonIcon></IonButton>
            <IonTitle>Conjoints</IonTitle>
            </IonButtons>
          </IonToolbar>
          <IonToolbar className="positionEnfantToolbarCategory">
            <ul className="positionParentListNavigationCategory">
              <Link to="/category/conjoints/vueEnsemble"> 
                <li>Vue d'ensemble</li> 
              </Link>
              <Link to="/category/conjoints/articles"> 
                <li>Articles</li> 
              </Link>
              <Link to="/category/conjoints/jeux"> 
              <li>Jeux</li> 
              </Link>
              <Link to="/category/conjoints/videos"> 
              <li>Vidéos</li> 
              </Link>
              <Link to="/category/conjoints/about"> 
              <li>A Propos</li> 
              </Link>
            </ul>
          </IonToolbar>
        </IonHeader>
      </section>
    );
  };
};

export default Conjoints;
