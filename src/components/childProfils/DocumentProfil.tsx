import React from 'react';
import { IonText, IonCard, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonTitle, IonImg } from '@ionic/react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

/*CSS*/
import '../../pages/css/profil.css'

export default class ImageProfil extends React.Component {

  render() {
    return (
      <section className="sectionEnfantProfil">
        <IonText>
          <IonTitle>Documents Récentes</IonTitle>
        </IonText>

        <div className="md-layout backgroundProfilDark">
          <mobiscroll.FormGroup>
            <mobiscroll.ScrollView
              theme="ios"
              themeVariant="light"
              layout="fixed"
              itemWidth={80}
              className="md-fixed"
            >
              <IonImg src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"/>
              <IonImg src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"/>
              <IonImg src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"/>
              <IonImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Word_2013-2019_logo.svg/1200px-Microsoft_Word_2013-2019_logo.svg.png"/>

            </mobiscroll.ScrollView>
          </mobiscroll.FormGroup>
        </div>
      </section>
    );
  };
}