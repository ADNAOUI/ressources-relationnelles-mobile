import React from 'react';
import { IonContent,  IonPage,IonImg } from '@ionic/react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

import Card from '../../../components/RessourceCard';
import RouteProfil from '../../../components/childProfils/RouteProfil';

const VueGallerieProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RouteProfil />
        <section className="marginSection">          
          <h3 className="aboutProfil" >GALERIE D'IMAGES </h3>

          <div className="clearContent" >
          <h2 className="aboutProfil" >IMAGES RECENTES</h2>
          <mobiscroll.FormGroup>
            <mobiscroll.ScrollView
              theme="ios"
              themeVariant="light"
              layout={1}
              paging={true}
              className="md-fullpage"
            >
              {
                Array(10).fill(null).map((_, i) => (
                  <IonImg key={i} src="https://cache.marieclaire.fr/data/photo/w1000_ci/5c/pouvoir-relations-sociales.jpg" />
                ))
              }
            </mobiscroll.ScrollView>
          </mobiscroll.FormGroup>

          </div>

          
          <div className="clearContent" >
          <h2 className="aboutProfil">IMAGES PREFEREES</h2>
          <mobiscroll.FormGroup>
            <mobiscroll.ScrollView
              theme="ios"
              themeVariant="light"
              layout={1}
              paging={true}
              className="md-fullpage"
            >
              {
                Array(10).fill(null).map((_, i) => (
                  <IonImg key={i} src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc7d8a726808b1a40/5f9b1f271a81c1644e9970b1/Ruined_King_standard_1920x1080.jpg" />
                ))
              }
            </mobiscroll.ScrollView>
          </mobiscroll.FormGroup>
          </div>
        </section>
      
      </IonContent>
    </IonPage>
  );
};

export default VueGallerieProfil;