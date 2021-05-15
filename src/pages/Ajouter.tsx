import React from 'react';
import { IonChip, IonText, IonItem, IonInput, IonLabel, IonHeader, IonToolbar, IonTitle, IonIcon, IonButtons, IonButton, IonContent, IonPage, IonImg } from '@ionic/react';
import {Link } from 'react-router-dom';

import './css/ajouter.css';


export default class AddRessource extends React.Component {

    render() {
        return (
            <IonPage color="secondary">
                <IonContent>
                    <IonTitle className="marginSection textCenterTitleAddRessources">Ajouter <IonText color="primary">une Ressource</IonText></IonTitle>
                    <section className="sectionParentAddRessources">
                        <IonItem lines="none" className="textCenterTitleAddRessources">
                            <IonLabel position="floating" color="primary">Titre</IonLabel>
                            <IonInput />
                        </IonItem>

                        <form className="firstFormParentAddRessources">
                            <IonHeader>
                                <IonToolbar>
                                    <IonTitle>Categorie</IonTitle>
                                </IonToolbar>
                            </IonHeader>
                            <div className="enfantFormAddRessourcePositionElements">
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Communication</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Cultures</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Développement Personnel</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Intelligence émotionnelle</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Loisirs</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Spiritualité</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Monde Professionnel</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Parentalité</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Qualité de vie</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Recherche de sens</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Santé physique</IonLabel>
                                </IonChip>
                                <IonChip color="noxus">
                                    <IonLabel color="dark">Santé psychique</IonLabel>
                                </IonChip>
                            </div>
                        </form>

                        <form className="addRessourcesMarginSection firstFormParentAddRessources">
                            <IonHeader>
                                <IonToolbar>
                                    <IonTitle>Type de Ressources</IonTitle>
                                </IonToolbar>
                            </IonHeader>
                            <div className="enfantFormAddRessourcePositionElements">
                                <IonChip outline color="secondary">
                                    <IonLabel color="noxus">Activité / Jeux</IonLabel>
                                </IonChip>
                                <IonChip outline color="secondary">
                                    <IonLabel color="noxus">Carte défi</IonLabel>
                                </IonChip>
                                <IonChip outline color="secondary">
                                    <IonLabel color="noxus">Fiche de Lecture</IonLabel>
                                </IonChip>
                                <IonChip outline color="secondary">
                                    <IonLabel color="noxus">Vidéo</IonLabel>
                                </IonChip>
                                <IonChip outline color="secondary">
                                    <IonLabel color="noxus">Cours au format PDF</IonLabel>
                                </IonChip>
                                <IonChip outline color="secondary">
                                    <IonLabel color="noxus">Exercice / Atelier</IonLabel>
                                </IonChip>
                                <IonChip outline color="secondary">
                                    <IonLabel color="noxus">Jeux en ligne</IonLabel>
                                </IonChip>
                                <IonChip outline color="secondary">
                                    <IonLabel color="noxus">Article</IonLabel>
                                </IonChip>
                            </div>
                        </form>
                        <form className="addRessourcesMarginSection firstFormParentAddRessources">
                            <IonHeader>
                                <IonToolbar>
                                    <IonTitle>Type de Relations</IonTitle>
                                </IonToolbar>
                            </IonHeader>
                            <div className="enfantFormAddRessourcePositionElements">
                                <IonChip color="secondary">
                                    <IonLabel color="dark">Soi</IonLabel>
                                </IonChip>
                                <IonChip color="secondary">
                                    <IonLabel color="dark">Conjoint</IonLabel>
                                </IonChip>
                                <IonChip color="secondary">
                                    <IonLabel color="dark">Famille</IonLabel>
                                </IonChip>
                                <IonChip color="secondary">
                                    <IonLabel color="dark">Amis</IonLabel>
                                </IonChip>
                                <IonChip color="secondary">
                                    <IonLabel color="dark">Professionnel</IonLabel>
                                </IonChip>
                                <IonChip color="secondary">
                                    <IonLabel color="dark">Divers</IonLabel>
                                </IonChip>
                            </div>
                        </form>
                        
                        <div className="buttonValiderAndAnnulerAddRessources">
                            <Link to="/accueil">
                                <IonButton color="dark" className="ion-margin-top" type="submit">Annuler</IonButton>
                            </Link>
                            <Link to="/profil">
                                <IonButton color="secondary" className="ion-margin-top" type="submit">Valider</IonButton>
                            </Link>
                        </div>
                        
                    </section>
                </IonContent>

            </IonPage>
        );
    };
}
