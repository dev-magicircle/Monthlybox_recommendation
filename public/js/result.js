window.onload = function() {
    result_1(); //첫번째추천박스
    result_1_text(); //월별멘트
    pay_text(); //지출성향
    worry_1(); //첫번째걱정
    worry_2(); //두번째걱정
    result_2(); //두번째추천박스
    result_2_re(); //두번째추천박스
    result_2_text();
    img();
};

//첫번째추천박스
function result_1() {
    let result_1 = sessionStorage.getItem('result_1'); //첫번째추천박스
    document.getElementById('result_1').innerHTML = result_1;
    document.getElementById('recommendation_box1').innerHTML=result_1;
    document.getElementById('link_box1').innerHTML=result_1;
}


//월별멘트
function result_1_text() {
    let month = sessionStorage.getItem('result_1_month'); //임신개월
    console.log(month);
    let text;
    if (month == 2) {
        text = '부지런히 영양분을 먹을 수 있도록 건강 간식과 성분 걱정 없는 구강 튼튼 제품을 담은 박스랍니다.';
    } else if (month == 3) {
        text = '미세먼지 많은 요즘, 외출이 걱정이라면 마음껏 사용할 수 있는 안전한 유기농 헤어제품을 보내드려요.';
    } else if (month == 4) {
        text = '미리미리 윗배, 아랫배, 엉덩이, 허벅지까지 꼼꼼하게! 안전한 성분의 튼살 케어 제품을 담았어요.';
    } else if (month == 5) {
        text = '곧 어떤 자세로도 잠자는 게 힘들어질 수 있어요. 예비 엄마의 쾌적한 수면을 위해 준비된 박스랍니다.';
    } else if (month == 6) {
        text = '임신 중 미처 바꿀 생각을 못하는 생활 용품이 너무 많죠? 안전하게 교체하도록 도와드릴게요!';
    } else if (month == 7) {
        text = '아기를 만날 시기가 다가올수록 팔다리가 부을 수 있는 예비맘의 건강한 산책길을 위해 준비했어요.';
    } else if (month == 8) {
        text = '출산 세탁 준비는 물론 엄마 속옷을 세탁할 때도 상쾌한 기분이 느껴지도록 도와주는 박스예요.';
    } else if (month == 9) {
        text = '하나씩 사자니 배송비가 더 아까운 조리원 가방싸기! 순산을 기원하며 쏙쏙 담아보내드려요.';
    } else if (month == 10) {
        text = '10개월을 기다렸다! 그동안 정말 고생 많았던 엄마와 가족 모두를 위한 축하의 마음을 보내드려요!';
    } else if (month == 11) {
        text = '물에서 나온, 물을 좋아하는 아기로 만들어주기 위한 안전하고 귀여운 목욕 용품을 담았습니다.';
    } else if (month == 12) {
        text = '출산 후 가장 큰 걱정거리인 산후탈모를 위해 월간임신이 선별한 두피 릴렉싱 아이템들을 보내드려요!';
    } else if (month == 13) {
        text = '건강하게 자라준 아기에게 고맙고, 통잠의 기적이 찾아오기를 기원하며, 수고한 당신에게 Cheers!';
    } else if (month == 0) {
        text =
            '아직 몇개월인지 모르지만, 만국공통으로 안전한 성분의 제품으로 모두 바꾸며 아기를 기다리는 것이 좋아요! 건강도 챙기고 체력도 챙기도록 유기농 헤어 제품을 받으실 두피박스부터 추천할게요.';
    }
    document.getElementById('result_1_text').innerHTML = text;
}

//지출성향
function pay_text() {
    let pay_month = sessionStorage.getItem('pay_month');
    let pay_text;
    if (pay_month == 4) {
        pay_text = '가성비를 챙기는 당신, ';
    } else if (pay_month == 5) {
        pay_text = '아기자기한 행복을 꿈꾸는 당신, ';
    } else if (pay_month == 6) {
        pay_text = '프리미엄 라이프를 즐기는 당신, ';
    }
    document.getElementById('pay_text').innerHTML = pay_text;
}
//걱정1
function worry_1() {
    let worry_1 = sessionStorage.getItem('worry_1');
    document.getElementById('worry_1').innerHTML = worry_1;
}

//걱정2
function worry_2() {
    let worry_2 = sessionStorage.getItem('worry_2');
    document.getElementById('worry_2').innerHTML = worry_2;
}

