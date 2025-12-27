import { LazyDiv } from "../lazyDiv"


export const Location = () => {
  return (
    <>
      {/* --- 제목 --- */}
      <LazyDiv className="card location">
        <h2 className="english">Information</h2>
        <p className="title-kr">안내 말씀</p>
      </LazyDiv>

      {/* --- 안내문 --- */}
      <LazyDiv className="card location">
        
        {/*온라인*/}
        <div className="location-block">
          <div className="heading">줌 ZOOM</div>
          <div class="line"></div>
          <div className="content">
            줌 (ZOOM) 으로도 결혼식이 생중계됩니다.
            <br />
            회의 ID: 823 6639 8235
            <br />
            암호: 0314
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
