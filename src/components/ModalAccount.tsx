import React, {RefObject} from 'react';
import { IonText, IonItem, IonInput, IonLabel, IonHeader, IonToolbar, IonTitle, IonIcon, IonButtons, IonButton, IonContent, IonPage } from '@ionic/react';

/*CSS*/
import './css/modalAccount.css'


class ModalAccount extends React.Component {
    state = {
        indexTabsConnect : 1 
    };
   

    headerRef: RefObject<HTMLIonHeaderElement> = React.createRef();

    async closeModal() {
        if (!this.headerRef || !this.headerRef.current) {
        return;
    }

    await (this.headerRef.current.closest('ion-modal') as HTMLIonModalElement).dismiss();}

    

    render() {
        return (
            <IonPage color="secondary">    
                <section ref={this.headerRef} >
                    <IonButtons className="positionCloseCrossModalInscription" slot="end">
                        <IonButton onClick={() => this.closeModal()}>
                            <IonIcon color="dark" name="close" slot="icon-only"></IonIcon>
                        </IonButton>
                    </IonButtons>
                </section>

                <IonContent className="ion-padding">
                    <p className="InscriptionModalText">S'inscrire à Ressources Relationnelles</p>

                    <ul className="positionParentListNavigationModal">
                        <li>
                            <IonText onClick={() => this.setState({indexTabsConnect : 1 })}> S'inscrire</IonText>
                        </li>
                        <li>
                            <IonText onClick={() => this.setState({indexTabsConnect : 2 })}> Se Connecter</IonText>
                        </li>
                    </ul>
                    <form className={ this.state.indexTabsConnect === 1 ? "inscriptionModalForm" : "inscriptionModalForm invisible"}>
                        <IonItem>
                            <IonLabel position="floating">Pseudonyme</IonLabel>
                            <IonInput />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Nom</IonLabel>
                            <IonInput />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Prénom</IonLabel>
                            <IonInput />
                        </IonItem>
         
                        <IonItem>
                            <IonLabel position="floating">Date de naissance</IonLabel>
                            <IonInput type="date" />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Adresse mail</IonLabel>
                            <IonInput />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Mot de passe</IonLabel>
                            <IonInput type="password" />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Confirmer le mot de passe</IonLabel>
                            <IonInput type="password" />
                        </IonItem>

                        <IonText className="textPolitiqueConfidantial">
                             <p>
                                En cliquant sur S’incrire, vous reconnaissez avoir lu et approuvé les  
                                <IonText color="primary"> Conditions d’utilisations</IonText>  et 
                                <IonText color="primary"> la Politique de confidentialité</IonText>.
                            </p>
                        </IonText>    
                           
                        <IonButton color="secondary" className="ion-margin-top" type="submit" expand="block">S'inscrire</IonButton>
                    </form>

                    <form className={ this.state.indexTabsConnect === 2 ? "connexionModalForm" : "connexionModalForm invisible"}>
                        <IonItem>
                            <IonLabel position="floating">Identifiant</IonLabel>
                            <IonInput />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Mot de passe</IonLabel>
                            <IonInput type="password" />
                        </IonItem>

                        <IonText className="textPasswordForgotten">
                             <p>
                                Mot de passe oublié ?
                            </p>
                        </IonText>    
                           
                        <IonButton color="primary" className="ion-margin-top" type="submit" expand="block"><span className="textButtonConnect" >Se Connecter</span></IonButton>
                    </form>
                </IonContent>

                </IonContent>
            </IonPage>   
      );
    }; 
}

export default ModalAccount;
