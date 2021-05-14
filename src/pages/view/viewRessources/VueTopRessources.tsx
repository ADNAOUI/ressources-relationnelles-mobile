import React from 'react';
import { IonText, IonItem } from '@ionic/react';

export default class VueTopRessources extends React.Component {
  render() {
    return (
      <section className="categoryMarginSection">
        <form id="vueTopRessourceParentText">
            <IonItem lines="none">
                <IonText>Auteur : &nbsp;</IonText>
                <IonText className="colorPink">Aurélien Pitaut</IonText>
            </IonItem>

            <IonItem lines="none">
                <IonText>Date de publication : &nbsp;</IonText>
                <IonText className="colorPink">16/05/2021</IonText>
            </IonItem>

            <IonItem lines="none">
                <IonText>Types de Ressources : &nbsp;</IonText>
                <IonText color="primary">Défis</IonText>
            </IonItem>

            <IonItem lines="none">
                <IonText>Relations : &nbsp;</IonText>
                <IonText color="primary">
                        <li>Amis</li>
                        <li>Familles</li>
                </IonText>
            </IonItem>

            <IonItem lines="none">
                <IonText>Catégorie : &nbsp;</IonText>
                <IonText color="primary">Développement Personnel</IonText>
            </IonItem>
                
        </form>
      </section>
    );
  };
};

