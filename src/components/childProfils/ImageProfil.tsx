import React from 'react';
import { IonText, IonTitle, IonImg } from '@ionic/react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

/*CSS*/
import '../../pages/css/profil.css'

export default class ImageProfil extends React.Component {

  render() {
    console.log(this.state)
    return (
      <section className="sectionEnfantProfil">
        <IonText>
          <IonTitle>Images Récentes</IonTitle>
        </IonText>

        <section className="backgroundProfilDark">
          <div className="md-layout">
            <mobiscroll.FormGroup>
              <mobiscroll.ScrollView
                theme="ios"
                themeVariant="light"
                layout="fixed"
                itemWidth={80}
                className="md-fixed"
              >
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6b2d37773c3621e1/5db0600d347d1c6baa57be55/RiotX_ChampionList_taric.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt30ddbbdc0549078a/5db0600da6470d6ab91ce5b8/RiotX_ChampionList_teemo.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8350eda62a9ed56c/5db060150b39e86c2f83dc2b/RiotX_ChampionList_udyr.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9eaabc908956c8b0/5db060146af83b6d7032c90a/RiotX_ChampionList_vayne.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt935dd149b2617ac8/5db05fbcdc674266df3d5d36/RiotX_ChampionList_fiora.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf6c70d9272a5a2a/5db05fcfe9d7526ab429e532/RiotX_ChampionList_jhin.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6e54b3de49b7bbf3/5db06015df78486c826dcd1e/RiotX_ChampionList_viktor.jpg?quality=90&width=250" />
              </mobiscroll.ScrollView>
            </mobiscroll.FormGroup>
          </div>

          <div className="md-layout">
            <mobiscroll.FormGroup>
              <mobiscroll.ScrollView
                theme="ios"
                themeVariant="light"
                layout="fixed"
                itemWidth={80}
                className="md-fixed"
              >
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltda2b568b0c3e5847/5db06014e9effa6ba5295fb9/RiotX_ChampionList_veigar.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3bd79abf330fc807/5db06014dc674266df3d5d56/RiotX_ChampionList_vi.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt162b78ba3ece1d4f/5db060157d28b76cfe43981b/RiotX_ChampionList_urgot.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b217144ed3a7faa/5db08d643a326d6df6c0e907/RiotX_ChampionList_tryndamere.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1a64e469280b8b9f/5db060030b39e86c2f83dc25/RiotX_ChampionList_swain.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf6c70d9272a5a2a/5db05fcfe9d7526ab429e532/RiotX_ChampionList_jhin.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6e54b3de49b7bbf3/5db06015df78486c826dcd1e/RiotX_ChampionList_viktor.jpg?quality=90&width=250" />
              </mobiscroll.ScrollView>
            </mobiscroll.FormGroup>
          </div>

          <div className="md-layout">
            <mobiscroll.FormGroup>
              <mobiscroll.ScrollView
                theme="ios"
                themeVariant="light"
                layout="fixed"
                itemWidth={80}
                className="md-fixed"
              >
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt39ab5027f6fa1b81/5db0601589fb926b491ed82f/RiotX_ChampionList_vladimir.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0e3f847946232167/5db05fa889fb926b491ed7ff/RiotX_ChampionList_azir.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt935dd149b2617ac8/5db05fbcdc674266df3d5d36/RiotX_ChampionList_fiora.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf6c70d9272a5a2a/5db05fcfe9d7526ab429e532/RiotX_ChampionList_jhin.jpg?quality=90&width=250" />
                <IonImg src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6e54b3de49b7bbf3/5db06015df78486c826dcd1e/RiotX_ChampionList_viktor.jpg?quality=90&width=250" />
              </mobiscroll.ScrollView>
            </mobiscroll.FormGroup>
          </div>
        </section>
      </section>
    );
  };
}