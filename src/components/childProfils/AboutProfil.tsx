import React from 'react';
import { IonText, IonCard, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonTitle } from '@ionic/react';
import {
  callOutline, pinOutline, personCircleOutline, calendarNumberOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoYoutube,
  logoTiktok,
  logoTwitch,
  logoDiscord,
  logoLinkedin
} from 'ionicons/icons';

/*CSS*/
import '../../pages/css/profil.css'

export default class AboutProfil extends React.Component {

  render() {
    return (
      <section className="sectionEnfantProfil">
        <IonText>
          <IonTitle>A propos de <IonText color="noxus">Farid Noxus</IonText></IonTitle>
        </IonText>

        <IonCard className="backgroundProfilDark" id="firstCardAboutProfilBiographie">
          <section className="firstParentSection">
            <IonCardSubtitle>Mes Informations</IonCardSubtitle>
            <IonCardContent className="positionParentElementCardAboutProfil">
              <IonItem lines="none">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Inscrit le 03/2021</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonIcon icon={calendarNumberOutline} />
                <IonLabel>30 Mars 1997</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonIcon icon={pinOutline} />
                <IonLabel>Bourges</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonIcon icon={callOutline} />
                <IonLabel>06 25 63 25 41</IonLabel>
              </IonItem>
            </IonCardContent>
          </section>

          <section className="secondParentSection">
            <IonCardSubtitle>Mes Réseaux Sociaux</IonCardSubtitle>
            <IonCardContent className="positionParentElementCardAboutProfil">
              <IonItem lines="none">
                <IonIcon icon={logoFacebook} />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoInstagram} />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoTwitter} />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoTiktok} />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoYoutube} />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoTwitch} />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoDiscord} />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoLinkedin} />
              </IonItem>
            </IonCardContent>
          </section>

          <section className="thirdParentSection">
            <IonCardSubtitle>Ma Biographie</IonCardSubtitle>
            <IonCardContent className="positionParentElementCardAboutProfil">
              <IonText className="texteBiographyAboutProfil">
                <p>
                  Faut faire comme avec les scorpions qui se suicident quand ils sont entourés par le feu, faut faire un feu en forme de cercle, autour d'eux, comme ça ils se suicident, pendant que nous on fait le tour et on lance de la caillasse de l'autre côté pour brouiller... Non ?
              </p>
                <p>
                  Si c'est le même volume sonore, on dit équidistant. S'ils sont équidistants en même temps que nous, on peut repérer le dragon par rapport à une certaine distance. Si le dragon s'éloigne, on sera équidistant, mais ça sera vachement moins précis et pas réciproque.
              </p>
                <p>
                  Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !
              </p>
              </IonText>
            </IonCardContent>
          </section>
        </IonCard>

      </section>
    );
  };
}