import React from 'react';
import { IonAvatar, IonContent, IonCard,  IonCardSubtitle, IonPage, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

//Vue 
import Card from '../components/RessourceCard';

//CSS
import './css/home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <section className="marginSection">
          <Card/>
          <Card/>
          <Card/>
        </section>
      </IonContent>
    </IonPage>

  );
};

export default Home;
