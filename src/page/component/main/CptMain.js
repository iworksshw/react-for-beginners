import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';
import 'swiper/css';
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function InfoTotal () {
    //종합
    const infoListTotal = [
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"채용공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/careersView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"채용공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/careersView"},
    ];

    return (
        <div>
            <Swiper
                className="mainTabSwiper"
                slidesPerView={"auto"}>
                {infoListTotal.slice(0, 4).map((item, index) => (
                    <SwiperSlide key={index}>
                        <i className="eyebrow">{item.type}</i>
                        <Link to={item.url} className="link">
                            <dl>
                                <dt>{item.title}</dt>
                                <dd>{item.msg}</dd>
                            </dl>
                        </Link>
                        <i className="date">{item.date}</i>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function CareersList () {
    //채용공고
    const careersList = [
        {"type":"채용공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/careersView"},
        {"type":"채용공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/careersView"},
        {"type":"채용공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/careersView"},
        {"type":"채용공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/careersView"},
        {"type":"채용공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/careersView"},
        {"type":"채용공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/careersView"},
    ];

    return (
        <div>
            <Swiper
                className="mainTabSwiper"
                slidesPerView={"auto"}>
                {careersList.slice(0, 4).map((item, index) => (
                    <SwiperSlide key={index}>
                        <i className="eyebrow">{item.type}</i>
                        <Link to={item.url} className="link">
                            <dl>
                                <dt>{item.title}</dt>
                                <dd>{item.msg}</dd>
                            </dl>
                        </Link>
                        <i className="date">{item.date}</i>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function BiddingList () {
    //입찰공고
    const biddingList = [
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
        {"type":"입찰공고",
        "title":"공지사항 제목 PC에서 2줄까지 노출됩니다. 공지사항 제목 PC에서 2줄까지 노출됩니다.",
        "msg":"(주)스포츠토토코리아는 2025년 체육진흥투표권 신규판매인을 다음과 같이 모집합니다.",
        "date":"2025-02-26",
        "url":"/react-for-beginners/board/biddingView"},
    ];

    return (
        <div>
            <Swiper
                className="mainTabSwiper"
                slidesPerView={"auto"}>
                {biddingList.slice(0, 4).map((item, index) => (
                    <SwiperSlide key={index}>
                        <i className="eyebrow">{item.type}</i>
                        <Link to={item.url} className="link">
                            <dl>
                                <dt>{item.title}</dt>
                                <dd>{item.msg}</dd>
                            </dl>
                        </Link>
                        <i className="date">{item.date}</i>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function CptMain () {
    // --------------------------- data ---------------------------
    //공지사항
    const noticeTitle = "공지사항";
    const noticeUrl = "/react-for-beginners/board/pr";
    const noticeList = [
        {"title":"불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범 불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "imgUrl":"/resource/images/main/main_thum01.jpg",
        "imgAlt":"공지사항 이미지",
        "url":"/react-for-beginners/board/prView"},
        {"title":"불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범 불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "imgUrl":"/resource/images/main/main_thum02.jpg",
        "imgAlt":"공지사항 이미지",
        "url":"/react-for-beginners/board/prView"},
        {"title":"불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범 불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "imgUrl":"/resource/images/main/main_thum03.jpg",
        "imgAlt":"공지사항 이미지",
        "url":"/react-for-beginners/board/prView"},
        {"title":"불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범 불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "imgUrl":"/resource/images/main/main_thum04.jpg",
        "imgAlt":"공지사항 이미지",
        "url":"/react-for-beginners/board/prView"},
    ];

    // --------------------------- Main Visual ---------------------------
    const visualSwiperRef = useRef(null);
    const visualSwiperMRef = useRef(null);
    useEffect(() => {
        if (visualSwiperRef.current && visualSwiperMRef.current) {
            // 양방향 컨트롤 설정
            visualSwiperRef.current.controller.control = visualSwiperMRef.current;
            visualSwiperMRef.current.controller.control = visualSwiperRef.current;
        }
    }, [visualSwiperRef, visualSwiperMRef]);
    const progressLineRef = useRef(null); // progressLine을 참조하기 위한 useRef 생성

    // --------------------------- 채용공고/입찰공고 ---------------------------
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="cptMain">
            <div className="mainArea">
                <div className="visualGroup">
                    <div className="visualSwiperContainer">
                        <Swiper 
                            className="visualSwiperM" 
                            loop={true}
                            modules={[Controller]}
                            onSwiper={(swiper) => {
                                visualSwiperMRef.current = swiper;
                            }}
                        >
                            <SwiperSlide>
                                <div className="link">
                                    <dl className="msg">
                                        <dt>스포츠가 설렌다<br /> 스포츠토토</dt>
                                        <dd>관련 기금은 국민체육복지를 위한<br /> 스포츠인프라 구축에 사용됩니다 </dd>
                                    </dl>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="link">
                                    <dl className="msg">
                                        <dt>건전한 게임을 통해<br /> 스포츠의 재미를 더합니다</dt>
                                        <dd>건전한 여가문화를 제공함과 동시에<br /> 스포츠 발전을 위해 최선을 다하겠습니다</dd>
                                    </dl>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="link">
                                    <dl className="msg">
                                        <dt>건전한 여가 문화를<br /> 만들어갑니다</dt>
                                        <dd>국민체육진흥에 기여하며 국민과 함께<br /> 행복을 키워가는 기업이 되겠습니다</dd>
                                    </dl>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="slideUnit">
                            <div className="autoplay-progress">
                                <svg ref={progressLineRef} viewBox="0 0 120 10">
                                    <line x1="0" y1="0" x2="120" y2="0"></line>
                                </svg>
                            </div>
                            <div className="swiper-pagination"></div>
                            <div className="swiperNavi">
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                        <Swiper
                            className="visualSwiper"
                            modules={[Navigation, Pagination, Autoplay, Controller]}
                            loop={true}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false
                            }}
                            pagination={{
                                el: '.visualSwiperContainer .swiper-pagination',
                                type: "fraction",
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".visualSwiperContainer .swiper-button-next",
                                prevEl: ".visualSwiperContainer .swiper-button-prev"
                            }}
                            onSwiper={(swiper) => {
                                visualSwiperRef.current = swiper;
                            }}
                            onAutoplayTimeLeft={(swiper, time, progress) => {
                                if (progressLineRef.current) {
                                    progressLineRef.current.style.setProperty('--progress', 1 - progress);
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div className="link">
                                    <dl className="msg">
                                        <dt>스포츠가 설렌다 스포츠토토</dt>
                                        <dd>관련 기금은 국민체육복지를 위한 스포츠인프라 구축에 사용됩니다 </dd>
                                    </dl>
                                    <div className="image">
                                        <img src={`${process.env.PUBLIC_URL}/resource/images/main/main_visual01.jpg`}
                                            srcSet={`${process.env.PUBLIC_URL}/resource/images/main/main_visual01_m.jpg 768w, ${process.env.PUBLIC_URL}/resource/images/main/main_visual01.jpg 800w`} 
                                            sizes="(max-width: 768px) 768w, 800w" 
                                            alt="비주얼이미지" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="link">
                                    <dl className="msg">
                                        <dt>건전한 게임을 통해 스포츠의 재미를 더합니다</dt>
                                        <dd>건전한 여가문화를 제공함과 동시에 스포츠 발전을 위해 최선을 다하겠습니다</dd>
                                    </dl>
                                    <div className="image">
                                        <img src={`${process.env.PUBLIC_URL}/resource/images/main/main_visual02.jpg`}
                                            srcSet={`${process.env.PUBLIC_URL}/resource/images/main/main_visual02_m.jpg 768w, ${process.env.PUBLIC_URL}/resource/images/main/main_visual02.jpg 800w`} 
                                            sizes="(max-width: 768px) 768w, 800w" 
                                            alt="비주얼이미지" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="link">
                                    <dl className="msg">
                                        <dt>건전한 여가 문화를 만들어갑니다</dt>
                                        <dd>국민체육진흥에 기여하며 국민과 함께 행복을 키워가는 기업이 되겠습니다</dd>
                                    </dl>
                                    <div className="image">
                                        <img src={`${process.env.PUBLIC_URL}/resource/images/main/main_visual03.jpg`} 
                                            srcSet={`${process.env.PUBLIC_URL}/resource/images/main/main_visual03_m.jpg 768w, ${process.env.PUBLIC_URL}/resource/images/main/main_visual03.jpg 800w`}
                                            sizes="(max-width: 768px) 768w, 800w" 
                                            alt="비주얼이미지" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="contGroup">
                    <section className="noticeArea">
                        <div className="title">
                            <h3>{noticeTitle}</h3>
                            <Link to={noticeUrl} className="more">더보기</Link>
                        </div>
                        <ul className="noticeList">
                            {noticeList.map((item, index) => (
                                <li className="item" key={index}>
                                    <Link to={item["url"]} className="link">
                                        <div className="image">
                                            <img src={process.env.PUBLIC_URL+item["imgUrl"]} alt={item.imgAlt} />
                                        </div>
                                        <div className="text">
                                            <span className="tit">{item.title}</span>
                                            <span className="msg">{item.msg}</span>
                                            <span className="date">{item.date}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="infoArea">
                        <div className="infoBox infoSwiper">
                            <dl className="title">
                                <dt><h3>대한민국 스포츠 발전에 큰 버팀목이 되겠습니다</h3></dt>
                                <dd>국민과 함께 행복을 키워가며 대한민국 스포츠 발전 및 활성화에 기여하겠습니다.</dd>
                            </dl>
                            <Swiper
                                className="infoList"
                                slidesPerView={"auto"}>
                                <SwiperSlide>
                                    <div className="card">
                                        <i className="eyebrow">Business</i>
                                        <dl>
                                            <dt>체육진흥투표권이란<br />무엇인가요?</dt>
                                            <dd>국민체육진흥을 목적으로 시행된 공익사업입니다.</dd>
                                        </dl>
                                        <Link to="#" className="link">자세히보기</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <i className="eyebrow">Organization</i>
                                        <dl>
                                            <dt>체육진흥투표권 사업<br />관련기관 안내</dt>
                                            <dd>관련 기관 간 협업을 통하여 투명하고 공정하게 운영됩니다.</dd>
                                        </dl>
                                        <Link to="#" className="link">자세히보기</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <i className="eyebrow">Toto</i>
                                        <dl>
                                            <dt>분석하며 즐기는<br />토토를 소개합니다.</dt>
                                            <dd>경기를 분석하면서 즐기는 선진국형 스포츠 레저게임 입니다.</dd>
                                        </dl>
                                        <Link to="#" className="link">자세히보기</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <i className="eyebrow">Proto</i>
                                        <dl>
                                            <dt>취향대로 즐기는<br />프로토를 소개합니다.</dt>
                                            <dd>취향대로 투표할 수 있는 고객 선택형 스포츠 게임입니다.</dd>
                                        </dl>
                                        <Link to="#" className="link">자세히보기</Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>

                    <section className="tabArea">
                        <div className="tabMenuGroup">
                            <ul className="tabMenu">
                                {["전체", "채용공고", "입찰공고"].map((item, index) => (
                                    <li className="tabItem" key={index}>
                                        <button 
                                            className={`tabName ${activeTab === index ? 'on' : ''}`}
                                            title="탭메뉴"
                                            onClick={() => setActiveTab(index)}
                                        >{item}</button>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/react-for-beginners/board/careers" className="more">더보기</Link>
                        </div>
                        <div className="tabContianer">
                            {activeTab === 0 ? <InfoTotal /> : activeTab === 1 ? <CareersList /> : <BiddingList />}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default CptMain;