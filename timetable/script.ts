function showClock1() {


    // Create time object
    var nowTime: Date = new Date();

    // Get now time
    var weekDayList: string[] = [ "日", "月", "火", "水", "木", "金", "土" ];
    var now = {
        Hour:   nowTime.getHours(),
        Min:    nowTime.getMinutes(),
        Sec:    nowTime.getSeconds(),
        Month:  nowTime.getMonth(),
        Date:   nowTime.getDate(),
        Day:    weekDayList[ nowTime.getDay() ],
        DayNumber: nowTime.getDay()
    }

   
    
    for (var i = 1; i <= 5; i++) {
       for (var j = 1; j <= 7; j++) {
            document.getElementById(i + "_" + j).style.backgroundColor = "#fff";
       }
    }
    




    // Create message
    var msg = now["Month"] + "月" +
              now["Date"] + "日" +
              now["Day"]  + "曜日" +
              now["Hour"] + ":" + now["Min"] + ":" + now["Sec"] +
              " です。";

    // Display message
    document.getElementById("RealtimeClockArea").innerHTML = msg;



    var time;
    // 今の時間を分だけに直す
    var whatNowClass = now["Min"] + now["Hour"] * 60 ;

    /* 9:25 ~ 10:55 */
    if ( 565 <= whatNowClass && whatNowClass <= 655 ){
        time=1;
    /* 11:10 ~ 12:40 */
    } else if ( 670 <= whatNowClass && whatNowClass <= 760 ){
        time=2;
    /* 13:00 ~ 14:30 */
    } else if ( 780 <= whatNowClass && whatNowClass <= 870 ){
        time=3;
    /* 14:45 ~ 16:15 */
    } else if ( 885 <= whatNowClass && whatNowClass <= 975){
        time=4;
    /* 16:30 ~ 18:00 */
    } else if ( 990 <= whatNowClass && whatNowClass <= 1080 ){
        time=5;
    /* 18:10 ~ 19:40 */
    } else if ( 1090 <= whatNowClass && whatNowClass <= 1180 ){
        time=6;
    /* 19:50 ~ 21:20 */
    } else if (1190 <= whatNowClass && whatNowClass <= 1280 ){
        time=7;
    } else {
        time=0;
    }

    
    /* For test */
     
      
  

   //  document.getElementById("5_2").style.backgroundColor = "red";

    if (time >= 1 && time <= 7) {
        console.log(time);
        document.getElementById(now["DayNumber"] + "_" + time).style.backgroundColor = "#0000ff";
    }    

}

setInterval('showClock1()',1000);
