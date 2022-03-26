import React, { useState, useRef, useEffect } from 'react';
import "./activity.scss";
import { animateScroll as scroll, scroller } from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';

// sponsor-card
let datas2 = [{
    className1: "cardbg cardbg1",
    className2: "sponsor_animalImg1",
    className3: "sponsor_introduction_area",
    className4: "sponsor_animalName",
    className5: "sponsor_introductionText",
    id: "Eagle",
    text: "老鷹在四、五十年前，曾是臺灣常見的猛禽，如今由於棲息地的道路開發、非法捕捉飼養、農藥及殺蟲劑施灑、捕食中毒老鼠或鳥類等，數量大幅減少，已被列為臺灣保育類野生動物名錄中的二級珍貴稀有物種。",
    buttonText: "我要認養！"
}, {
    className1: "cardbg cardbg2",
    className2: "sponsor_animalImg2",
    className3: "sponsor_introduction_area",
    className4: "sponsor_animalName2",
    className5: "sponsor_introductionText2",
    id: "Shark",
    text: "鲨鱼有高度流線、適合游泳的外型，全身覆滿了盾鳞，鳞除了保護鯊魚免於受傷或者被寄生蟲寄生，還可以增進它們的流體動力，讓它們游得更快速。鯊魚體側用於呼吸的鳃裂有五到七個。它們有數套可替換的牙齒。",
    buttonText: "我要認養！"
}, {
    className1: "cardbg cardbg3",
    className2: "sponsor_animalImg3",
    className3: "sponsor_introduction_area",
    className4: "sponsor_animalName",
    className5: "sponsor_introductionText",
    id: "Tiger",
    text: "為貓科中繼虎和獅之後第三大物種，同時也是為西半球最大型以及最強健的貓科動物！外表型態和豹極為相似，但較粗壯，圓斑中有黑點，生態位也較像虎，體型介於虎和豹之間，貓科中的全能冠軍。",
    buttonText: "我要認養！"
}, {
    className1: "cardbg cardbg4",
    className2: "sponsor_animalImg4",
    className3: "sponsor_introduction_area",
    className4: "sponsor_animalName",
    className5: "sponsor_introductionText",
    id: "Elephant",
    text: "頭大脖子短，身軀龐大，四肢長呈圓柱狀，腳短而平，腳底有用來支撐身軀重量的彈性組織，尾巴末端有蓬鬆的毛。皮膚為黯淡的棕灰色，長著稀疏的黑色剛毛。象牙是長得特別長的上門齒。象鼻是由肌肉構成，非常靈活有力，末端上下各有一靈巧的指狀突起。",
    buttonText: "我要認養！"
}, {
    className1: "cardbg cardbg5",
    className2: "sponsor_animalImg5",
    className3: "sponsor_introduction_area",
    className4: "sponsor_animalName",
    className5: "sponsor_introductionText",
    id: "White Fox",
    text: "吻部很尖，耳短而圓，臉頰後部生長毛，腳底部也密生長毛，所以適於在冰雪地上行走，尾毛蓬鬆，尖端白色，身體略小於赤狐。北極狐毛皮既長又軟且厚，厚厚的皮毛使北極狐的體溫保持在四十度，因此可抵禦嚴寒。",
    buttonText: "我要認養！"
}, {
    className1: "cardbg cardbg6",
    className2: "sponsor_animalImg6",
    className3: "sponsor_introduction_area",
    className4: "sponsor_animalName",
    className5: "sponsor_introductionText",
    id: "Random",
    text: "不知道要選哪隻可愛的動物嗎？猶豫了很久還是遲遲無法行動嗎？快點點選亂數抽取鍵幫您找到心中理想的動物吧！",
    buttonText: "點我亂數抽取！"
}];

