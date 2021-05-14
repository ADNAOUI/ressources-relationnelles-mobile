import React, {RefObject} from 'react';
import { IonText, IonItem, IonInput, IonLabel, IonHeader, IonToolbar, IonTitle, IonIcon, IonButtons, IonButton, IonContent, IonPage, IonImg } from '@ionic/react';

/*CSS*/
import './css/modalAccount.css'
import Logo from'../img/RessourceRelationnelle_LogoFondFonce.png'


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
        console.log(this.state.indexTabsConnect);
        return (
            
            <IonPage color="secondary">    
                <section ref={this.headerRef} >
                    <IonButtons className="positionCloseCrossModalInscription" slot="end">
                        <IonButton onClick={() => this.closeModal()}>
                            <IonIcon color="dark" name="close" slot="icon-only"></IonIcon>
                        </IonButton>
                    </IonButtons>
                </section>

                <IonContent className="ion-padding relativeParentPosition">
                    <p className={ this.state.indexTabsConnect === 1 ? "inscriptionModalText" : "inscriptionModalText invisible"}>S'inscrire à Ressources Relationnelles</p>
                    <p className={ this.state.indexTabsConnect === 2 ? "inscriptionModalText" : "inscriptionModalText invisible"}>Se connecter à Ressources Relationnelles</p>
                    <p className={ this.state.indexTabsConnect === 3 ? "inscriptionModalText" : "inscriptionModalText invisible"}>Retrouvez votre compte Ressources Relationnelles</p>
                    <p className={ this.state.indexTabsConnect === 4 ? "inscriptionModalText" : "inscriptionModalText invisible"}>Bienvenue sur Ressources Relationnelles, John Doe</p>
                    
                    
                    
                        <section  className={ this.state.indexTabsConnect === 1  ? "positionParentListNavigationModal" : "positionParentListNavigationModal invisible"}>                           
                                <IonText onClick={() => this.setState({indexTabsConnect : 1 })}> S'inscrire</IonText>                     
                                <IonText onClick={() => this.setState({indexTabsConnect : 2 })}> Se Connecter</IonText>   
                        </section>
                        
                        <section  className={ this.state.indexTabsConnect === 2  ? "positionParentListNavigationModal" : "positionParentListNavigationModal invisible"}>                           
                                <IonText onClick={() => this.setState({indexTabsConnect : 1 })}> S'inscrire</IonText>                     
                                <IonText onClick={() => this.setState({indexTabsConnect : 2 })}> Se Connecter</IonText>   
                        </section>
                    
                   
                        <IonText className={ this.state.indexTabsConnect === 3 ? "tellUsMoreAboutAccount" : "tellUsMoreAboutAccount invisible"} > Dites nous en plus sur votre compte</IonText>
                        <IonText className={ this.state.indexTabsConnect === 4 ? "tellUsMoreAboutAccount" : "tellUsMoreAboutAccount invisible"} > Découvrons ce que vous aimez</IonText>
                   
                    
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

                        <IonText className="textPasswordForgotten" onClick={() => this.setState({indexTabsConnect : 3 })}>
                             <p>
                                Mot de passe oublié ?
                            </p>
                        </IonText>    
                           
                        <IonButton color="primary" className="ion-margin-top" type="submit" expand="block">Se Connecter</IonButton>
                    </form>

                    <form className={ this.state.indexTabsConnect === 3 ? "passwordForgottenModalForm" : "passwordForgottenModalForm invisible"}>

                        <IonItem>
                            <IonLabel position="floating"> Saissisez votre adresse e-mail ou votre numéro de teléphone </IonLabel>
                            <IonInput />
                        </IonItem>

                        <IonText className="textProblemWithEmail" onClick={() => this.setState({indexTabsConnect : 4 })}>
                             <p>
                                Vous rencontrez des problèmes avec votre adresse e-mail  ou votre téléphone ?
                            </p>
                        </IonText> 

                        <IonButton color="primary" className="ion-margin-top" type="submit" expand="block">Envoyer le lien </IonButton>
                        <IonButton color="secondary" className="ion-margin-top ButtonBackModalPasswordForgotten" type="submit" expand="block">Retour</IonButton>
                    </form>

                    <form className={ this.state.indexTabsConnect === 4 ? "passwordForgottenModalForm" : "passwordForgottenModalForm invisible"}>
                        <div className="childForm">
                        <IonImg src={Logo} className="imgModalWelcome" />

                        <IonButton color="primary" className="ion-margin-top" type="submit" expand="block">Choisir un type de relation</IonButton>
                        </div>
                        
                    </form>


                </IonContent>

               
            </IonPage>   
      );
    }; 
}

export default ModalAccount;
