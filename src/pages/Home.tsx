import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

//Component
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
          <Card />
          <CardJonathan />
          <CardMichel />

          {
            Array(5).fill(null).map((_, i) => (
              <div>                            
                <CardJonathan key={i} />

              </div>
            ))
          }
          {
            Array(5).fill(null).map((_, i) => (
              <div>                            
                <CardMichel key={i} />
              </div>
            ))
          }
          {
            Array(5).fill(null).map((_, i) => (
              <div>   
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
