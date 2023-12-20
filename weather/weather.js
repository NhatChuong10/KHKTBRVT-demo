 const options = {method: 'GET', headers: {accept: 'application/json'}};
var weatherFullDayMax = [];
var weatherFullDayMin = [];
var TroiDep = -2, MayRairac = 0, NhieuMay = 0, SuongMu = 0, MuaPhun = 0, Mua = 0, MuaNho = 0, MuaNanghat = 0, tuyet = 0,  Bao = 0;
var comment = document.querySelector(".comment");

fetch('https://api.tomorrow.io/v4/weather/forecast?location=Th%C3%A0nh_Ph%E1%BB%91_V%C5%A9ng_T%C3%A0u&apikey=DKcRfa2FxnDg7Czy44AAmqJpJ3fQSiAD', options)
.then(response => response.json())
.then(response => {
    for(var i  = 0; i <= 5; i++){
        // weatherFullDayMax.push(response.timelines.daily[i].values.weatherCodeMax);
        // weatherFullDayMin.push(response.timelines.daily[i].values.weatherCodeMin);
        countWeather(response.timelines.daily[i].values.weatherCodeMax);
        countWeather(response.timelines.daily[i].values.weatherCodeMin);
        
    }
    var maxWeather = Math.max(TroiDep, MayRairac, NhieuMay, SuongMu, MuaPhun, Mua, MuaNho, MuaNanghat, tuyet, Bao);
    console.log(maxWeather);
    
    switch(maxWeather){
        case TroiDep:
                comment.innerText = 'Thời tiết tỉnh Bà Rịa - Vũng Tàu gần đây rất tốt, rất thích hợp để đi du lịch trong thời gian này';
                break;
        case MayRairac:
                comment.innerText = `Thời tiết tỉnh Bà Rịa - Vũng Tàu gần đây khá ổn, có mây rải rác nhưng không đáng kể, mọi người cũng có thể đi du lịch trong thời gian này`;
                break;
        case NhieuMay:
                comment.innerText = 'Thời tiết tỉnh Bà Rịa - Vũng Tàu gần đây có nhiều mây, có thể sẽ mưa ở nhiều nơi, mọi người khi ra ngoài nên trang bị thêm ô hoặc áo mưa. Đây là khoảng thời gian thời tiết khá thất thường, mọi người cân nhắc đi du lịch trong thời gian này!';
                break;
        case MuaPhun:
                comment.innerText = 'Thời tiết tỉnh Bà Rịa - Vũng Tàu gần đây xuất hiện nhiều mưa phùn, không phải là thời tiết thích hợp cho mọi người đi du lịch thời điểm hiện tại ';
                break;
        case Mua:
                comment.innerText = 'Thời tiết tỉnh Bà Rịa - Vũng Tàu gần đây mưa khá nhiều, mọi người chú ý đem theo ô, áo mưa. Thời tiết những ngày gần đây rõ ràng không phù hợp cho mọi người đi du lịch!';
                break;
        case MuaNho:
                comment.innerText = 'Thời tiết tỉnh Bà Rịa - Vũng Tàu gần đây xuất hiện nhiều những cơn mưa nhỏ, mọi người chú ý không quên đem theo ô hoặc áo mưa. Với thời tiết này bạn hoàn toàn có thể cân nhắc đến và trải nghiệm du lịch tại tỉnh Bà Rịa - Vũng Tàu cùng với những cơn mưa nhẹ thơ mộng';
                break;
        case MuaNanghat:
                comment.innerText = 'Thời tiết tỉnh Bà Rịa - Vũng Tàu mưa vô cùng lớn, mọi người không nên đi du lịch tại tỉnh Bà Rịa - Vũng Tàu thời điểm này';
                break;
        case tuyet:
                comment.innerText = 'Hôm nay trời có tuyết';
                break;
        case Bao:
                comment.innerText = 'Hiện tại tỉnh Bà Rịa - Vũng Tàu phải đối mặt với 1 cơn bão vô cùng nguy hiểm. Mọi người tuyệt đối không được đi du lịch tại tỉnh Bà Rịa - Vũng Tàu trong khoảng thời gian này!';
                break;
    }
  })
  .catch(err => console.error(err));
// console.log(weatherFullDayMax);


var countWeather = (value) => {
        switch(value){
            case 1000:
            case 1100:
                    ++TroiDep;
                    break;
            case 1101:
                    ++MayRairac;
                    break;
            case 1102:
            case 1001:
                    ++NhieuMay;
                    break;
            case 2000:
            case 2100:
                    ++SuongMu;
                    break;
            case 4000:
                    ++MuaPhun;
                    break;
            case 4001:
                    ++Mua;
                    break;
            case 4200:
                    ++MuaNho;
                    break;
            case 4201:
                    ++MuaNanghat;
                    break;
            case 5000:
            case 5001:
            case 5100:
                    ++tuyet;
                    break;
            case 8000:
                    ++Bao;
                    break;
        }    
    }

// console.log(TroiDep, MayRairac, NhieuMay, SuongMu, MuaPhun, Mua, MuaNho, MuaNanghat, tuyet, Bao);

