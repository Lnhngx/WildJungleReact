import React from "react";
import "./activity.scss";

let WIDTH = 8;
let HEIGHTT = 8;

let datas = [];
for (let i = 0; i < WIDTH; i++) {
    datas[i] = [];
    for (let j = 0; j < HEIGHTT; j++) {
        datas[i].push(
            <img src="/img/activity/chair.svg" alt="" />
        );
    }
}
console.log(datas)

const renderSeats = () => {
    return datas.map((data, i) => (
        <div className="styleFlex">
            {data.map(() => (
                <img className="seats" src="/img/activity/chair.svg" alt="" />
            ))}
        </div>
    ));
};

function activity() {
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
                                <div className="terry_show_title1">Animal</div>
                                <div className="terry_show_title2">Show.</div>
                                <div className="terry_show_subtitle">動物表演秀</div>
                            </div>
                            <div className="terry_show_viewmore">View More</div>
                        </div>
                        <div className="terry_show_area_img">
                            <img src="/img/activity/show1.jpg" alt="" />
                        </div>
                    </div>

                    <div className="terry_showIntroduction_area">
                        <div className="terry_showIntroduction_img">
                            <img src="/img/activity/show2.jpg" alt="" />
                        </div>
                        <div className="terry_showIntroduction_textArea">
                            <div className="showTitle">鯨豚表演秀</div>
                            <div className="showIntroduction">各位先生女士，大朋友小朋友，走過路過路過千萬不要錯過！超超超超卡哇咦的海豚表演秀準備要開始啦～看看飼育員如何透過餵食讓鯨豚舞動牠曼妙的舞姿～如此精彩絕倫的表演絕對絕對不要錯過喔！活動期間也有機會可以和動物互動！快點大手牽小手，準備一同享受與動物的快樂時光吧～</div>
                            <div className="showLocation"></div>
                            <div className="showLocation_text">河畔Ａ區</div>
                            <div className="showNotice"></div>
                            <div className="showNotice_text">
                                1.本系統訂票成功時，每張票皆須收20元手續費。<br></br>
                                2.每個帳號每筆交易最多可購買 6 張電影票劵。<br></br>
                                3.如需退換票，須持購買證明及結帳信用卡至活動現場櫃檯辦理。<br></br>
                                4.表演秀開演二十分鐘後不得入場。</div>
                            <div className="showSelect">
                                <select>
                                    <option>選擇表演秀</option>
                                </select>
                                <select>
                                    <option>選擇場次</option>
                                </select>
                                <select>
                                    <option>選擇人數</option>
                                </select>
                                <button>訂位</button>
                            </div>
                        </div>
                    </div>

                    <div className="terry_showBooking_area">
                        <div className="tourAndNotice">
                            <div className="tourImage">
                                <img src="/img/activity/tour1.png" alt="" />
                            </div>
                            <div className="bookingNotice"></div>
                            <div className="bookingNotice_text">
                                1.綠色為本次交易之選擇座位，紅色為已售出座位，無法選擇。<br></br>
                                2.系統會先隨機選位，欲選擇其他位置請先點選已選擇之座位完成取消後在選座位。<br></br>
                                3.如需退換票，須持購買證明及結帳信用卡至活動現場櫃檯辦理。<br></br>
                                4.表演秀開演二十分鐘後不得入場。</div>
                        </div>
                        <div className="bookingArea">
                            <div className="stage">
                                <img src="/img/activity/stage.svg" alt="" />
                            </div>
                            <div className="seatsArea">{renderSeats()}</div>
                            <div className="buttonGrop">
                                <button>加入購物車</button>
                                <button>回上一步</button>
                            </div>
                        </div>
                    </div>
                    {/*01結束*/}
                    <div className="terry_spomsor_area">
                        <div className="terry_show_area_textArea">
                            <div className="terry_01">02</div>
                            <div className="terry_title_grop">
                                <div className="terry_show_title1">Animal</div>
                                <div className="terry_show_title2">Sponsor.</div>
                                <div className="terry_show_subtitle">動物認養</div>
                            </div>
                            <div className="terry_show_viewmore">View More</div>
                        </div>
                        <div className="terry_show_area_img">
                            <img src="/img/activity/show3.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="terry_sponsor_cardsArea">
                        
                    </div>
                </div>
            </div>
        </>)
}

export default activity;