app.directive('fileReader', function () {
  return {
    scope: {
      fileReader: "="
    },
    link: function (scope, element) {
      //모든 셀에 대하여 아래와 같이 키 값들을 정의내리기
      var keyMap = {
        G5: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        G6: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        G7: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'porridge'],
        G8: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        G9: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G10: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G11: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G12: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G17: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'salad'],
        G18: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'dressing'],
        G19: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        I9: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'noodle'],
        I10: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'rice'],
        I11: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        I12: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'drink'],
        I17: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'bread'],
        I18: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'drink'],
        I19: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'fruit'],
        G25: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        G26: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        G27: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        G28: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G29: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G30: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G35: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        G36: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'soup'],
        G37: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G38: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G39: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G43: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'drink'],
        G47: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        G48: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        G49: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        G50: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        G51: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G52: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        G53: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K5: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        K6: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        K7: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'porridge'],
        K8: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        K9: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K10: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K11: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K12: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K17: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'salad'],
        K18: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'dressing'],
        K19: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        M9: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'noodle'],
        M10: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'rice'],
        M11: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        M12: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'drink'],
        M17: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'bread'],
        M18: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'drink'],
        M19: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'fruit'],
        K25: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        K26: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        K27: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        K28: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K29: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K30: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K35: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        K36: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'soup'],
        K37: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K38: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K39: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K43: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'drink'],
        K48: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        K49: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        K50: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        K51: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K52: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        K53: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O5: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        O6: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        O7: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'porridge'],
        O8: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        O9: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O10: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O11: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O12: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O17: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'salad'],
        O18: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'dressing'],
        O19: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        Q9: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'noodle'],
        Q10: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'rice'],
        Q11: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        Q12: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'drink'],
        Q17: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'bread'],
        Q18: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'drink'],
        Q19: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'fruit'],
        O25: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        O26: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        O27: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        O28: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O29: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O30: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O35: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        O36: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'soup'],
        O37: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O38: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O39: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O43: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'drink'],
        O48: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        O49: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        O50: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        O51: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O52: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        O53: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S5: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        S6: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        S7: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'porridge'],
        S8: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        S9: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S10: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S11: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S12: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S17: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'salad'],
        S18: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'dressing'],
        S19: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        U9: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'noodle'],
        U10: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'rice'],
        U11: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        U12: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'drink'],
        U17: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'bread'],
        U18: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'drink'],
        U19: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'fruit'],
        S25: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        S26: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        S27: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        S28: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S29: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S30: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S35: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        S36: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'soup'],
        S37: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S38: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S39: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S43: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'drink'],
        S47: ['dinnerNoodleObj', ['time', 'category', 'date', 'menus'], 'noodle'],
        S48: ['dinnerNoodleObj', ['time', 'category', 'date', 'menus'], 'rice'],
        S49: ['dinnerNoodleObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        S50: ['dinnerNoodleObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S51: ['dinnerNoodleObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        S52: ['dinnerNoodleObj', ['time', 'category', 'date', 'menus'], 'drink'],
        U47: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        U48: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        U49: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        U50: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        U51: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        U52: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W5: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        W6: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        W7: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'porridge'],
        W8: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        W9: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W10: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W11: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W12: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W17: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'salad'],
        W18: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'dressing'],
        W19: ['morningSaladObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        Y9: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'noodle'],
        Y10: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'rice'],
        Y11: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        Y12: ['morningNoodleObj', ['time', 'category', 'date', 'menus'], 'drink'],
        Y17: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'bread'],
        Y18: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'drink'],
        Y19: ['morningTakeoutObj', ['time', 'category', 'date', 'menus'], 'fruit'],
        W25: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        W26: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        W27: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        W28: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W29: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W30: ['lunchKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W35: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        W36: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'soup'],
        W37: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W38: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W39: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W43: ['lunchWesternObj', ['time', 'category', 'date', 'menus'], 'drink'],
        W48: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'rice'],
        W49: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'soup'],
        W50: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'maindish'],
        W51: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W52: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
        W53: ['dinnerKoreanObj', ['time', 'category', 'date', 'menus'], 'sidedish'],
      };

      var obj = {};
      var val = 'check';
      //
      var keys = keyMap['D5'];
      var o = obj;
      for (var i = 0; i < keys.length-1; i++) {
        var key = keys[i];
        if (typeof key == "object") {
          for (var j = 0; j < key.length; j++) {
            var subkey = key[j];
            if (!o[subkey]) o[subkey] = {};
            if (subkey =='menus') o = o[subkey]
          }
        } else {
          if (!o[key]) o[key] = {};
          o = o[key]
        }
      }
      o[keys[i]] = val;


      var morningKoreanObj = {"time": "morning", "category": "korean",
        "menus": {"rice": [], "soup": null, "porridge": null, "maindish": null, "sidedish": [], "drink": null}};
      var morningNooldleObj = {"time": "morning", "category": "noodle",
        "menus": {"noodle": null, "rice": [], "sidedish": null, "drink": null}};
      var morningSaladObj = {"time": "morning", "category": "salad",
        "menus": {"salad": null, "dressing": null, "sidedish": []}};
      var morningTakeoutObj = {"time": "morning", "category": "takeout",
        "menus": {"bread": null, "drink": [], "fruit": null}};
      var lunchKoreanObj = {"time": "lunch", "category": "korean",
        "menus": {"rice": [], "soup": null, "maindish": null, "sidedish": []}};
      var lunchWesternObj = {"time": "lunch", "category": "western",
        "menus": {"maindish": null, "soup": null, "rice": [], "sidedish": []}};
      var dinnerKoreanObj = {"time": "dinner", "category": "korean",
        "menus": {"rice": [], "soup": [], "maindish": null, "sidedish": []}};
      var dinnerNoodleObj = {"time": "dinner", "category": "noodle",
        "menus": {"noodle": null, "rice": [], "sidedish": null, "drink": null}};

      $(element).on('change', function (changeEvent) {
        var files = changeEvent.target.files;
        var i, f;
        for (i = 0, f = files[i]; i != files.length; ++i) {
          var reader = new FileReader();
          var name = f.name;
          reader.onload = function (e) {
            var data = e.target.result;

            var workbook = XLSX.read(data, {type: 'binary'});

            /* DO SOMETHING WITH workbook HERE */
            var array = [];
            var expText = /[가-힣& ]+|(\d+\/\d+)+/g;
            var menuArray = [];
            var sheet_name_list = workbook.SheetNames;
            // y - 시트명, z - 셀명, v - 셀 값
            sheet_name_list.forEach(function (y) { /* iterate through sheets */
              var worksheet = workbook.Sheets[y];
              var num = 0;
              for (z in worksheet) {
                /* all keys that do not begin with "!" correspond to cell addresses */
                if (z[0] === '!') continue;
                console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));

                // 함수를 호출해서 어디에 할당되는 놈인지 확인해야함
                do {
                  var oldString = expText.exec(worksheet[z].v);
                  if (oldString) {
                    console.log(oldString);
                    console.log(oldString[0]);
                    //셀주소를 바탕으로 날짜, 시간대 구분하기
                    var cellNo = Number(z.slice(1, 3));
                    var cellStr = z.slice(0, 1);
                    console.log(cellNo);
                    console.log(cellStr);
                    var newString = oldString[0].replace(/ /g, '');
                    if (newString !== '') {
                      if (cellNo == 3) {
                        var dateList = [];
                        dateList.push(newString);
                        //newObj['morning'] = {};
                        //newObj['morning']['rice'] = [];
                        //newObj['morning']['soup'] = [];
                        //newObj['morning']['noodle'] = [];
                        //newObj['morning']['maindish'] = [];
                        //newObj['morning']['sidedish'] = [];
                        //newObj['morning']['bread'] = [];
                        //newObj['morning']['drink'] = [];
                        //newObj['morning']['fruit'] = [];
                        //newObj['morning']['salad'] = [];
                        //newObj['lunch'] = {};
                        //newObj['lunch']['rice'] = [];
                        //newObj['lunch']['soup'] = [];
                        //newObj['lunch']['maindish'] = [];
                        //newObj['lunch']['sidedish'] = [];
                        //newObj['dinner'] = {};
                        //newObj['dinner']['rice'] = [];
                        //newObj['dinner']['soup'] = [];
                        //newObj['dinner']['maindish'] = [];
                        //newObj['dinner']['sidedish'] = [];
                        menuArray.push(newObj);
                      } else if([5,6,7,8,9,10,11,12,17,18,19].indexOf()(cellNo) >= 0) {
                        if (['D'].indexOf(cellStr) >= 0) {
                          menuArray[0]
                        }
                      }
                      //} else if (['D', 'E', 'F'].indexOf(cellStr) >= 0) {
                      //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
                      //    menuArray[0]['morning'].push(newString);
                      //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
                      //    menuArray[0]['lunch'].push(newString);
                      //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
                      //    menuArray[0]['dinner'].push(newString);
                      //  }
                      //} else if (['H', 'I', 'J'].indexOf(cellStr) >= 0) {
                      //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
                      //    menuArray[1]['morning'].push(newString);
                      //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
                      //    menuArray[1]['lunch'].push(newString);
                      //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
                      //    menuArray[1]['dinner'].push(newString);
                      //  }
                      //} else if (['L', 'M', 'N'].indexOf(cellStr) >= 0) {
                      //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
                      //    menuArray[2]['morning'].push(newString);
                      //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
                      //    menuArray[2]['lunch'].push(newString);
                      //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
                      //    menuArray[2]['dinner'].push(newString);
                      //  }
                      //} else if (['P', 'Q', 'R'].indexOf(cellStr) >= 0) {
                      //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
                      //    menuArray[3]['morning'].push(newString);
                      //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
                      //    menuArray[3]['lunch'].push(newString);
                      //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
                      //    menuArray[3]['dinner'].push(newString);
                      //  }
                      //} else if (['T', 'U', 'V'].indexOf(cellStr) >= 0) {
                      //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
                      //    menuArray[4]['morning'].push(newString);
                      //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
                      //    menuArray[4]['lunch'].push(newString);
                      //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
                      //    menuArray[4]['dinner'].push(newString);
                      //  }
                      //}
                      //array.push(newString);
                      num += 1;
                    }
                    console.log(num);
                  }
                } while (oldString);
              }
            });
            //scope.fileReader = array;
            scope.fileReader = menuArray;
            scope.$parent.$digest();
          };
          reader.readAsBinaryString(f);
        }
      })
    }
  }
});
