import React from 'react';
import { IonText, IonContent, IonPage } from '@ionic/react';

/*CSS*/


export default class TopProfil extends React.Component {
   
    render() {
        return (
            <IonPage color="secondary">                       
                <IonContent className="ion-padding">
                    <section>
                        <p className="InscriptionModalText">S'inscrire à Ressources Relationnelles</p>

                        <ul className="positionParentListNavigationModal">
                            <li>
                                <IonText> S'inscrire</IonText>
                            </li>
                            <li>
                                <IonText> Se Connecter</IonText>
                            </li>
                        </ul>   
                    </section>
                </IonContent>
            </IonPage>   
        );
    }; 
}