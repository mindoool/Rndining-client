app.controller('WeeklymenuController', ['$scope', function ($scope) {
    $scope.list = [['breakfast', "아침"], ['lunch1', '점심(한식)'], ['lunch2', '점심(양식)'], ['dinner', '저녁']];
    $scope.weekly = [
        {
            "date": {
                "year": 2015,
                "month": 10,
                "date": 5,
                "day": '월요일',
                "simpledate": 151005,
                "fulldate": "2015.10.5(월)"
            },
            "breakfast": {
                "time": "아침",
                "rice": "현미밥/쌀밥",
                "soup": "시금치된장국",
                "maindish": "매콤돈육장조림",
                "sidedish1": "견과류멸치볶음",
                "sidedish2": "부추겉절이",
                "sidedish3": "포기김치",
                "sidedish4": "요구르트"
            },
            "lunch1": {
                "time": "점심(한식)",
                "rice": "흑미밥/쌀밥",
                "soup": "저염콩나물국",
                "maindish": "닭볶음탕",
                "sidedish1": "무말랭이곤약조림",
                "sidedish2": "이색겉절이",
                "sidedish3": "포기김치"
            },
            "lunch2": {
                "time": "점심(양식)",
                "rice": "카오팟(태국식볶음밥)",
                "soup": "미소시루/쌀밥",
                "maindish": "생선까스+타르타르소스",
                "sidedish1": "양배추적채샐러드+이탈리안드레싱",
                "sidedish2": "포기김치",
                "sidedish3": "로즈마리차/옥수수보리차"
            },
            "dinner": {
                "time": "저녁",
                "rice": "현미밥/쌀밥",
                "soup": "부대찌개(양지탕)",
                "maindish": "가자미양념구이",
                "sidedish1": "반달감자볶음",
                "sidedish2": "참나물겉절이",
                "sidedish3": "깍두기"
            }
        },
        {
            "date": {
                "year": 2015,
                "month": 10,
                "date": 6,
                "day": '화요일',
                "simpledate": 151006,
                "fulldate": "2015.10.6(화)"
            },
            "breakfast": {
                "time": "아침",
                "rice": "현미밥/쌀밥+카레소스",
                "soup": "팽이장국",
                "maindish": "만두찜",
                "sidedish1": "양배추샐러드+오리엔탈드레싱",
                "sidedish2": "오이지무침",
                "sidedish3": "포기김치",
                "sidedish4": "요구르트"
            },
            "lunch1": {
                "time": "점심(한식)",
                "rice": "병아리콩밥/쌀밥",
                "soup": "청양초된장찌개",
                "maindish": "고갈비",
                "sidedish1": "옛날소세지전+케찹",
                "sidedish2": "미나리숙주나물",
                "sidedish3": "포기김치"
            },
            "lunch2": {
                "time": "점심(양식)",
                "rice": "짜장면",
                "soup": "계란파국/현미밥/쌀밥",
                "maindish": "고추잡채+꽃빵",
                "sidedish1": "반달단무지",
                "sidedish2": "포기김치",
                "sidedish3": "매실차/옥수수보리차"
            },
            "dinner": {
                "time": "저녁",
                "rice": "현미밥/쌀밥",
                "soup": "경상도식쇠고기무국(닭곰탕)",
                "maindish": "떡갈비파프리카조림",
                "sidedish1": "명엽채볶음",
                "sidedish2": "얼갈이겉절이",
                "sidedish3": "깍두기"
            }
        }
    ];

    //식단 Default 값
    $scope.today = $scope.weekly[0];
    $scope.date = $scope.weekly[0].date.fulldate;
    $scope.time = $scope.weekly[0].lunch2;

    //날짜 고르면 해당 날짜의 모든 식단을 보여주기
    $scope.selectDate = function (simpledate) {
        for (var i = 0; i < $scope.weekly.length; i++) {
            if ($scope.weekly[i].date.simpledate == simpledate) {
                $scope.today = $scope.weekly[i];
                break;
                console.log('success');
            }
        }
    };
    $scope.selectTime = function (time, date) {
        for (var i = 0; i < $scope.weekly.length; i++) {
            for (var j in $scope.weekly[i]) {
                if (j == "date") {
                    continue;
                }
                else if (j == time) {
                    if ( $scope.weekly[i].date.simpledate == date) {
                        $scope.date = $scope.weekly[i].date.fulldate;
                        $scope.time = $scope.weekly[i][time];
                        break;
                    }
                }
            }
        };

    }
}
])
;