# 🤖 [Nowiki - 노인을 위한 키오스크는 있다](https://www.example.com)

## 💡 서비스 기획 의도
- 현대 사회의 키오스크는 기기 친숙도가 높은 사람들에게는 편리하지만, 디지털 소외 계층에게는 큰 장벽이 될 수 있습니다.
- 다양한 곳으로 키오스크의 범위가 확대되어감에 따라 키오스크 이용이 어려운 디지털 취약 계층이 생기는 문제에 주목했습니다.
- 단순히 키오스크의 복잡도를 완화하는 것이 아닌, 키오스크 사용법에 익숙해지도록 도와주는 기능이 필요하지 않을까 생각했습니다.

<b>⭐이 프로젝트는 맥도날드 키오스크를 모델로 삼아 개선점을 찾고, 모두가 간편하게 이용할 수 있는 키오스크를 목표로 기획되었습니다.</b>

## 👨‍👩‍👧‍👦 팀원 구성
<table style="text-align : center;">
<img src="https://hackmd.io/_uploads/B11BU8NVJx.png"  height="125"/></td>
 <thead>
  <tr>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td align="center"><span>FE</span><br/><a href="https://github.com/HA-SEUNG-JEONG">제이크</a></td>   <td align="center"><span>FE</span><br/><a href="https://github.com/tlsdbtn0507">드록바</a></td>
    <td align="center"><span>FE</span><br/><a href="https://github.com/ktoo23">땃쥐</a></td>
          <td align="center"><span>FE</span><br/><a href="https://github.com/kkoomin">멩미</a></td>
      <td align="center"><span>FE</span><br/><a href="https://github.com/jong6598">올리버</a></td>
  </tr>
</table>

## 🔮 주요 기능 소개

### 주문 페이지 접근 분리
- 일반 주문 / 키오스크 사용이 미숙한 사람을 위한 주문

### 🍔 메뉴 카테고리 시스템
- 메인 카테고리(버거, 치킨, 사이드, 음료)와 서브 카테고리로 체계적 분류
- 맛 기반 필터링(달달, 짭짤, 매콤)으로 개인 취향에 맞는 메뉴 선택 지원
- 이미지와 텍스트를 병행해 직관적인 메뉴 인식 지원

### 📋 메뉴 상세 정보
- 재료 정보, 알레르기 정보, 영양 정보를 한눈에 볼 수 있는 레이아웃
- 이미지 기반 햄버거 구성품 시각화
- 큰 글씨와 명확한 색상 대비로 가독성 향상
  
### 💬 가이드 메시지 시스템
- 사용자의 단계별 안내를 위한 실시간 가이드 메시지
- 생소한 용어나 기능에 대한 친절한 설명 제공
- Zustand를 활용한 효율적인 상태 관리

### 🎙️ 음성을 통한 메뉴 검색 
- 시각적 메뉴뿐 아니라 음성 인식으로 메뉴를 찾을 수 있는 검색 기능
  
- 기타 키오스크 기본 기능
- 장바구니 기능

## 💻 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)


## 🧪 테스트
이 프로젝트는 BDD(Behavior-Driven Development) 접근 방식으로 테스트되었습니다

- 사용자 행동 중심의 테스트 케이스
- 컴포넌트 단위 테스트 및 통합 테스트

## 📄 커밋 컨벤션

```
feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 수정
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor : 코드 리펙토링
test : 테스트 코드, 리펙토링 테스트 코드 추가
chore : 빌드 업무 수정, 패키지 매니저 수정
add: asset 추가
delete: 파일 삭제
```

## 🗣️프로젝트 후기

- 올리버: 디자이너 분이 말도 없이 탈주하셨지만...그 덕에 위기감을 느끼고 더 많은걸 시도할수 있었던거 같습니다. 회사가 바빴어서 힘들었지만, 팀원들 덕에 잘 마무리 했습니다!
- 제이크 : 개발 전날 디자이너분께서 가버리셨지만, 럭키비키의 마인드로 팀원들끼리 같이 으쌰으쌰해서 원하는 바를 이뤘던 것 같습니다. 이후에도 팀원들끼리 디자인 틀도 다시 잡고 코드 다듬어보는 시간도 가지고 싶네요.
- 드록바 : 힘든 역경이 있었지만 그래도 다같이 으쌰으쌰 열심히 노력했고 그만큼 좋은 결과를 낸 것 같습니다. 다들 끝까지 열심히 잘해준 우리 팀원들이 너무 자랑스러워요!
- 땃쥐: 팀원들과 디지털 소외 계층이 겪고 있는 문제를 함께 논의하고 개선하기까지 너무 유익한 경험이었습니다. 팀원들의 열정으로 여기까지 온 것 같아요 감사해요! 
- 멩미: 드디어 마지막 날이네요! 쉽지 않은 상황이었지만 다들 정말 수고하셨습니다. 나름의 새로운 경험이라고도 할 수 있겠네요. 우리 팀원들 한 주 동안 감사했습니다 :D

