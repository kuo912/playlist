import React from 'react'
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { TbClick } from "react-icons/tb";
import { TbClover } from "react-icons/tb";
import { TbCopyPlusFilled } from "react-icons/tb";
import { TbHeadphones } from "react-icons/tb";
import { TbHeadphonesFilled } from "react-icons/tb";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { HiOutlineFire } from "react-icons/hi";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
          <a href='/'>
            <em aria-hidden='true'></em>
            <span>KUO's<br />Playlist</span>
          </a>
        </h1>
        <nav className='header__menu'>
          <ul className='menu'>
            <li className='active'>
              <a href='/'><TbClover />Home</a>
            </li>
            <li>
              <a href='/today'><TbClick />오늘의 추천음악</a>
            </li>
            <li>
              <a href='/artist'><PiPersonArmsSpreadFill />추천 아티스트</a>
            </li>
            <li>
              <a href='/playlist'><TbCopyPlusFilled />추천 플레이리스트</a>
            </li>
            <li>
              <a href='/latest'><HiOutlineFire />최신 음악</a>
            </li>
            <li>
              <a href='/musicvideo'><TbBrandYoutubeFilled /> 뮤직비디오</a>
            </li>
            <li>
              <a href='/pop'><TbHeadphones />Pop</a>
            </li>
            <li>
              <a href='/Kpop'><TbHeadphonesFilled />K-pop</a>
            </li>
          </ul>
          <ul className='keyword'>
            <li>
                <a href='/search/playlist'>playlist</a>
            </li>
            <li>
                <a href='/search/pop'>pop</a>
            </li>
            <li>
                <a href='/search/k-pop'>K-pop</a>
            </li>
            <li>
                <a href='/search/hiphop'>Hip-hop</a>
            </li>
            <li>
                <a href='/search/classic'>Classic</a>
            </li>
            <li>
                <a href='/search/band'>Band</a>
            </li>
            <li>
                <a href='/search/rock'>Rock</a>
            </li>
            <li>
                <a href='/search/ost'>Ost</a>
            </li>
            <li>
                <a href='/search/ballade'>Ballade</a>
            </li>
            <li>
                <a href='/search/dance'>Dance</a>
            </li>
            <li>
                <a href='/search/trot'>Trot</a>
            </li>
          </ul>
        </nav>
        <div className='header__sns'>
          <ul>
            <li>
              <a href='*' rel='noopener noreferrer'>
                  <AiFillGithub />
              </a>
            </li>
            <li>
              <a href='*' rel='noopener noreferrer'>
                  <AiFillYoutube />
              </a>
            </li>
            <li>
              <a href='*' rel='noopener noreferrer'>
                  <AiOutlineCodepen />
              </a>
            </li>
            <li>
              <a href='*' rel='noopener noreferrer'>
                  <AiOutlineInstagram />
              </a>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header