//두번째추천박스
function result_2() {
    const month_arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0]; //월
    const worry_arr = [
        '스트레스 관리',
        '체중증가 관리',
        '튼살과 임신선 낯선 변화',
        '기존 가족 챙기기',
        '일과 임신의 병행',
        '아기의 안전한 성장',
        '출산의 공포',
        '경제적 부담',
    ];
    const box_arr = [
        '입덧박스',
        '헤어&바디박스',
        '튼살박스',
        '꿀잠박스',
        '생활박스',
        '부종박스',
        '런드리박스',
        '출산가방박스',
        '출산기념박스',
        '목욕박스',
        '두피릴렉싱박스',
        '100일의 기적',
        '헤어&바디박스',
    ];
    let worry_1_box = sessionStorage.getItem('worry_1_box');
    let worry_2_box = sessionStorage.getItem('worry_2_box');
    let result_1 = sessionStorage.getItem('result_1');
    let pay_box = sessionStorage.getItem('pay_box');
    let worry_1_month = sessionStorage.getItem('worry_1_month');
    let worry_2_month = sessionStorage.getItem('worry_2_month');
    let result_2;

    //걱정 두 박스가 같음
    if (worry_1_box == worry_2_box) {
        //첫 번째 추천박스랑도 같은 경우
        if (worry_1_box == result_1) {
            //소비성향 박스랑도 같은 경우
            if (worry_1_box == pay_box) {
                result_2_month = worry_1_month + 1;
                for (let i = 0; i < 13; i++) {
                    if (month_arr[i] == result_2_month) result_2 = box_arr[i];
                }
            }
            //소비성향 박스랑 다른 경우
            else if (worry_1_box != pay_box) {
                result_2 = pay_box;
            }
        }
        //첫 번째 추천박스랑 다른 경우
        else if (worry_1_box != result_1) {
            result_2 = worry_1_box;
        }
    }
    //박스 2개가 다른 경우
    else if (worry_1_box != worry_2_box) {
        if (worry_1_box == result_1) result_2 = worry_2_box;
        else if (worry_2_box == result_1) result_2 = worry_1_box;
        else {
            if (worry_1_month > worry_2_month) result_2 = worry_1_box;
            else result_2 = worry_2_box;
        }
    }
    document.getElementById('result_2').innerHTML = result_2;
    document.getElementById("recommendation_box2").innerHTML=result_2;
    sessionStorage.setItem('result_2', result_2);
    document.getElementById('link_box2').innerHTML=result_2;
}

function result_2_re() {
    let result_2 = sessionStorage.getItem('result_2');
    document.getElementById('result_2_re').innerHTML = result_2;
}

function result_2_text() {
    let result_2 = sessionStorage.getItem('result_2');
    if (result_2 == '입덧박스') {
        text = '부지런히 영양분을 먹을 수 있도록 건강 간식과 성분 걱정 없는 구강 튼튼 제품을 담은 박스랍니다.';
    } else if ((result_2 = '헤어&바디박스')) {
        text = '요즘같은 시기 특히 외출이 걱정이라면 마음껏 사용할 수 있는 안전한 유기농 헤어제품을 보내드려요.';
    } else if ((result_2 = '튼살박스')) {
        text = '미리미리 윗배, 아랫배, 엉덩이, 허벅지까지 꼼꼼하게! 안전한 성분의 튼살 케어 제품을 담았어요. ';
    } else if ((result_2 = '꿀잠박스')) {
        text = '곧 어떤 자세로도 잠자는 게 힘들어질 수 있어요. 예비 엄마의 쾌적한 수면을 위해 준비된 박스랍니다.';
    } else if ((result_2 = '생활박스')) {
        text = '임신 중 미처 바꿀 생각을 못하는 생활 용품이 너무 많죠? 안전하게 교체하도록 도와드릴게요!';
    } else if ((result_2 = '부종박스')) {
        text = '아기를 만날 시기가 다가올수록 팔다리가 부을 수 있는 예비맘의 건강한 산책길을 위해 준비했어요.';
    } else if ((result_2 = '런드리박스')) {
        text = '출산 세탁 준비는 물론 엄마 속옷을 세탁할 때도 상쾌한 기분이 느껴지도록 도와주는 박스예요.';
    } else if ((result_2 = '출산기념박스')) {
        text = '10개월을 기다렸다! 그동안 정말 고생 많았던 엄마와 가족 모두를 위한 축하의 마음을 보내드려요!';
    } else if ((result_2 = '출산가방박스')) {
        text = '하나씩 사자니 배송비가 더 아까운 조리원 가방싸기! 순산을 기원하며 쏙쏙 담아보내드려요.';
    } else if ((result_2 = '목욕박스')) {
        text = '물에서 나온, 물을 좋아하는 아기로 만들어주기 위한 안전하고 귀여운 목욕 용품을 담았습니다.';
    } else if ((result_2 = '두피릴렉싱박스')) {
        text = '출산 후 가장 큰 걱정거리인 산후탈모를 위해 월간임신이 선별한 두피 릴렉싱 아이템들을 보내드려요!';
    } else if ((result_2 = '100일의 기적 박스')) {
        text = '건강하게 자라준 아기에게 고맙고, 통잠의 기적이 찾아오기를 기원하며, 수고한 당신에게 Cheers!';
    }

    document.getElementById('result_2_text').innerHTML = text;
}

