import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled(motion.div)`
  height: 300px;
  margin-top: 296px;
  @media (max-width: 600px) {
    height: auto;
    margin-top: 120px;
    padding-bottom: 56px;
    /* stack the contact columns + social row (Container > Flex) */
    > div > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
    }
  }
`

export const FooterContent = styled.div`
  color: #ea281e;
  font-size: 22px;
  font-weight: 600;
  line-height: 8px;
  flex: 1;
  ${props =>
    props.wider &&
    css`
      flex: 2;
    `}
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 1.4;
  }
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
