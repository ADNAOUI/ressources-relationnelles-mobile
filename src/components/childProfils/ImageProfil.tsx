import React from 'react';
import { IonText, IonCard, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonTitle } from '@ionic/react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

/*CSS*/
import '../../pages/css/profil.css'

export default class ImageProfil extends React.Component {

  render() {
    return (
      <section className="sectionEnfantProfil">
        <IonText>
          <IonTitle>Images Récentes</IonTitle>
        </IonText>

        <div className="md-layout">
          <mobiscroll.FormGroup>
            <mobiscroll.ScrollView
              theme="ios"
              themeVariant="light"
              layout="fixed"
              itemWidth={80}
              className="md-fixed"
            >
              <div className="bck-orange">1</div>
              <div className="bck-red">2</div>
              <div className="bck-green">3</div>
              <div className="bck-yellow">4</div>
              <div className="bck-blue">5</div>
              <div className="bck-pink">6</div>
            </mobiscroll.ScrollView>
          </mobiscroll.FormGroup>
        </div>

      </section>
    );
  };
}