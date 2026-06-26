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
  @media (max-width: 600px) {
    /* Flow the nav as a scrollable column so it adapts to any height
       instead of relying on fixed absolute offsets. */
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    > div {
      display: flex;
      flex-direction: column;
      height: auto;
      min-height: 100%;
      padding-top: 24px;
      padding-bottom: 24px;
      box-sizing: border-box;
    }
  }
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
  @media (max-width: 600px) {
    top: auto;
    order: 0;
    /* the inner Flex uses noHeight (height: 0); let it size to content */
    > div {
      height: auto;
    }
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
      transition: transform 0.3s ease;
      /* cross the two bars into an 'X' */
      &:first-child {
        transform: translateY(8px) rotate(45deg);
      }
      &:last-child {
        transform: translateY(-8px) rotate(-45deg);
      }
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
        transition: color 0.3s ease;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
          transition: fill 0.3s ease;
        }
      }
      /* On hover the background video plays; switch to white so the
         title and arrow stay legible against dark frames. */
      &:hover {
        .link {
          color: #fff;
        }
        svg path {
          fill: #fff;
        }
      }
    }
  }
  @media (max-width: 600px) {
    height: auto;
    order: 1;
    align-items: flex-start;
    ul {
      margin-top: 32px;
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
        /* No hover on touch — the tapped (or default first) row stays
           white to show which clip is playing. */
        &.active .link {
          color: #fff;
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
    position: static;
    order: 3;
    margin-top: auto;
    padding: 24px 0 0;
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
  /* Pin the panel from 25% to the right edge (right: 0) rather than
     left: 25% + width: 100%, which pushed the right edge to 125% of the
     viewport and left a gap (page background) at the real right edge on
     ultrawide screens. overflow: hidden keeps the video clipped to the panel. */
  left: 25%;
  right: 0;
  z-index: -1;
  height: 100%;
  overflow: hidden;
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
    top: 0;
    left: 0;
    /* The panel is 75vw wide (25% → 100%). Size the video to that width so it
       fills the panel on ultrawide instead of its narrower intrinsic size.
       It's a child of the collapsing curtain, so use a viewport unit (not %)
       to keep its width independent of the reveal's width animation. */
    width: 75vw;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 600px) {
    /* No hover on touch, so instead of the curtain-reveal we flow the
       looping video into the column between the menu and footer and let
       it autoplay. In-flow + fixed height so it adapts to any viewport. */
    position: relative;
    order: 2;
    display: block;
    top: auto;
    bottom: auto;
    left: 0;
    right: 0;
    width: 100%;
    height: 240px;
    margin: 32px 0;
    flex: 0 0 auto;
    .reveal {
      /* The video is a child of the curtain, so collapsing the curtain's
         width collapses the video too. Instead keep it full-width but
         transparent so the video behind always shows (and overrides
         framer's width animation on tap). */
      width: 100% !important;
      background: transparent !important;
    }
    .video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`
