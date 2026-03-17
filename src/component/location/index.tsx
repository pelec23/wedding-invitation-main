import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 2호선 <b>강변역 1,2번출구</b> 지하통로 연결
            <br />
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            2224, 3212, 3214, 강동01, 광진01, 광진04, 1, 1-1, 1-2, 9, 3-1, 13, 13-2, 15, 91, 92, 93, 95, 96 , 97, 112, 112-1, 2000-1, 2000-3, 2000-4, 11, 1112, 1113, 1113-1, 1113-2, 1117, 1650, 1660, 5600, 5700

            <br />
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>강변테크노마트</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (강변테크노마트 지하 주차장 이용)
          </div>
          <div />
          <div className="content">

          </div>
        </div>
      </LazyDiv>
    </>
  )
}
