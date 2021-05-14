import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
//CSS
import './css/profil.css';

import RouteProfil from '../components/childProfils/RouteProfil'
import AboutProfil from '../components/childProfils/AboutProfil'
import ApercuRessource from '../components/childProfils/ApercuRessource'
import ApercuRessourceFav from '../components/childProfils/ApercuRessourceFav'
import ImageProfil from '../components/childProfils/ImageProfil'


const Profil: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <section className="categoryMarginSection">
          <RouteProfil />
          <AboutProfil/>
          <ApercuRessource/>
          <ApercuRessourceFav/>
          <ImageProfil/>
        </section>
      </IonContent>
    </IonPage>

  );
};

export default Profil;
