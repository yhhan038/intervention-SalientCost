
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
    price_txt = price_txt.replace(/(\s*)/g, "");
    price_txt = price_txt.slice(0,-1);
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


    var work_msg = ["이 금액을 벌려면 ", "최저시급 기준 " + String((price/work).toFixed(2)) + "시간 ", "일해야합니다. (최저시급 8,590원)\n"];
    var coffee_msg = ["이 금액이면 ", "커피 " + String((price/coffee).toFixed(2)) + " 잔", "을 살 수 있습니다. (아메리카노 2,000원) \n"];
    var chicken_msg = ["이 금액이면 ", "치킨 " + String((price/chicken).toFixed(2)) + " 마리", "를 먹을 수 있습니다. (치킨 15,000원) \n"];
    jjajang_msg = ["이 금액이면 ", "짜장면 " + String((price/jjajang).toFixed(2)) + " 그릇", "을 먹을 수 있습니다. (짜장면 5,300원)\n"];
    ramen_msg = ["이 금액이면 ", "라면 "+ String((price/ramen).toFixed(2)) + " 개", "를 먹을 수 있습니다. (라면 670 원)\n"];
    pork_msg = ["이 금액이면 ", "삼겹살 " + String((price/pork).toFixed(2)) + " 인분", "을 먹을 수 있습니다. (삼겹살 8,600 원)\n"];
    rice_msg = ["이 금액이면 ", "햇반 " + String((price/rice).toFixed(2)) + " 개", "를 살 수 있습니다. (햇반 1,200 원)\n"];
    triangle_msg = ["이 금액이면 ", "삼각김밥 " + String((price/triangle).toFixed(2)) + " 개", "를 먹을 수 있습니다. (삼각김밥 1,200 원)\n"];
    gimbab_msg = ["이 금액이면 ", "김밥 " + String((price/gimbab).toFixed(2)) + " 개", "를 먹을 수 있습니다. (김밥 1,200 원)\n"];
    water_msg = ["이 금액이면 ", "2L 생수 " + String((price/water).toFixed(2)) + " 개", "를 살 수 있습니다. (2L 생수 930원)\n"];
    alcohol_msg = ["이 금액이면 ", "소주/맥주 " + String((price/ramen).toFixed(2)) + " 병", "을 마실 수 있습니다. (소주/맥주 1,500 원)\n"];
    schoolfood_msg = ["이 금액이면 ", "학식을 " + String((price/schoolfood).toFixed(2)) + " 번", " 먹을 수 있습니다. (학식 4,000 원)\n"];
    car_msg = ["이 금액이면 ", "차로 " + String((price/ramen).toFixed(2)) + " km ", "달릴 수 있습니다. (주유비 1L 1,360 원, 연비 12km/1L)\n"];
    game_msg = ["이 금액이면 ", "PC방에서 " + String((price/game).toFixed(2)) + " 시간 ", "게임을 할 수 있습니다. (PC방 1시간 1,500 원)\n"];
    sing_msg = ["이 금액이면 ", "코인 노래방에서 노래를 " + String((price/sing).toFixed(2)) + "곡 ", "부를 수 있습니다. (1곡 500 원)\n"];
    traffic_msg = ["이 금액이면 ", "대중교통을 " + String((price/traffic).toFixed(2)) + " 회 ", "이용할 수 있습니다. (버스/지하철 1,250 원)\n"];
    tissue_msg = ["이 금액이면 ", "두루마지 휴지 " + String((price/tissue).toFixed(2)) + " 개", "를 살 수 있습니다. (휴지 830 원)\n"];
    travel_msg = ["이 금액을 ", String((travel/price).toFixed(2)) + " 번 아끼면 국내여행", "을 갈 수 있습니다. (국내여행 경비 200,000 원)\n"];
    airpod_msg = ["이 금액을 ", String((airpod/price).toFixed(2)) + " 번 아끼면 에어팟 프로", "를 살 수 있습니다. (에어팟 프로 251,000 원)\n"];
    dorm_msg = ["이 금액을 ", String((dorm/price).toFixed(2)) + " 번 아끼면 한달 치 기숙사비", "를 낼 수 있습니다. (기숙사비 1달 240,000 원)\n"];
    rent_msg = ["이 금액을 " , String((rent/price).toFixed(2)) + " 번 아끼면 한달 치 월세", "를 낼 수 있습니다. (월세 400,000 원)\n"];
    // id값인 salientCost인 태그에 결과를 추가한다.
    document.querySelector('#work').children[0].innerText = work_msg[0];
    document.querySelector('#work').children[1].innerText = work_msg[1];
    document.querySelector('#work').children[2].innerText = work_msg[2];
    document.querySelector('#coffee').children[0].innerText = coffee_msg[0];
    document.querySelector('#coffee').children[1].innerText = coffee_msg[1];
    document.querySelector('#coffee').children[2].innerText = coffee_msg[2];
    document.querySelector('#chicken').children[0].innerText = chicken_msg[0];
    document.querySelector('#chicken').children[1].innerText = chicken_msg[1];
    document.querySelector('#chicken').children[2].innerText = chicken_msg[2];


});


