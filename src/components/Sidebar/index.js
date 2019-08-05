import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="/">Navigation</a>
        </li>
        <li>
          <a href="/">Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>your library</span>
        </li>
        <li>
          <a href="/">Your Daily Mix</a>
        </li>
        <li>
          <a href="/">Recently Played</a>
        </li>
        <li>
          <a href="/">Musics</a>
        </li>
        <li>
          <a href="/">Albums</a>
        </li>
        <li>
          <a href="/">Artists</a>
        </li>
        <li>
          <a href="/">Stations</a>
        </li>
        <li>
          <a href="/">ALocal Files</a>
        </li>
        <li>
          <a href="/">Videos</a>
        </li>
        <li>
          <a href="/">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>playlists</span>
        </li>
        <li>
          <a href="/">Best of Jazz</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Ading playlist" />
      New playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