// sponsor-demo
let datas3 = [{
    id: "Eagle",
    text: "感謝您在眾多動物中選擇了我，願意發揮愛心來認養動物的人真是太讓人尊敬了！在此代表全體動物獻上萬分謝意。",
    imgSrc: "/img/home/star_eagle.png",
    className: "terry_sponsor_planSelectionArea terry_sponsor_planSelectionArea1",
    className2: "animalImg1"
}, {
    id: "Shark",
    text: "感謝您在眾多動物中選擇了我，願意發揮愛心來認養動物的人真是太讓人尊敬了！在此代表全體動物獻上萬分謝意。",
    imgSrc: "/img/home/star_shark.png",
    className: "terry_sponsor_planSelectionArea terry_sponsor_planSelectionArea2",
    className2: "animalImg2"
}, {
    id: "Tiger",
    text: "感謝您在眾多動物中選擇了我，願意發揮愛心來認養動物的人真是太讓人尊敬了！在此代表全體動物獻上萬分謝意。",
    imgSrc: "/img/home/star_tiger.png",
    className: "terry_sponsor_planSelectionArea terry_sponsor_planSelectionArea3",
    className2: "animalImg3"
}, {
    id: "Elephant",
    text: "感謝您在眾多動物中選擇了我，願意發揮愛心來認養動物的人真是太讓人尊敬了！在此代表全體動物獻上萬分謝意。",
    imgSrc: "/img/home/star_elephant.png",
    className: "terry_sponsor_planSelectionArea terry_sponsor_planSelectionArea4",
    className2: "animalImg4"
}, {
    id: "White Fox",
    text: "感謝您在眾多動物中選擇了我，願意發揮愛心來認養動物的人真是太讓人尊敬了！在此代表全體動物獻上萬分謝意。",
    imgSrc: "/img/home/star_hitefox.png",
    className: "terry_sponsor_planSelectionArea terry_sponsor_planSelectionArea5",
    className2: "animalImg5"
}];



