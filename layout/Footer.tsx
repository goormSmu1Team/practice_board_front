import React from "react"
import styled from "styled-components"
import { useRouter } from "next/router"

import WalkLogo from "../assets/footer/WalkLogo.svg"
import WalkLogoActive from "../assets/footer/WalkLogoActive.svg"
import RoutineLogo from "../assets/footer/RoutineLogo.svg"
import RoutineLogoActive from "../assets/footer/RoutineLogoActive.svg"
import RecordLogo from "../assets/footer/RecordLogo.svg"
import RecordLogoActive from "../assets/footer/RecordLogoActive.svg"
import CommunityLogo from "../assets/footer/CommunityLogo.svg"
import CommunityLogoActive from "../assets/footer/CommunityLogoActive.svg"
import MyPage from "../assets/footer/MyPage.svg"
import MyPageActive from "../assets/footer/MyPageActive.svg"

const Footer = () => {
  const router = useRouter()

  const isActive = (path: string) => router.pathname.startsWith(path)

  return (
    <FooterContainer>
      <FooterItem onClick={() => router.push("/walk")}>
        {isActive("/walk") ? <WalkLogoActive /> : <WalkLogo />}
        <FooterItemTitle active={isActive("/walk")}>산책</FooterItemTitle>
      </FooterItem>
      <FooterItem onClick={() => router.push("/routine")}>
        {isActive("/routine") ? <RoutineLogoActive /> : <RoutineLogo />}
        <FooterItemTitle active={isActive("/routine")}>루틴</FooterItemTitle>
      </FooterItem>
      <FooterItem onClick={() => router.push("/record")}>
        {isActive("/record") ? <RecordLogoActive /> : <RecordLogo />}
        <FooterItemTitle active={isActive("/record")}>기록</FooterItemTitle>
      </FooterItem>
      <FooterItem onClick={() => router.push("/community")}>
        {isActive("/community") ? <CommunityLogoActive /> : <CommunityLogo />}
        <FooterItemTitle active={isActive("/community")}>
          커뮤니티
        </FooterItemTitle>
      </FooterItem>
      <FooterItem onClick={() => router.push("/mypage")}>
        {isActive("/mypage") ? <MyPageActive /> : <MyPage />}
        <FooterItemTitle active={isActive("/mypage")}>활동</FooterItemTitle>
      </FooterItem>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  width: 100%;
`

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const FooterItemTitle = styled.div<{ active: boolean }>`
  font-size: 12px;
  color: ${({ active }) => (active ? "#000" : "#888")};
  margin-top: 5px;
`
