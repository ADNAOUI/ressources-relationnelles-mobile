import React from 'react';
import { IonText, IonItem } from '@ionic/react';

export default class VueTopRessources extends React.Component {
  render() {
    return (
      <section className="categoryMarginSection">
        <form id="vueTopRessourceParentText">
            <IonItem>
                <IonText>Auteur : &nbsp;</IonText>
                <IonText className="colorPink">Aurélien Pitaut</IonText>
            </IonItem>

            <IonItem>
                <IonText>Date de publication : &nbsp;</IonText>
                <IonText className="colorPink">16/05/2021</IonText>
            </IonItem>

            <IonItem>
                <IonText>Types de Ressources : &nbsp;</IonText>
                <IonText color="primary">Défis</IonText>
            </IonItem>

            <IonItem>
                <IonText>Relations : &nbsp;</IonText>
                <IonText color="primary">
                        <li>Amis</li>
                        <li>Familles</li>
                </IonText>
            </IonItem>

            <IonItem>
                <IonText>Catégorie : &nbsp;</IonText>
                <IonText color="primary">Développement Personnel</IonText>
            </IonItem>
                
        </form>
      </section>
    );
  };
};

