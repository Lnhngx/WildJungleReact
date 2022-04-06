// function MyDate() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className='app'>
//      {date.length > 0 ? (
//         <p className='text-center'>
//           <span className='bold'>Start:</span>{' '}
//           {date[0].toDateString()}
//           &nbsp;|&nbsp;
//           <span className='bold'>End:</span> {date[1].toDateString()}
//         </p>
//       ) : (
//         <p className='text-center'>
//           <span className='bold'>Default selected date:</span>{' '}
//           {date.toDateString()}
//         </p>
//       )}
//       <div className='calendar-container'>
//         <Calendar
//           onChange={setDate}
//           value={date}
//           selectRange={true}
//         />
//       </div>

//     </div>
//   );
// }

// export default MyDate;

import React, { useEffect, useState } from "react";
import _ from "lodash";

const myYear = 2022;
const myMonth = 4;

function MyDate(props) {
  const { setCartdate, setCartdate2 } = props;
  // 呈現yearAndMonth
  const now = new Date();
  let dateTime = new Date();
  dateTime = dateTime.setDate(dateTime.getDate() + 1);
  dateTime = new Date(dateTime);

  const [check, setCheck] = useState([
    now.toLocaleDateString(),
    dateTime.toLocaleDateString(),
  ]);

  // 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)
  const nowY = myYear ? myYear : now.getFullYear();

  // nowM =1-12
  const nowM = myMonth ? myMonth : now.getMonth() + 1; //注意回傳為 0~11

  // 呈現標題
  const weekDayList = ["日", "一", "二", "三", "四", "五", "六"];

  // 本月有幾天
  // (上個月的最後一天是幾號)
  const days = new Date(nowY, nowM, 0).getDate();

  // 這個月的第一天是星期幾(0-6) (月份為0-11)
  const firstDay = new Date(nowY, nowM - 1, 1).getDay();

  // 本月所有日期的陣列資料
  const daysDataArray = [];

  // 補前面的空白資料
  for (let i = 0; i < firstDay; i++) {
    daysDataArray.push("");
  }

  // 加入本月所有的日期資料
  for (let i = 0; i < days; i++) {
    daysDataArray.push(i + 1);
  }

  // 準備要呈現在網頁上
  const daysDisplayArray = _.chunk(daysDataArray, 7);

  //
  const [count, setCount] = useState(0);
  const [checkTime, setcheckTime] = useState([]);
  let colorArr = [];
  function checkDate(e) {
    if (count === 0) {
      let Arr = [...check];
      Arr.splice(0, 2);
      Arr.push(
        new Date(
          new Date(e.target.dataset.value).getTime()
        ).toLocaleDateString()
      );
      setCheck(Arr);
      setcheckTime(new Date(e.target.dataset.value).getTime());
      setCount(1);
      //console.log(Arr);
      //colorArr.push(e.target)
      //e.target.style.backgroundColor = "#f9b112";
    } else if (count === 1) {
      if (new Date(e.target.dataset.value).getTime() > checkTime) {
        let Arr = [...check];
        Arr.push(
          new Date(
            new Date(e.target.dataset.value).getTime()
          ).toLocaleDateString()
        );
        setCheck(Arr);
        setCount(0);
      } else {
        let Arr = [...check];
        Arr.splice(0, 1);
        Arr.push(
          new Date(
            new Date(e.target.dataset.value).getTime()
          ).toLocaleDateString()
        );
        setCheck(Arr);
        setcheckTime(new Date(e.target.dataset.value).getTime());
        setCount(1);
      }
      //colorArr.push(e.target)
    }
    e.target.style.backgroundColor = "#f9b112";
    colorArr.push(e.target.innerHTML);
    console.log(e.target.dataset.value, check[0]);
  }

  setCartdate(check[0]);
  setCartdate2(check[1]);

  return (
    <>
      <h2 id="yearAndMonth" className="yearAndMonth">
        <span
          onClick={() => {
            //console.log(check[0], check[1]);
          }}
        >
          入住：
        </span>
        {check[0]}
        <span> 退房：</span>
        {check[1]}
      </h2>
      <div className="ning_datebox">
        <table border="1" className="ning_table">
          <thead id="title">
            <tr className="ning_tr">
              {weekDayList.map(function (v, i) {
                return (
                  <th key={i} value={i}>
                    {v}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody id="data" className="ning_tbody">
            {daysDisplayArray.map((v, i) => {
              return (
                <tr key={i}>
                  {v.map((item, idx) => (
                    <td
                      key={idx}
                      className={item}
                      data-value={"2022/4/" + item}
                      onClick={(e) => checkDate(e)}
                      style={ Date.parse("2022/4/" + item) === Date.parse(check[0]) || Date.parse("2022/4/" + item)===Date.parse(check[1]) ? {backgroundColor:"#f9b112"} : Date.parse("2022/4/"+item) > Date.parse(check[0]) &&Date.parse("2022/4/"+ item) < Date.parse(check[1]) ? {backgroundColor:"#ffe8b5"}:{ backgroundColor:"white"} }
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyDate;
