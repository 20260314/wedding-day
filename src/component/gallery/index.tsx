import { useState, useRef } from "react"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { GALLERY_IMAGES } from "../../images"
import ArrowLeft from "../../icons/angle-left-sm.svg?react"
import Arrowdown from "../../icons/arrowdown.png"

export const Gallery = () => {
  const { openModal, closeModal } = useModal()
  const [expanded, setExpanded] = useState(false)

  // --- 큰 사진 보기 슬라이드 인덱스 ---
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleCount = expanded ? GALLERY_IMAGES.length : 9 // 기본 9개

  // --- 좌우 이동 ---
  const moveLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    )
  }

  const moveRight = () => {
    setCurrentIndex((prev) =>
      prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
    )
  }

  const openPhotoModal = (idx: number) => {
    setCurrentIndex(idx)

    openModal({
      className: "photo-view-modal",
      closeOnClickBackground: true,
      content: (
        <div className="photo-view-container">
          <div className="photo-nav left" onClick={moveLeft}>
            <ArrowLeft className="arrow" />
          </div>

          <img
            src={GALLERY_IMAGES[currentIndex]}
            alt="photo"
            className="photo-large"
          />

          <div className="photo-nav right" onClick={moveRight}>
            <ArrowLeft className="arrow right" />
          </div>
        </div>
      ),
      footer: (
        <button className="close-btn" onClick={closeModal}>
          닫기
        </button>
      ),
    })
  }

  return (
    <LazyDiv className="card gallery instagram-gallery">
      <h2 className="english">Gallery</h2>
      <p className="title-kr">갤러리</p>

      {/* --- thumbnail grid --- */}
      <div className={`grid ${expanded ? "expanded" : ""}`}>
        {GALLERY_IMAGES.slice(0, visibleCount).map((img, idx) => (
          <div
            key={idx}
            className="thumb"
            onClick={() => openPhotoModal(idx)}
          >
            <img src={img} alt={`${idx}`} draggable={false} />
          </div>
        ))}
      </div>

      {/* 더보기 버튼 영역 */}
      {!expanded && GALLERY_IMAGES.length > 9 && (
        <div className="more-wrapper">
          <div className="fade" />
          <button className="more-btn" onClick={() => setExpanded(true)}>
            더보기
            <img src={Arrowdown} alt="더보기" className="more-arrow" />
          </button>
        </div>
      )}

      {/* 접기 버튼 */}
      {expanded && (
        <button className="less-btn" onClick={() => setExpanded(false)}>
          접기 ↑
        </button>
      )}
    </LazyDiv>
  )
}
