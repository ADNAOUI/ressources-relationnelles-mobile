import React from 'react';
import { IonContent,  IonPage, IonTitle, IonText } from '@ionic/react';

import '../../css/about.css'
import Conjoints from '../../../pages/view/Conjoints'

const About: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <Conjoints/>
          <IonText className="footerCard">
            <IonTitle>Explication de la Ressource</IonTitle>
          </IonText>

          <IonText className="textPositionAbout">
            <p>
              Faut faire comme avec les scorpions qui se suicident quand ils sont entourés par le feu,
              faut faire un feu en forme de cercle, autour d’eux, comme ça ils se suicident,
              pendant que nous on fait le tour et on lance de la caillasse de l’autre côté pour brouiller... Non ?
            </p>
            <p>
              On a même un tabouret ! Quand on s’assoit d’ssus, on se retrouve sur un autre tabouret dans une taverne dans
              le Languedoc [...]
              Ouais, le siège de transport qu’ils appellent.
              En plus, comme par hasard c’est moi qui ai essayé le premier.
              Deux semaines et demi plus le bateau qu’ça m’a pris pour revenir. J’avais pas compris qu’en me rasseyant d’ssus,
              ça me ramenait de l’aut’côté. Et à l’arrivée j’me suis fait mettre une chasse,
              parce que j’avais ramené l’autre tabouret, et que soit-disant il aurait fallu qu’il reste là-bas.
              Pourtant ils marchent les deux tabourets ! Eh ben ils sont l’un à côté de l’autre. Alors ça fait pas pareil.
            </p>

          </IonText>
      </IonContent>
    </IonPage>
  );
};

export default About;
