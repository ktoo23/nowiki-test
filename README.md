# 🤖 [Nowiki - 노인을 위한 키오스크는 있다](https://www.example.com)

## 💡 서비스 기획 의도
- 현대 사회의 키오스크는 기기 친숙도가 높은 사람들에게는 편리하지만, 디지털 소외 계층에게는 큰 장벽이 될 수 있습니다.
- 다양한 곳으로 키오스크의 범위가 확대되어감에 따라 키오스크 이용이 어려운 디지털 취약 계층이 생기는 문제에 주목했습니다.
- 단순히 키오스크의 복잡도를 완화하는 것이 아닌, 키오스크 사용법에 익숙해지도록 도와주는 기능이 필요하지 않을까 생각했습니다.

<b>⭐이 프로젝트는 맥도날드 키오스크를 모델로 삼아 개선점을 찾고, 모두가 간편하게 이용할 수 있는 키오스크를 목표로 기획되었습니다.</b>

## 👨‍👩‍👧‍👦 팀원 구성

## 🔮 주요 기능 소개

- 주문 페이지 접근 분리: 일반 주문 / 키오스크 사용이 미숙한 사람을 위한 주문
- 각 페이지마다 기능 설명을 도와주는 말풍선과 길잡이 캐릭터 위키 제공
- 시각적 메뉴뿐 아니라 음성 인식으로 메뉴를 찾을 수 있는 검색 기능
- 기타 키오스크 기본 기능

## 페이지 별 기능 소개
<h3>[ 홈 페이지 ]</h3>
<ul>
  <li>키오스크가 처음이면- 버튼을 클릭하면 사용법을 도와주는 말풍선을 제공합니다.</li>
</ul>
<table>
  <tr>
    <td>홈 페이지</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/d396beba-d0c9-4b4b-bd99-bf586ed78bdf" width="400" height="400"/></td>
  </tr>
</table>
<br />

<h3>[ 음성 인식 화면 ]</h3>
<ul>
  <li>메뉴 리스트에서 음성으로 주문버튼을 클릭 시 나오는 화면입니다.</li>
  <li>사용자가 음성 이미지를 클릭하면 음성 인식이 시작됩니다. </li>
  <li>사용자가 메뉴를 말했을 때,</li>
    - 메뉴가 존재한다면 해당 메뉴들을 보여줍니다.<br/>
    - 만약 메뉴에 없다면 추천 메뉴 리스트를 대신 보여줍니다.
  <li>메뉴들은 복수 선택이 가능합니다.</li>
  <li>장바구니 넣기 버튼을 클릭하면 고른 메뉴들을 장바구니에 넣을 수 있습니다. - 미기능 구현</li>
  <li>바로 결제하기 버튼을 클릭하면 주문 내역 확인 페이지로 이동합니다.</li>
</ul>
<table>
  <tr>
    <td>음성 인식 화면</td>
  </tr>
  <tr>
    <td>
     <img src="https://github.com/user-attachments/assets/dfcae8d2-dab6-4578-bc35-c5d6b02739df" width="400" height="400"/>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>음성 인식 화면 - 결과 도출</td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/532830d1-08f8-455d-9dfe-ff387a609c00" width="400" height="400"/>
    </td>
  </tr>
</table>
<br />

<h3>[ 식사 장소 선택 화면 ]</h3>
<table>
  <tr>
    <td>식사 장소 선택</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/4c6f5e0f-5a86-40c2-8b50-bc2acf89d270" width="400" height="400"/></td>
  </tr>
</table>
<br />

<h3>[ 메뉴 리스트 화면 ]</h3>
<ul>
  <li>주문이 처음이라면 버튼 클릭시 설명 요정 위키가 안내 말풍선을 제공합니다.</li>
  <li>기존 카테고리의 작은 글씨와 이미지의 크기 수정했습니다.</li>
  <li>버거 메뉴는 맛 별로 카테고리화하여 선택을 쉽게 했습니다.</li>
</ul>
<table>
  <tr>
    <td>메뉴 리스트 화면</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/86e09c49-e065-409e-9b29-a4d8ec36d5d4" width="400" height="400"/></td>
  </tr>
</table>
<br />

<h3>[ 말풍선 안내 화면 ]</h3>
<ul>
  <li>기능 설명을 말풍선으로 안내합니다.</li>
</ul>
<table>
  <tr>
    <td>카테고리 선택</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/25bb5b10-0836-4b28-8d4d-abc5c0c53d00" width="400" height="400"/></td>
  </tr>
</table>

<br />
<table>
  <tr>
    <td>맛 별 카테고리 선택</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/90bf213f-0140-4dfc-9b63-4bce7a5a9669" width="400" height="400"/></td>
  </tr>
</table>
<br />

<h3>[ 단품/세트 선택 화면 ]</h3>
<table>
  <tr>
    <td>단품/세트 화면</td>
  </tr>
  <tr>
    <td>
<img src="https://github.com/user-attachments/assets/bffd3db1-7430-428c-b78b-c03dc2f0fc4c" width="400" height="400"/>
</td>
  </tr>
</table>
<br />

<h3>[ 메뉴 선택 - 사이드, 음료 구성 변경 ]</h3>
<ul>
  <li>사이드와 음료를 변경할 수 있습니다. - 미기능 구현</li>
  <li>사용자는 선택을 마친 뒤 장바구니에 고른 메뉴를 추가할 수 있습니다. - 미기능 구현</li>
  <li>취소 버튼을 클릭 시 메뉴리스트 화면으로 이동합니다.</li>
  <li>만약 사용자가 키오스크 안내 기능을 선택했다면 라지세트에 대한 설명이 나옵니다.</li>
</ul>

<table>
  <tr>
    <td>메뉴 선택 - 구성품 변경</td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/52300890-0adc-4f43-bf71-b92f9041b81f" width="400" height="400"/>
    </td>
  </tr>
</table>

<br />
<table>
  <tr>
    <td>주문 내역 확인</td>
  </tr>
  <tr>
    <td>
     <img src="https://github.com/user-attachments/assets/8cecedde-4ce5-4970-b032-3afd15d0047b" width="400" height="400"/>
    </td>
  </tr>
</table>


## 💻 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

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
