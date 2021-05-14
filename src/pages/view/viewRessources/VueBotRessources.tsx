import React from 'react';
import { IonIcon, IonLabel } from '@ionic/react';
import { heartOutline, starOutline, chatbubblesOutline, shareSocialOutline } from 'ionicons/icons';

export default class VueBotRessources extends React.Component {
    render() {
        return (
            <section className="ressourceMarginSectionBot">
                <ul className="positionParentElementRessourcesBot">
                    <li>
                        <IonIcon icon={heartOutline} />
                        <IonLabel>Like</IonLabel>
                    </li>
                    <li>
                        <IonIcon icon={starOutline} />
                        <IonLabel>Favori</IonLabel>
                    </li>
                    <li>
                        <IonIcon icon={chatbubblesOutline} />
                        <IonLabel>Commentaires</IonLabel>
                    </li>
                    <li>
                        <IonIcon icon={shareSocialOutline} />
                        <IonLabel>Partager</IonLabel>
                    </li>
                </ul>
            </section>
        );
    };
};

