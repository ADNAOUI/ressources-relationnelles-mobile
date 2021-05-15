import React from 'react';
import { IonText, IonTitle } from '@ionic/react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

import Card from '../RessourceCard'
/*CSS*/
import '../../pages/css/profil.css'

export default class ApercuRessource extends React.Component {

  render() {
    return (
      <section className="sectionEnfantProfil">
        <IonText>
          <IonTitle>Aperçu de vos Ressources </IonTitle>
        </IonText>

        <div className="md-layout backgroundProfilDark">
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
                  <Card key={i} />
                ))
              }
            </mobiscroll.ScrollView>
          </mobiscroll.FormGroup>
        </div>
      </section>
    );
  }
}