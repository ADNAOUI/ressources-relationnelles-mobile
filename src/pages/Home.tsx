import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

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
