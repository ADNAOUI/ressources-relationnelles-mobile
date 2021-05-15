import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';

import Card from '../../../components/RessourceCard';
import RouteProfil from '../../../components/childProfils/RouteProfil';
import profilPicture from "../../../img/profilPicture.png";

const VueAboutProfil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RouteProfil />
        <section className="marginSection"> 
          <div className="topAboutProfil">
            <img src={profilPicture} alt="photo jeune homme" ></img>
            <h2>Fabien</h2>
            <p>Développeur informatique</p>
          </div> 
            
        </section>
         
      </IonContent>
    </IonPage>
  );
};

export default VueAboutProfil;