function Activity() {
    const seatsW = 8;
    const seatsH = 8;


    let datas = [];
    for (let i = 0; i < seatsW; i++) {
        datas[i] = [];
        for (let j = 0; j < seatsH; j++) {
            datas[i].push(
                1
            );
        }
    };

    const renderSeats = () => {
        return datas.map((data, i) => (
            <div className="styleFlex">
                {data.map((v, j) => (
                    <img onClick={() => {
                        //數字轉字母
                        const p = String.fromCharCode(65 + i);
                        const ps = { ...positions };
                        const psed = { ...clickedPosition };

                        if (ps[p]) {
                            delete ps[p];
                            setPositions(ps);
                            console.log("\\芋頭加持/給我跳出來啊!!!!!")

                            //className點擊
                            if(!psed[i].findIndex((e)=>e===j)){
                                console.log("\\E神加持/ 求你跳出來了.......")
                                psed[i].splice(psed[i].findIndex((e)=>e===j),1);
                                setClickedPosition({ ...psed });
                            }
                        } else {
                            setPositions({ ...ps, [p]: (j + 1) });

                            //className點擊
                            if (!psed[i]) {
                                psed[i] = [];
                                psed[i].push(j);
                                setClickedPosition({ ...psed })
                            }
                        };
                    }} className={(clickedPosition[i] && clickedPosition[i].length > 0 && clickedPosition[i].some((n) => n === j)) ? "seatsClick" : "seats"} src="/img/activity/chair.svg" alt="" />
                ))}
            </div>
        ));
    };


    const renderCards = () => {
        return datas2.map((v, i) => (
            <div className={v.className1}>
                <div className={v.className2}></div>
                <div className={v.className3}>
                    <div className={v.className4}>{v.id}</div>
                    <div className={v.className5}>{v.text}</div>
                    <button key={i} onClick={() => {
                        setCardChange(i); setState4(!state4); setState3(!state3); scrollToSection3();
                    }}>{v.buttonText}</button>
                </div>
            </div>
        ));
    };


    const renderStaraAnimal = () => {
        return datas3.filter((v, i) => i === cardChange).map((v, i) => (
            <div key={i} onClick={() => { console.log(i) }} className={v.className}>
                <div className="demoArea">
                    <div className="imgBorder">
                        <img src={"/img/activity/animalBorder.svg"} alt="" />
                        <div className="animalName">{v.id}</div>
                    </div>
                    <div className={v.className2}></div>
                </div>
                <div className="introduction_area">
                    <div className="sponsor_introductionText3">感謝您在眾多動物中選擇了我，願意發揮愛心來認養動物的人真是太讓人尊敬了！在此代表全體動物獻上萬分謝意。</div>
                    <div className="selectAndButton_grop">
                        <div className="sponsorSelect">
                            <select>
                                <option>選擇方案</option>
                            </select>
                            <select>
                                <option>選擇金額</option>
                            </select>
                        </div>
                        <div className="buttonGrop2">
                            <button>加入購物車</button>
                            <button onClick={() => { setState3(!state3); setState4(true); scrollToSection4() }}>回上一步</button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };


    //01area收合
    const [state, setState] = useState(false);
    const [state2, setState2] = useState(true);
    //02area收合
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(true);
    //03area收合
    const [state5, setState5] = useState(false);

    //booking區變換
    const [imgChange, setImgChange] = useState("terry_showIntroduction_img");
    const [showTitleChange, setShowTitleChange] = useState("鯨豚表演秀");
    const [showTextChange, setShowTextChange] = useState("各位先生女士，大朋友小朋友，走過路過路過千萬不要錯過！超卡哇咦的海豚表演秀準備要開始啦～看看飼育員如何透過餵食讓鯨豚舞動牠曼妙的舞姿～活動期間也有機會可以和動物互動！準備一同享受與動物的快樂時光吧～");
    const [locationChange, setLocationChange] = useState("冰原A區")
    const [cardChange, setCardChange] = useState(0);

    //位置點擊
    const [positions, setPositions] = useState({});
    const [clickedPosition, setClickedPosition] = useState({});
    const [seatClick, setSeatClick] = useState(false);

    //scrollTo
    const scrollToSection1 = () => {
        scroller.scrollTo("terry_showIntroduction_img", {
            duration: 1000,
            delay: 200,
            smooth: "easeInOutQuart",
            offset: 750,
        });
    };
    const scrollToSection2 = () => {
        scroller.scrollTo("cardbg", {
            duration: 1000,
            delay: 200,
            smooth: "easeInOutQuart",
            offset: 800,
        });
    };
    const scrollToSection3 = () => {
        scroller.scrollTo("terry_sponsor_planSelectionArea", {
            duration: 800,
            delay: 100,
            smooth: "easeInOutQuart",
            offset: -130,
        });
    };
    const scrollToSection4 = () => {
        scroller.scrollTo("cardbg", {
            duration: 800,
            delay: 100,
            smooth: "easeInOutQuart",
            offset: 0,
        });
    };

    return (
        <>
            <div className="terry_bg">
                <div className="terry_leaf_leftArea">
                    <img src="/img/activity/leaf-left.png" alt="" />
                </div>
                <div className="terry_leaf_rightArea">
                    <img src="/img/activity/leaf-right.png" alt="" />
                </div>
                <div className="terry_container">
                    <div className="terry_show_area">
                        <div className="terry_show_area_textArea">
                            <div className="terry_01">01</div>
                            <div className="terry_title_grop">
                                <div className="terry_title_grop2">
                                    <div className="terry_show_title1">Animal</div>
                                    <div className="terry_show_title2">Show.</div>
                                </div>
                                <div className="terry_show_subtitle">動物表演秀</div>
                            </div>
                            <div className="terry_show_viewmore" onClick={() => { setState(!state); setState2(true); if (!state) { scrollToSection1() } }} >View More</div>
                        </div>
                        <div className="terry_show_area_img"></div>
                    </div>

                    <div className={state ? "terry_showIntroduction_area" : "areaDisplayNone"}>
                        <div className={imgChange}>
                        </div>
                        <div className="terry_showIntroduction_textArea">
                            <div className="showTitle">{showTitleChange}</div>
                            <div className="showIntroduction">{showTextChange}</div>
                            <div className="showLocation"></div>
                            <div className="showLocation_text">{locationChange}</div>
                            <div className="showNotice"></div>
                            <div className="showNotice_text">
                                1.本系統訂票成功時，每張票皆須收20元手續費。<br></br>
                                2.每個帳號每筆交易最多可購買 6 張表演秀劵。<br></br>
                                3.退換票須持購買證明及結帳信用卡至活動現場櫃檯辦理。<br></br>
                                4.開演二十分鐘後不得入場。</div>
                            <div className="showSelect">
                                <select onChange={(e) => {
                                    if (e.target.value === '1') {
                                        setImgChange("terry_showIntroduction_img");
                                        setShowTitleChange
                                            ("鯨豚表演秀");
                                        setShowTextChange
                                            ("各位先生女士，大朋友小朋友，走過路過路過千萬不要錯過！超卡哇咦的海豚表演秀準備要開始啦～看看飼育員如何透過餵食讓鯨豚舞動牠曼妙的舞姿～活動期間也有機會可以和動物互動！準備一同享受與動物的快樂時光吧～");
                                        setLocationChange
                                            ("冰原A區");
                                    } if (e.target.value === '2') {
                                        setImgChange("terry_showIntroduction_img2");
                                        setShowTitleChange
                                            ("鱷魚餵食秀");
                                        setShowTextChange
                                            ("鱷魚們不時地探出頭來迎接大家，張開嘴的牠們不是為了嚇唬大家，是因為他沒有汗腺只能透過張嘴進行散熱。看了我們飼育員與鱷魚的互動，只會發現鱷魚根本只是住在沼澤的貓貓～搞不好回家還會吵著爸媽要養鱷魚當寵物呢！更多的互動都在表演秀裡頭！");
                                        setLocationChange
                                            ("熱帶B區");
                                    } if (e.target.value === '3') {
                                        setImgChange("terry_showIntroduction_img3");
                                        setShowTitleChange
                                            ("熊貓吃播秀");
                                        setShowTextChange
                                            ("吃播是一種線上的直播模式，主要是在與觀眾互動的同時吃掉大量食物，約2010年時流行於韓國。一般通過網路廣播，如：Afreeca TV、YouTube、Twitch等串流媒體平台。動物園重金聘請動物界人氣最高的熊貓來與大家互動！來看看牠如何把食物吃得如此津津有味！更多的內容都在表演秀裡面～快來參加～～～");
                                        setLocationChange
                                            ("夜行C區");
                                    } if (e.target.value === '4') {
                                        setImgChange("terry_showIntroduction_img4");
                                        setShowTitleChange
                                            ("萌豹睡覺秀");
                                        setShowTextChange
                                            ("你知道嗎？如果一天睡八個小時，在你99歲的時候，你已經花了33年在睡覺了！有時候看別人吃東西會覺得好像比較好吃～睡覺也是一樣的道理喔！沒錯！本表演秀就是單純看平常帥氣鋒利的豹，用超可愛超萌的樣子睡覺！有趣吧！我覺得很有趣！來就對了！哈！");
                                        setLocationChange
                                            ("海底D區");
                                    };

                                    console.log(e.target.value)
                                }}>
                                    <option>選擇表演秀</option>
                                    <option value="1" >鯨豚餵食秀</option>
                                    <option value="2" >鱷魚餵食秀</option>
                                    <option value="3" >熊貓吃播秀</option>
                                    <option value="4" >萌豹睡覺秀</option>
                                </select>
                                <select>
                                    <option>選擇場次</option>
                                </select>
                                <select>
                                    <option>選擇人數</option>
                                </select>
                                <button onClick={() => { setState2(!state2); setState(!state) }}>訂位</button>
                            </div>
                        </div>
                    </div>

                    <div className={state2 ? "areaDisplayNone" : "terry_showBooking_area"}>
                        <div className="tourAndNotice">
                            <div className="tourImage">
                                <img src="/img/activity/tour1.png" alt="" />
                            </div>
                            <div className="bookingNotice_grop">
                                <div className="bookingNotice"></div>
                                <div className="bookingNotice_text">
                                    1.綠色為選擇座位，紅色為已售出座位，無法選擇。<br></br>
                                    2.欲選擇其他位置請先點選已選擇之座位完成取消後在選座位。<br></br>
                                    3.如需退換票，須持購買證明及結帳信用卡至活動現場櫃檯辦理。<br></br>
                                    4.表演秀開演二十分鐘後不得入場。</div>
                            </div>
                        </div>
                        <div className="bookingArea">
                            <div className="stage">
                                <img src="/img/activity/stage.svg" alt="" />
                            </div>
                            <div className="seatsArea">{renderSeats()}</div>
                            <div className="buttonGrop">
                                <button>加入購物車</button>
                                <button onClick={() => { setState(!state); setState2(true) }}>回上一步</button>
                            </div>
                        </div>
                    </div>
                    {/*01結束*/}
                    <div className="terry_sponsor_area">
                        <div className="terry_show_area_textArea">
                            <div className="terry_01">02</div>
                            <div className="terry_title_grop">
                                <div className="terry_title_grop2">
                                    <div className="terry_show_title1">Animal</div>
                                    <div className="terry_show_title2">Sponsor.</div>
                                </div>
                                <div className="terry_show_subtitle">動物認養</div>
                            </div>
                            <div className="terry_show_viewmore" onClick={() => { setState3(!state3); setState4(true); if (!state3) { scrollToSection2() } }} >View More</div>
                        </div>
                        <div className="terry_show_area_img1"></div>
                    </div>
                    <div className={state3 ? "terry_sponsor_cardsArea" : "areaDisplayNone"}>
                        {renderCards()}
                    </div>
                    <div className={state4 ? "areaDisplayNone" : "terry_sponsor_planSelectionArea"}>
                        {renderStaraAnimal()}
                    </div>
                    {/* <div className="terry_sponsor_planSelectionArea">
                        <div className="demoArea">
                            <div className="imgBorder">
                                <img src="/img/activity/animalBorder.svg" alt="" />
                                <div className="animalName">Eagle</div>
                            </div>
                            <div className="animalImg">
                                <img src="/img/home/star_eagle.png" alt="" />
                            </div>
                        </div>
                        <div className="introduction_area">
                            <div className="sponsor_introductionText3">感謝您在眾多動物中選擇了我，願意發揮愛心來認養動物的人真是太讓人尊敬了！在此代表全體動物獻上萬分謝意。</div>
                            <div className="selectAndButton_grop">
                                <div className="sponsorSelect">
                                    <select>
                                        <option>選擇方案</option>
                                    </select>
                                    <select>
                                        <option>選擇金額</option>
                                    </select>
                                </div>
                                <div className="buttonGrop2">
                                    <button>加入購物車</button>
                                    <button>回上一步</button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/*02結束*/}
                    <div className="terry_touch_area">
                        <div className="terry_show_area_textArea">
                            <div className="terry_01">03</div>
                            <div className="terry_title_grop">
                                <div className="terry_title_grop2">
                                    <div className="terry_show_title1">Animal</div>
                                    <div className="terry_show_title2">Touch.</div>
                                </div>
                                <div className="terry_show_subtitle">動物接觸</div>
                            </div>
                            <div className="terry_show_viewmore" onClick={() => { setState5(!state5) }}>View More</div>
                        </div>
                        <div className="terry_show_area_img2">
                            <div className="terry_touchAreaImg"></div>
                        </div>
                    </div>

                    {/* <div className={state5 ? "terry_touch_imgArea" : "areaDisplayNone"}>
                        <div className="imgAndNameGrop">
                            <div className="terry_touchshow1"></div>
                            <div className="name">海狗互動秀</div>
                        </div>
                        <div className="imgAndNameGrop">
                            <div className="terry_touchshow2"></div>
                            <div className="name">萌兔餵食體驗</div>
                        </div>
                    </div> */}

                    <div className={state5 ? "terry_carousel_area" : "areaDisplayNone"}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="terry_touchshow d-block w-100"
                                    src="/img/activity/touchshow2.jpg"
                                    alt=""
                                />
                                <Carousel.Caption>
                                    <div className="terry_p_bg">
                                        <p>萌兔餵食體驗</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="terry_touchshow d-block w-100"
                                    src="/img/activity/touchshow3.jpg"
                                    alt=""
                                />

                                <Carousel.Caption>
                                    <p>可愛小鹿餵食體驗</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="terry_touchshow d-block w-100"
                                    src="/img/activity/touchshow4.jpg"
                                    alt=""
                                />

                                <Carousel.Caption>
                                    <p>
                                        貓頭鷹接觸體驗
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="terry_touchshow d-block w-100"
                                    src="/img/activity/touchshow5.jpg"
                                    alt=""
                                />

                                <Carousel.Caption>
                                    <p>
                                        長頸鹿餵食體驗
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="terry_touchshow d-block w-100"
                                    src="/img/activity/touchshow6.jpg"
                                    alt=""
                                />
                                <Carousel.Caption>
                                    <p>
                                        鼬獾接觸體驗
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="terry_touchshow d-block w-100"
                                    src="/img/activity/touchshow7.jpg"
                                    alt=""
                                />
                                <Carousel.Caption>
                                    <p>
                                        袋鼠摸摸體驗
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="terry_animalImg_Area">
                    <img src="/animals-footer.png" alt="" />
                </div>
            </div>
        </>)
};

export default Activity;