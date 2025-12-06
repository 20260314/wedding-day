import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import { STATIC_ONLY } from "./env"

function App() {
  return (
        <div className="background">
      <div className="card-group cover-full">
        <LazyDiv className="card">
          {/* 표지 */}
          <Cover />
             </LazyDiv>

          <LazyDiv className="card">
          {/* 모시는 글 */}
          <Invitation />
        </LazyDiv>
      </div>

      <div className="card-group">
        <LazyDiv className="card">
          {/* 결혼식 날짜 (달력) */}
          <Calendar />
             </LazyDiv>

          <LazyDiv className="card"> 
          {/* 겔러리 */}
          <Gallery />
        </LazyDiv>
       </div>

       <div className="card-group">
        <LazyDiv className="card">
          {/* 오시는길 */}
          <Location />
        </LazyDiv>

        <LazyDiv className="card">
          {/* 마음 전하기 */}
          <Information />
        </LazyDiv>
      </div>

        <ShareButton />
      </div>
  )
}

export default App
