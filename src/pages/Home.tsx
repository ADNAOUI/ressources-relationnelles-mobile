import React, { useState, useEffect } from 'react';
import { useIonViewWillEnter, IonInfiniteScroll, IonContent, IonInfiniteScrollContent, IonPage } from '@ionic/react';

//Vue 
import Card from '../components/RessourceCard';
import CardMichel from '../components/RessourceCardMichel';
import CardJonathan from '../components/RessourceCardJonathan';

//CSS
import './css/home.css';


const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <section className="marginSection">
          {
            Array(100).fill(null).map((_, i) => (
              <div>
                    
                    <CardMichel key={i} />
                    <CardJonathan key={i} />
                    <Card key={i} />
              </div>
              

            ))
          }
        </section>
      </IonContent>
    </IonPage>

  );
};

export default Home;
