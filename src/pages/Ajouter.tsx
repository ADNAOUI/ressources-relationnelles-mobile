import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonModal, IonButton, IonContent } from '@ionic/react';
import ModalAccount from '../components/ModalAccount';



export const Ajouter: React.FC = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <IonPage>
    <IonContent>
        <section className="categoryMarginSection">
      <IonModal isOpen={showModal}>
        <IonButton onClick={() => setShowModal(false)}>
            Close Modal
        </IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>
            Show Modal
      </IonButton>
      </section>
   
    </IonContent>
    </IonPage>

  );

};




export default Ajouter;
