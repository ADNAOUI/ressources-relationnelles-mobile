import React from 'react';
import { Link } from 'react-router-dom';
import { IonText } from '@ionic/react';

/*CSS*/
import '../../pages/css/profil.css'

export default class RouteProfil extends React.Component {

    render() {
        return (
            <section className="categorySectionprofil">
                <nav className="navBarProfil">
                    <ul className="positionParentListNavigationProfil">
                        <Link to="/profil">
                            <li>
                            <IonText>Home</IonText>
                            </li>
                        </Link>
                        <Link to="/view/gallerieProfil">
                            <li> 
                            <IonText>Gallerie</IonText>
                            </li>
                        </Link>
                        <Link to="/view/apercuRessourceProfil">
                            <li>
                            <IonText>Ressources</IonText>
                            </li>
                        </Link>
                        <Link to="/view/apercuRessourceFavProfil">
                            <li>
                            <IonText>Favori</IonText>
                            </li>
                        </Link>
                        <Link to="/view/aboutProfil">
                            <li>
                            <IonText>A Propos</IonText>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </section>
        );
    };
}