import React from 'react';
import { IonItem, IonTitle, IonLabel, IonIcon, IonText, IonAvatar, IonCard, IonCardSubtitle, IonImg, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

/*CSS*/


export default class TopProfil extends React.Component {

    render() {
        return (
            <section className="sectionEnfantProfil backgroundTopProfil">
                <IonCardSubtitle className="colorBlue positionParentAvatarProfil">
                    <IonAvatar className="positionEnfantAvatarProfil">
                        <img src="http://pm1.narvii.com/7158/c170e801266e77cea52ac68934ba6596647a7795r1-604-443v2_uhq.jpg" />
                    </IonAvatar>

                    <IonItem lines="none">
                        <IonText className="spanNameCard">Farid Noxus</IonText>
                    </IonItem>
                </IonCardSubtitle>
                <div className="parentItemsTopProfil">
                    <IonText>
                        <IonLabel>1000&nbsp;</IonLabel>
                        <IonLabel>Vues</IonLabel>
                    </IonText>
                    <IonText>
                        <IonLabel>1000&nbsp;</IonLabel>
                        <IonLabel>Favoris</IonLabel>
                    </IonText>
                    <IonText>
                        <IonLabel>1000&nbsp;</IonLabel>
                        <IonLabel>Commentaires</IonLabel>
                    </IonText>
                    <IonText>
                        <IonLabel>1000&nbsp;</IonLabel>
                        <IonLabel>Likes</IonLabel>
                    </IonText>
                </div>

            </section>
        );
    };
}