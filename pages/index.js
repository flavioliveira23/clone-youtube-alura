import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists}>
          Conteúdo
        </TimeLine>
      </div>
    </>
  );
}


export default HomePage;


const SyledHeader = styled.div`
  .perfil-photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .banner-photo {

  }


  .banner-photo {

  }

  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ banner }) => banner});
  height: 230px;
`;

const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ banner }) => banner});
  /* ou background-image: url(${config.banner}); */
  height: 230px;
`;

function Header() {
  return (
    <SyledHeader>
      <StyledBanner banner={config.banner} />
      <StyledBanner banner={config.banner} />
      <section className="user-info">
        <img className="perfil-photo" className="perfil-photo" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </SyledHeader>
  );
}

function TimeLine(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