$('#drop-all li > a').on('click', function() {
    $('#drop-btn').text($(this).text());
    var select = $(this).attr('value');
    switch(select) {
        case 'jjajang':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = jjajang_msg[0];
            add.children[1].innerText = jjajang_msg[1];
            add.children[2].innerText = jjajang_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'ramen':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = ramen_msg[0];
            add.children[1].innerText = ramen_msg[1];
            add.children[2].innerText = ramen_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'pork':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = pork_msg[0];
            add.children[1].innerText = pork_msg[1];
            add.children[2].innerText = pork_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'rice':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = rice_msg[0];
            add.children[1].innerText = rice_msg[1];
            add.children[2].innerText = rice_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'triangle':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = triangle_msg[0];
            add.children[1].innerText = triangle_msg[1];
            add.children[2].innerText = triangle_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'gimbab':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = gimbab_msg[0];
            add.children[1].innerText = gimbab_msg[1];
            add.children[2].innerText = gimbab_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
         case 'water':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = water_msg[0];
            add.children[1].innerText = water_msg[1];
            add.children[2].innerText = water_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'alcohol':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = alcohol_msg[0];
            add.children[1].innerText = alcohol_msg[1];
            add.children[2].innerText = alcohol_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'schoolfood':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = schoolfood_msg[0];
            add.children[1].innerText = schoolfood_msg[1];
            add.children[2].innerText = schoolfood_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'car':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = car_msg[0];
            add.children[1].innerText = car_msg[1];
            add.children[2].innerText = car_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'game':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = game_msg[0];
            add.children[1].innerText = game_msg[1];
            add.children[2].innerText = game_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'sing':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = sing_msg[0];
            add.children[1].innerText = sing_msg[1];
            add.children[2].innerText = sing_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'traffic':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = traffic_msg[0];
            add.children[1].innerText = traffic_msg[1];
            add.children[2].innerText = traffic_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'tissue':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = tissue_msg[0];
            add.children[1].innerText = tissue_msg[1];
            add.children[2].innerText = tissue_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'travel':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = travel_msg[0];
            add.children[1].innerText = travel_msg[1];
            add.children[2].innerText = travel_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'airpod':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = airpod_msg[0];
            add.children[1].innerText = airpod_msg[1];
            add.children[2].innerText = airpod_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'dorm':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = dorm_msg[0];
            add.children[1].innerText = dorm_msg[1];
            add.children[2].innerText = dorm_msg[2];
            document.querySelector('#showingCost').appendChild(add);
            break;
        case 'rent':
            var add = document.getElementById('temp').cloneNode(true);
            add.children[0].innerText = rent_msg[0];
            add.children[1].innerText = rent_msg[1];
            add.children[2].innerText = rent_msg[2];
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