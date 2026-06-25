import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #ea281e;
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
`
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
        }
      }
    }
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    ul {
      margin-top: 96px;
      li {
        font-size: 1.75rem;
        height: 56px;
        line-height: 56px;
        /* Touch has no hover, so reveal the title and drop the arrow
           instead of leaving it shifted off-screen by the motion offset. */
        .link {
          transform: none !important;
          .arrow {
            display: none;
          }
        }
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${props => props.theme.background};
  }
  svg path {
    fill: ${props => props.theme.background};
  }
  @media (max-width: 600px) {
    padding: 24px 0;
    /* stack the email / phone / social row */
    > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }
`

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: #ea281e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }
  @media (max-width: 600px) {
    /* hover-reveal videos add nothing on touch and overlap the menu */
    display: none;
  }
`
