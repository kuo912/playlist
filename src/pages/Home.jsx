import React from 'react'
import Main from '../assets/components/section/Main'
import Today from '../assets/components/contents/Today'
import Artist from '../assets/components/contents/Artist'
import Playlist from '../assets/components/contents/Playlist'
import Latest from '../assets/components/contents/Latest'
import Musicvideo from '../assets/components/contents/Musicvideo'
import Pop from '../assets/components/contents/Pop'
import Kpop from '../assets/components/contents/Kpop'

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