//이미지교체
function img() {
    let result_1 = sessionStorage.getItem('result_1');
    console.log(result_1);
    let result_2 = sessionStorage.getItem('result_2');
    if (result_1 == '100일의 기적 박스') {
        document.getElementById('result_1_img').src = 'img/box/100일의기적.jpg';
    } else if (result_1 == '꿀잠박스') {
        document.getElementById('result_1_img').src = 'img/box/꿀잠박스.png';
    } else if (result_1 == '두피릴렉싱박스') {
        document.getElementById('result_1_img').src = 'img/box/두피릴렉싱.jpg';
    } else if (result_1 == '런드리박스') {
        document.getElementById('result_1_img').src = 'img/box/런드리박스.jpg';
    } else if (result_1 == '목욕박스') {
        document.getElementById('result_1_img').src = 'img/box/목욕박스.jpg';
    } else if (result_1 == '부종박스') {
        document.getElementById('result_1_img').src = 'img/box/부종박스.jpg';
    } else if (result_1 == '생활박스') {
        document.getElementById('result_1_img').src = 'img/box/생활박스.jpg';
    } else if (result_1 == '입덧박스') {
        document.getElementById('result_1_img').src = 'img/box/입덧박스.png';
    } else if (result_1 == '출산가방박스') {
        document.getElementById('result_1_img').src = 'img/box/출산가방박스.jpg';
    } else if (result_1 == '출산기념박스') {
        document.getElementById('result_1_img').src = 'img/box/출산기념박스.png';
    } else if (result_1 == '튼살박스') {
        document.getElementById('result_1_img').src = 'img/box/튼살박스.jpg';
    } else if (result_1 == '헤어&바디박스') {
        document.getElementById('result_1_img').src = 'img/box/헤어&바디박스.jpg';
    }

    if (result_2 == '100일의 기적 박스') {
        document.getElementById('result_2_img').src = 'img/box/100일의기적.jpg';
    } else if (result_2 == '꿀잠박스') {
        document.getElementById('result_2_img').src = 'img/box/꿀잠박스.png';
    } else if (result_2 == '두피릴렉싱박스') {
        document.getElementById('result_2_img').src = 'img/box/두피릴렉싱.jpg';
    } else if (result_2 == '런드리박스') {
        document.getElementById('result_2_img').src = 'img/box/런드리박스.jpg';
    } else if (result_2 == '목욕박스') {
        document.getElementById('result_2_img').src = 'img/box/목욕박스.jpg';
    } else if (result_2 == '부종박스') {
        document.getElementById('result_2_img').src = 'img/box/부종박스.jpg';
    } else if (result_2 == '생활박스') {
        document.getElementById('result_2_img').src = 'img/box/생활박스.jpg';
    } else if (result_2 == '입덧박스') {
        document.getElementById('result_2_img').src = 'img/box/입덧박스.png';
    } else if (result_2 == '출산가방박스') {
        document.getElementById('result_2_img').src = 'img/box/출산가방박스.jpg';
    } else if (result_2 == '출산기념박스') {
        document.getElementById('result_2_img').src = 'img/box/출산기념박스.png';
    } else if (result_2 == '튼살박스') {
        document.getElementById('result_2_img').src = 'img/box/튼살박스.jpg';
    } else if (result_2 == '헤어&바디박스') {
        document.getElementById('result_2_img').src = 'img/box/헤어&바디박스.jpg';
    }
}