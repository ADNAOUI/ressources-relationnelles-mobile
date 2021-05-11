import React from 'react';
import { IonButton, IonTitle, IonHeader, IonToolbar, IonButtons, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import { chevronBack } from 'ionicons/icons';
import './css/tendances.css';

class Tendances extends React.Component {


  render() {
    return (
      <section className="categoryMarginSection">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton routerLink="/accueil"><IonIcon icon={chevronBack}></IonIcon></IonButton>
              <IonTitle>Tendances</IonTitle>
            </IonButtons>
          </IonToolbar>
          <IonToolbar className="positionEnfantToolbarCategory">
            <ul className="positionParentListNavigationCategory">
              <Link to="/tendances/nouveautes">
                <li>Nouveautés</li>
              </Link>
              <Link to="/tendances/moreliked">
                <li>Les plus likés</li>
              </Link>
              <Link to="/tendances/games">
                <li>Jeux</li>
              </Link>
              <Link to="/tendances/videos">
                <li>Vidéos</li>
              </Link>
              <Link to="/tendances/articles">
                <li>Articles</li>
              </Link>
            </ul>
          </IonToolbar>
        </IonHeader>
      </section>
    );
  };

}


export default Tendances;
