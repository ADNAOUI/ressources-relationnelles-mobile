import React, { useState, useEffect } from 'react';
import { useIonViewWillEnter, IonInfiniteScroll, IonContent, IonInfiniteScrollContent, IonPage } from '@ionic/react';

//Vue 
import Card from '../components/RessourceCard';

//CSS
import './css/home.css';


const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <section className="marginSection">
          {
            Array(100).fill(null).map((_, i) => (
              <Card key={i} />
            ))
          }
        </section>
      </IonContent>
    </IonPage>

  );
};

export default Home;
