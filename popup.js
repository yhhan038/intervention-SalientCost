
var jjajang_msg;
var ramen_msg;
var pork_msg;
var rice_msg;
var triangle_msg;
var gimbab_msg;
var water_msg;
var alcohol_msg;
var schoolfood_msg;
var car_msg;
var game_msg;
var sing_msg;
var traffic_msg;
var tissue_msg;
var travel_msg;
var airpod_msg;
var dorm_msg;
var rent_msg;


chrome.storage.sync.get(function(data) {
    var price_txt = data.price;
    $('#cost').text(price_txt);
    price_txt = price_txt.slice(0,-2);
    price_txt = price_txt.replace(',', '');
    var price = Number(price_txt);

    var work = 8590;
    var coffee = 2000;
    var chicken = 15000;
    var jjajang = 5300;
    var ramen = 670;
    var pork = 8600;
    var rice = 1200;
    var triangle = 1200;
    var gimbab = 2300;
    var water = 930;
    var alcohol = 1500;
    var schoolfood = 4000;
    var car = 113;
    var game = 1500;
    var sing = 500;
    var traffic = 1250;
    var tissue = 830;
    var travel = 200000;
    var airpod = 251000;
    var dorm = 240000;
    var rent = 400000;


    var work_msg = "이 금액을 벌려면 최저시급 기준 " + String((price/work).toFixed(2)) + "시간 일해야합니다. (최저시급 8,590원)\n";
    var coffee_msg = "이 금액이면 커피 " + String((price/coffee).toFixed(2)) + " 잔을 살 수 있습니다. (아메리카노 2,000원) \n";
    var chicken_msg = "이 금액이면 치킨 " + String((price/chicken).toFixed(2)) + " 마리를 먹을 수 있습니다. (치킨 15,000원) \n";
    jjajang_msg = "이 금액이면 짜장면 " + String((price/jjajang).toFixed(2)) + " 그릇을 먹을 수 있습니다. (짜장면 5,300원)\n";
    ramen_msg = "이 금액이면 라면 " + String((price/ramen).toFixed(2)) + " 개를 먹을 수 있습니다. (라면 670 원)";
    pork_msg = "이 금액이면 삼겹살 " + String((price/pork).toFixed(2)) + " 인분을 먹을 수 있습니다. (삼겹살 8,600 원)\n";
    rice_msg = "이 금액이면 햇반 " + String((price/rice).toFixed(2)) + " 개를 살 수 있습니다. (햇반 1,200 원)\n";
    triangle_msg = "이 금액이면 삼각김밥 " + String((price/triangle).toFixed(2)) + " 개를 먹을 수 있습니다. (삼각김밥 1,200 원)\n";
    gimbab_msg = "이 금액이면 김밥 " + String((price/gimbab).toFixed(2)) + " 개를 먹을 수 있습니다. (김밥 1,200 원)\n";
    water_msg = "이 금액이면 2L 생수 " + String((price/water).toFixed(2)) + " 개를 살 수 있습니다. (2L 생수 930원)\n";
    alcohol_msg = "이 금액이면 소주/맥주 " + String((price/ramen).toFixed(2)) + " 병을 마실 수 있습니다. (소주/맥주 1,500 원)\n\n";
    schoolfood_msg = "이 금액이면 학식을 " + String((price/schoolfood).toFixed(2)) + " 번 먹을 수 있습니다. (학식 4,000 원)\n";
    car_msg = "이 금액이면 차로 " + String((price/ramen).toFixed(2)) + " km 달릴 수 있습니다. (주유비 1L 1,360 원, 연비 12km/1L)\n";
    game_msg = "이 금액이면 PC방에서 " + String((price/game).toFixed(2)) + " 시간 게임을 할 수 있습니다. (PC방 1시간 1,500 원)\n";
    sing_msg = "이 금액이면 코인 노래방에서 노래를 " + String((price/sing).toFixed(2)) + "곡 부를 수 있습니다. (1곡 500 원)\n";
    traffic_msg = "이 금액이면  대중교통을 " + String((price/traffic).toFixed(2)) + " 회 이용할 수 있습니다. (버스/지하철 1,250 원)\n";
    tissue_msg = "이 금액이면 두루마지 휴지 " + String((price/tissue).toFixed(2)) + " 개를 살 수 있습니다. (휴지 830 원)\n";
    travel_msg = "이 금액을 " + String((travel/price).toFixed(2)) + " 번 아끼면 국내여행을 갈 수 있습니다. (국내여행 경비 200,000 원)\n";
    airpod_msg = "이 금액을 " + String((airpod/price).toFixed(2)) + " 번 아끼면 에어팟 프로를 살 수 있습니다. (에어팟 프로 251,000 원)\n";
    dorm_msg = "이 금액을 " + String((dorm/price).toFixed(2)) + " 번 아끼면 한달 치 기숙사비를 낼 수 있습니다. (기숙사비 1달 240,000 원)\n";
    rent_msg = "이 금액을 " + String((rent/price).toFixed(2)) + " 번 아끼면 한달 치 월세를 낼 수 있습니다. (월세 400,000 원)\n";
    // id값인 salientCost인 태그에 결과를 추가한다.
    document.querySelector('#coffee').innerText = coffee_msg;
    document.querySelector('#work').innerText = work_msg;
    document.querySelector('#chicken').innerText = chicken_msg;
    document.querySelector('#jjajang').innerText = jjajang_msg;


});


$('#drop-all li > a').on('click', function() {
    $('#drop-btn').text($(this).text());
    var select = $(this).attr('value');
    switch(select) {
        case 'jjajang':
            var add = document.createElement('div');
            add.innerText = jjajang_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'ramen':
            var add = document.createElement('div');
            add.innerText = ramen_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'pork':
            var add = document.createElement('div');
            add.innerText = pork_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'rice':
            var add = document.createElement('div');
            add.innerText = rice_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'triangle':
            var add = document.createElement('div');
            add.innerText = triangle_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'gimbab':
            var add = document.createElement('div');
            add.innerText = gimbab_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
         case 'water':
            var add = document.createElement('div');
            add.innerText = water_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'alcohol':
            var add = document.createElement('div');
            add.innerText = alcohol_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'schoolfood':
            var add = document.createElement('div');
            add.innerText = schoolfood_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'car':
            var add = document.createElement('div');
            add.innerText = car_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'game':
            var add = document.createElement('div');
            add.innerText = game_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'sing':
            var add = document.createElement('div');
            add.innerText = sing_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'traffic':
            var add = document.createElement('div');
            add.innerText = traffic_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'tissue':
            var add = document.createElement('div');
            add.innerText = tissue_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'travel':
            var add = document.createElement('div');
            add.innerText = travel_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'airpod':
            var add = document.createElement('div');
            add.innerText = airpod_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'dorm':
            var add = document.createElement('div');
            add.innerText = dorm_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'rent':
            var add = document.createElement('div');
            add.innerText = rent_msg;
            document.querySelector('#showingCost').appendChild(add);
            break;
    }
    //$('showingCost').appendChild()
});

document.getElementById("s-done").addEventListener("click",
    function() {
    console.log("click!");
    chrome.storage.sync.set({done:true});

}, false);