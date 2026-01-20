import { LazyDiv } from "../lazyDiv"


export const Location = () => {
  return (
    <>
      {/* --- 제목 --- */}
      <LazyDiv className="card location">
        <h2 className="english">Information</h2>
        <p className="title-kr">안내 말씀</p>

      {/* --- 안내문 --- */}

        {/*안내*/}

         <div className="notice-block">
           모든 소중한 분들을 모시고 싶었지만,
            <br />
           공간에 제약이 있어 부득이 비대면으로
            <br />
           초대 드리게 되었습니다.
            <br />
            <br /> 
           따라서 아래 안내와 같이 
           <br />
           줌으로 결혼식 프로그램이
            <br />
           중계될 것임을 알려드립니다.
            <br />
            <br />
          저희 두 사람에게 나타내 주신 애정과 사랑에
            <br />
           다시 한 번 깊이 감사드리며,
            <br />
         </div>

        
           
        
        {/*온라인*/}
        <div className="location-block">
          <div className="heading">줌 ZOOM 주소</div>
          <div class="line"></div>
          <div className="content">
            회의 ID: 823 6639 8235
            <br />
            암호: 0314
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
