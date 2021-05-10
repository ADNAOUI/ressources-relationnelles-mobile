import React from 'react';
import { IonButton, IonTitle, IonHeader, IonToolbar, IonButtons, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import { chevronBack } from 'ionicons/icons';


class Professionnels extends React.Component {
  render() {
    return (
      <section className="categoryMarginSection">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton routerLink="/explore"><IonIcon icon={chevronBack}></IonIcon></IonButton>
              <IonTitle>Professionnels</IonTitle>
            </IonButtons>
          </IonToolbar>
          <IonToolbar className="positionEnfantToolbarCategory">
            <ul className="positionParentListNavigationCategory">
              <Link to="/category/professionnels/vueEnsemble">
                <li>Vue d'ensemble</li>
              </Link>
              <Link to="/category/professionnels/articles">
                <li>Articles</li>
              </Link>
              <Link to="/category/professionnels/jeux">
                <li>Jeux</li>
              </Link>
              <Link to="/category/professionnels/videos">
                <li>Vidéos</li>
              </Link>
              <Link to="/category/professionnels/about">
                <li>A Propos</li>
              </Link>
            </ul>
          </IonToolbar>
        </IonHeader>
      </section>
    );
  };
};

export default Professionnels;
