import React from 'react'
import Main from '../assets/components/section/Main'
import Today from '../assets/components/contetns/Today'
import Artist from '../assets/components/contetns/Artist'
import Playlist from '../assets/components/contetns/Playlist'
import Latest from '../assets/components/contetns/Latest'
import Musicvideo from '../assets/components/contetns/Musicvideo'
import Pop from '../assets/components/contetns/Pop'
import Kpop from '../assets/components/contetns/Kpop'

const Home = () => {
  return (
    <Main 
      title="Home"
      description="정다영의 플레이리스트에 오신 것을 환영합니다."
    >
      <Today />
      <Artist />
      <Playlist />
      <Latest />
      <Musicvideo />
      <Pop />
      <Kpop />
    </Main>
  )
}

export default Home
