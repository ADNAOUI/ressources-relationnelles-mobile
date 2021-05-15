import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

//CSS
import './css/profil.css';

import TopProfil from '../components/childProfils/TopProfil'
import RouteProfil from '../components/childProfils/RouteProfil'
import AboutProfil from '../components/childProfils/AboutProfil'
import ApercuRessource from '../components/childProfils/ApercuRessource'
import ApercuRessourceFav from '../components/childProfils/ApercuRessourceFav'
import ImageProfil from '../components/childProfils/ImageProfil'
import DocumentProfil from '../components/childProfils/DocumentProfil'


const Profil: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <section className="categoryMarginSection">
          <TopProfil/>
          <RouteProfil />
          <AboutProfil />
          <ApercuRessource />
          <ApercuRessourceFav />
          <ImageProfil />
          <DocumentProfil />
        </section>
      </IonContent>
    </IonPage>

  );
};

export default Profil;
