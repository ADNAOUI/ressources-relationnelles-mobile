import React, { useState } from 'react';
import {Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, IonHeader, IonToolbar, IonButton, IonSearchbar, IonThumbnail, IonImg, IonModal
} from '@ionic/react';
import { homeOutline, personCircleOutline, flame, addCircleOutline, compass} from 'ionicons/icons';

//Vue
import Home from './pages/Home';
import Tendances from './pages/Tendances';
import Bibliotheque from './pages/Bibliotheque';
import Ajouter from './pages/Ajouter';
import Explorer from './pages/Explorer';

import Amis from './pages/view/Amis';
import Conjoints from './pages/view/Conjoints';
import Familles from './pages/view/Familles';
import Professionnels from './pages/view/Professionnels';
import Soi from './pages/view/Soi';

import Aboutamis from './components/childViewCategory/amis/About';
import Articlesamis from './components/childViewCategory/amis/Articles';
import Jeuxamis from './components/childViewCategory/amis/Jeux';
import Videosamis from './components/childViewCategory/amis/Videos';
import VueEnsembleamis from './components/childViewCategory/amis/VueEnsemble';

import Aboutconjoints from './components/childViewCategory/conjoints/About';
import Articlesconjoints from './components/childViewCategory/conjoints/Articles';
import Jeuxconjoints from './components/childViewCategory/conjoints/Jeux';
import Videosconjoints from './components/childViewCategory/conjoints/Videos';
import VueEnsembleconjoints from './components/childViewCategory/conjoints/VueEnsemble';

import Aboutfamilles from './components/childViewCategory/familles/About';
import Articlesfamilles from './components/childViewCategory/familles/Articles';
import Jeuxfamilles from './components/childViewCategory/familles/Jeux';
import Videosfamilles from './components/childViewCategory/familles/Videos';
import VueEnsemblefamilles from './components/childViewCategory/familles/VueEnsemble';

import Aboutprofessionnels from './components/childViewCategory/professionnels/About';
import Articlesprofessionnels from './components/childViewCategory/professionnels/Articles';
import Jeuxprofessionnels from './components/childViewCategory/professionnels/Jeux';
import Videosprofessionnels from './components/childViewCategory/professionnels/Videos';
import VueEnsembleprofessionnels from './components/childViewCategory/professionnels/VueEnsemble';

import Aboutsoi from './components/childViewCategory/soi/About';
import Articlessoi from './components/childViewCategory/soi/Articles';
import Jeuxsoi from './components/childViewCategory/soi/Jeux';
import Videossoi from './components/childViewCategory/soi/Videos';
import VueEnsemblesoi from './components/childViewCategory/soi/VueEnsemble';

/* CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './pages/css/variables.css';

/*IMAGES*/
import Logo from './img/Logo_REsources_RElationnellesResponsive.png';
import ModalAccount from './components/ModalAccount';


export const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
  async function closeModal() {
    await setShowModal(false);
  }

  return (
    <IonApp>

      <IonHeader>
          <IonToolbar className="tailleToolBarApp">
            <IonThumbnail slot="start">
              <IonImg className="imageTailleApp" src={Logo}/>

              <IonIcon onClick={() => setShowModal(true)} color="primary" className="positionIconAccountTopBar" icon={personCircleOutline}>
                <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                  <ModalAccount></ModalAccount>
                </IonModal>
              </IonIcon>

            </IonThumbnail>
            <IonSearchbar className="placementSearchBar"></IonSearchbar>
          </IonToolbar>
        </IonHeader>

      <IonReactRouter>
        <IonTabs>

          <IonRouterOutlet>
            <Route path="/" render={() => <Redirect to="/accueil" />} exact={true} />
            <Route path="/accueil" component={Home} />
            <Route path="/explore" component={Explorer} />
            <Route path="/ajouter" component={Ajouter} />
            <Route path="/tendances" component={Tendances} />
            <Route path="/monCompte" component={Bibliotheque} />

            {/* Route pour la Page Explorer */}
            <Route path="/category/amis" component={Amis} />
            <Route path="/category/conjoints" component={Conjoints} />
            <Route path="/category/familles" component={Familles} />
            <Route path="/category/professionnels" component={Professionnels} />
            <Route path="/category/soi" component={Soi} />


            {/* Route pour la Page Explorer Child Amis */}
            <Route path="/category/amis/vueEnsemble" component={VueEnsembleamis} />
            <Route path="/category/amis/articles" component={Articlesamis} />
            <Route path="/category/amis/jeux" component={Jeuxamis} />
            <Route path="/category/amis/videos" component={Videosamis} />
            <Route path="/category/amis/about" component={Aboutamis} />

            {/* Route pour la Page Explorer Child Conjoints */}
            <Route path="/category/conjoints/vueEnsemble" component={VueEnsembleconjoints} />
            <Route path="/category/conjoints/articles" component={Articlesconjoints} />
            <Route path="/category/conjoints/jeux" component={Jeuxconjoints} />
            <Route path="/category/conjoints/videos" component={Videosconjoints} />
            <Route path="/category/conjoints/about" component={Aboutconjoints} />

            {/* Route pour la Page Explorer Child Familles */}
            <Route path="/category/familles/vueEnsemble" component={VueEnsemblefamilles} />
            <Route path="/category/familles/articles" component={Articlesfamilles} />
            <Route path="/category/familles/jeux" component={Jeuxfamilles} />
            <Route path="/category/familles/videos" component={Videosfamilles} />
            <Route path="/category/familles/about" component={Aboutfamilles} />          

            {/* Route pour la Page Explorer Child Professionnels */}
            <Route path="/category/professionnels/vueEnsemble" component={VueEnsembleprofessionnels} />
            <Route path="/category/professionnels/articles" component={Articlesprofessionnels} />
            <Route path="/category/professionnels/jeux" component={Jeuxprofessionnels} />
            <Route path="/category/professionnels/videos" component={Videosprofessionnels} />
            <Route path="/category/professionnels/about" component={Aboutprofessionnels} />

            {/* Route pour la Page Explorer Child Soi */}
            <Route path="/category/soi/vueEnsemble" component={VueEnsemblesoi} />
            <Route path="/category/soi/articles" component={Articlessoi} />
            <Route path="/category/soi/jeux" component={Jeuxsoi} />
            <Route path="/category/soi/videos" component={Videossoi} />
            <Route path="/category/soi/about" component={Aboutsoi} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="accueil" href="/accueil">
              <IonIcon icon={homeOutline} />
              <IonLabel>Accueil</IonLabel>
            </IonTabButton>

            <IonTabButton tab="explore" href="/explore">
              <IonIcon icon={compass} />
              <IonLabel>Explore</IonLabel>
            </IonTabButton>

            <IonTabButton tab="ajouter" href="/ajouter">
              <IonIcon className="sizeButtonAddRessources" icon={addCircleOutline} />
              <IonLabel></IonLabel>
            </IonTabButton>

            <IonTabButton tab="tendances" href="/tendances">
              <IonIcon icon={flame} />
              <IonLabel>Tendances</IonLabel>
            </IonTabButton>

            <IonTabButton tab="monCompte" href="/monCompte">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Mon Compte</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
