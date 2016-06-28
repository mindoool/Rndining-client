app.directive('fileReader', function () {
  return {
    scope: {
      fileReader: "="
    },
    link: function (scope, element) {
      //모든 셀에 대하여 아래와 같이 키 값들을 정의내리기
      var keyMap = {
        G5: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'rice'} ,
        G6: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'soup'} ,
        G7: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'porridge'} ,
        G8: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'maindish'} ,
        G9: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        G10: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        G11: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        G12: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        G17: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'salad'} ,
        G18: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'dressing'} ,
        G19: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'sidedish'} ,
        I9: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'noodle'} ,
        I10: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'rice'} ,
        I11: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'sidedish'} ,
        I12: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'drink'} ,
        I17: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'bread'} ,
        I18: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'drink'} ,
        I19: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'fruit'} ,
        G25: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'rice'} ,
        G26: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'soup'} ,
        G27: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'maindish'} ,
        G28: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        G29: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        G30: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        G35: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'maindish'} ,
        G36: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'soup'} ,
        G37: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        G38: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        G39: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        G43: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'drink'} ,
        G47: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'rice'} ,
        G48: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'soup'} ,
        G49: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'soup'} ,
        G50: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'maindish'} ,
        G51: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        G52: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        G53: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        K5: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'rice'} ,
        K6: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'soup'} ,
        K7: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'porridge'} ,
        K8: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'maindish'} ,
        K9: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        K10: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        K11: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        K12: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        K17: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'salad'} ,
        K18: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'dressing'} ,
        K19: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'sidedish'} ,
        M9: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'noodle'} ,
        M10: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'rice'} ,
        M11: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'sidedish'} ,
        M12: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'drink'} ,
        M17: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'bread'} ,
        M18: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'drink'} ,
        M19: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'fruit'} ,
        K25: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'rice'} ,
        K26: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'soup'} ,
        K27: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'maindish'} ,
        K28: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        K29: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        K30: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        K35: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'maindish'} ,
        K36: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'soup'} ,
        K37: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        K38: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        K39: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        K43: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'drink'} ,
        K48: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'rice'} ,
        K49: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'soup'} ,
        K50: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'maindish'} ,
        K51: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        K52: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        K53: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        O5: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'rice'} ,
        O6: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'soup'} ,
        O7: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'porridge'} ,
        O8: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'maindish'} ,
        O9: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        O10: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        O11: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        O12: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        O17: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'salad'} ,
        O18: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'dressing'} ,
        O19: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'sidedish'} ,
        Q9: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'noodle'} ,
        Q10: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'rice'} ,
        Q11: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'sidedish'} ,
        Q12: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'drink'} ,
        Q17: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'bread'} ,
        Q18: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'drink'} ,
        Q19: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'fruit'} ,
        O25: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'rice'} ,
        O26: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'soup'} ,
        O27: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'maindish'} ,
        O28: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        O29: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        O30: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        O35: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'maindish'} ,
        O36: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'soup'} ,
        O37: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        O38: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        O39: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        O43: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'drink'} ,
        O48: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'rice'} ,
        O49: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'soup'} ,
        O50: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'maindish'} ,
        O51: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        O52: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        O53: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        S5: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'rice'} ,
        S6: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'soup'} ,
        S7: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'porridge'} ,
        S8: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'maindish'} ,
        S9: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        S10: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        S11: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        S12: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        S17: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'salad'} ,
        S18: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'dressing'} ,
        S19: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'sidedish'} ,
        U9: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'noodle'} ,
        U10: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'rice'} ,
        U11: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'sidedish'} ,
        U12: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'drink'} ,
        U17: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'bread'} ,
        U18: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'drink'} ,
        U19: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'fruit'} ,
        S25: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'rice'} ,
        S26: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'soup'} ,
        S27: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'maindish'} ,
        S28: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        S29: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        S30: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        S35: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'maindish'} ,
        S36: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'soup'} ,
        S37: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        S38: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        S39: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        S43: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'drink'} ,
        S47: {"name":'dinnerNoodleObj', "time": 'dinner', "category": 'Noodle', "menus": 'noodle'} ,
        S48: {"name":'dinnerNoodleObj', "time": 'dinner', "category": 'Noodle', "menus": 'rice'} ,
        S49: {"name":'dinnerNoodleObj', "time": 'dinner', "category": 'Noodle', "menus": 'maindish'} ,
        S50: {"name":'dinnerNoodleObj', "time": 'dinner', "category": 'Noodle', "menus": 'sidedish'} ,
        S51: {"name":'dinnerNoodleObj', "time": 'dinner', "category": 'Noodle', "menus": 'sidedish'} ,
        S52: {"name":'dinnerNoodleObj', "time": 'dinner', "category": 'Noodle', "menus": 'drink'} ,
        U47: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'rice'} ,
        U48: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'soup'} ,
        U49: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'maindish'} ,
        U50: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        U51: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        U52: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        W5: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'rice'} ,
        W6: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'soup'} ,
        W7: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'porridge'} ,
        W8: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'maindish'} ,
        W9: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        W10: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        W11: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        W12: {"name":'morningKoreanObj', "time": 'morning', "category": 'Korean', "menus": 'sidedish'} ,
        W17: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'salad'} ,
        W18: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'dressing'} ,
        W19: {"name":'morningSaladObj', "time": 'morning', "category": 'Salad', "menus": 'sidedish'} ,
        Y9: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'noodle'} ,
        Y10: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'rice'} ,
        Y11: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'sidedish'} ,
        Y12: {"name":'morningNoodleObj', "time": 'morning', "category": 'Noodle', "menus": 'drink'} ,
        Y17: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'bread'} ,
        Y18: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'drink'} ,
        Y19: {"name":'morningTakeoutObj', "time": 'morning', "category": 'Takeout', "menus": 'fruit'} ,
        W25: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'rice'} ,
        W26: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'soup'} ,
        W27: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'maindish'} ,
        W28: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        W29: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        W30: {"name":'lunchKoreanObj', "time": 'lunch', "category": 'Korean', "menus": 'sidedish'} ,
        W35: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'maindish'} ,
        W36: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'soup'} ,
        W37: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        W38: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        W39: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'sidedish'} ,
        W43: {"name":'lunchWesternObj', "time": 'lunch', "category": 'Western', "menus": 'drink'} ,
        W48: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'rice'} ,
        W49: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'soup'} ,
        W50: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'maindish'} ,
        W51: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        W52: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
        W53: {"name":'dinnerKoreanObj', "time": 'dinner', "category": 'Korean', "menus": 'sidedish'} ,
      };

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
            var menuArray = [];
            var sheet_name_list = workbook.SheetNames;
            // y - 시트명, z - 셀명, v - 셀 값
            sheet_name_list.forEach(function (y) { /* iterate through sheets */
              var worksheet = workbook.Sheets[y];
              var obj = {};
              var cellDateMap = {
                G: /[0-9]\/[0-9]+/g.exec(worksheet['G3'].v),
                I: /[0-9]\/[0-9]+/g.exec(worksheet['G3'].v),
                K: /[0-9]\/[0-9]+/g.exec(worksheet['K3'].v),
                M: /[0-9]\/[0-9]+/g.exec(worksheet['K3'].v),
                O: /[0-9]\/[0-9]+/g.exec(worksheet['O3'].v),
                Q: /[0-9]\/[0-9]+/g.exec(worksheet['O3'].v),
                S: /[0-9]\/[0-9]+/g.exec(worksheet['S3'].v),
                U: /[0-9]\/[0-9]+/g.exec(worksheet['S3'].v),
                W: /[0-9]\/[0-9]+/g.exec(worksheet['W3'].v),
                Y: /[0-9]\/[0-9]+/g.exec(worksheet['W3'].v),
              };
              for (var key in keyMap) {
                var cellStr = key.slice(0,1);
                console.log(cellStr);
                console.log(cellDateMap[cellStr]);
                console.log(worksheet[key].v);
                console.log(worksheet['G3'].v);
                var oldString = /([가-힣&/★*, ]+)|(\d+\/\d+)+/g.exec(worksheet[key].v);

                if (oldString) {

                  var newString = oldString[0].replace(/\s/g, '');
                  newString = oldString[0].replace(/★/g, '');
                  newString = newString.split(/[/&*,]/);
                  console.log(newString);
                }
                if (!obj[cellDateMap[cellStr]]) obj[cellDateMap[cellStr]] = {};
                var cd = obj[cellDateMap[cellStr]][keyMap[key]['name']];
                if (!cd) {
                  cd = {};
                  obj[cellDateMap[cellStr]][keyMap[key]['name']] = cd;
                  obj[cellDateMap[cellStr]][keyMap[key]['name']]['category'] = keyMap[key]['category'];
                  obj[cellDateMap[cellStr]][keyMap[key]['name']]['time'] = keyMap[key]['time'];
                  obj[cellDateMap[cellStr]][keyMap[key]['name']]['menus'] = {};
                }
                if (cd['menus'][keyMap[key]['menus']]) {
                  cd['menus'][keyMap[key]['menus']] = cd['menus'][keyMap[key]['menus']].concat(newString);
                } else {
                  cd['menus'][keyMap[key]['menus']] = newString;
                }
              }
              console.log(obj);





              //for (z in worksheet) {
              //  /* all keys that do not begin with "!" correspond to cell addresses */
              //  if (z[0] === '!') continue;
              //  console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
              //
              //  // 함수를 호출해서 어디에 할당되는 놈인지 확인해야함
              //  do {
              //    var oldString = expText.exec(worksheet[z].v);
              //    if (oldString) {
              //      console.log(oldString);
              //      console.log(oldString[0]);
              //      //셀주소를 바탕으로 날짜, 시간대 구분하기
              //      var cellNo = Number(z.slice(1, 3));
              //      var cellStr = z.slice(0, 1);
              //      console.log(cellNo);
              //      console.log(cellStr);
              //      var newString = oldString[0].replace(/ /g, '');
              //      if (newString !== '') {
              //        if (cellNo == 3) {
              //          var dateList = [];
              //          dateList.push(newString);
              //          //newObj['morning'] = {};
              //          //newObj['morning']['rice'] = [];
              //          //newObj['morning']['soup'] = [];
              //          //newObj['morning']['noodle'] = [];
              //          //newObj['morning']['maindish'] = [];
              //          //newObj['morning']['sidedish'] = [];
              //          //newObj['morning']['bread'] = [];
              //          //newObj['morning']['drink'] = [];
              //          //newObj['morning']['fruit'] = [];
              //          //newObj['morning']['salad'] = [];
              //          //newObj['lunch'] = {};
              //          //newObj['lunch']['rice'] = [];
              //          //newObj['lunch']['soup'] = [];
              //          //newObj['lunch']['maindish'] = [];
              //          //newObj['lunch']['sidedish'] = [];
              //          //newObj['dinner'] = {};
              //          //newObj['dinner']['rice'] = [];
              //          //newObj['dinner']['soup'] = [];
              //          //newObj['dinner']['maindish'] = [];
              //          //newObj['dinner']['sidedish'] = [];
              //          menuArray.push(newObj);
              //        } else if([5,6,7,8,9,10,11,12,17,18,19].indexOf()(cellNo) >= 0) {
              //          if (['D'].indexOf(cellStr) >= 0) {
              //            menuArray[0]
              //          }
              //        }
              //        //} else if (['D', 'E', 'F'].indexOf(cellStr) >= 0) {
              //        //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
              //        //    menuArray[0]['morning'].push(newString);
              //        //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
              //        //    menuArray[0]['lunch'].push(newString);
              //        //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
              //        //    menuArray[0]['dinner'].push(newString);
              //        //  }
              //        //} else if (['H', 'I', 'J'].indexOf(cellStr) >= 0) {
              //        //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
              //        //    menuArray[1]['morning'].push(newString);
              //        //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
              //        //    menuArray[1]['lunch'].push(newString);
              //        //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
              //        //    menuArray[1]['dinner'].push(newString);
              //        //  }
              //        //} else if (['L', 'M', 'N'].indexOf(cellStr) >= 0) {
              //        //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
              //        //    menuArray[2]['morning'].push(newString);
              //        //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
              //        //    menuArray[2]['lunch'].push(newString);
              //        //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
              //        //    menuArray[2]['dinner'].push(newString);
              //        //  }
              //        //} else if (['P', 'Q', 'R'].indexOf(cellStr) >= 0) {
              //        //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
              //        //    menuArray[3]['morning'].push(newString);
              //        //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
              //        //    menuArray[3]['lunch'].push(newString);
              //        //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
              //        //    menuArray[3]['dinner'].push(newString);
              //        //  }
              //        //} else if (['T', 'U', 'V'].indexOf(cellStr) >= 0) {
              //        //  if ([5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19].indexOf(cellNo) >= 0) {
              //        //    menuArray[4]['morning'].push(newString);
              //        //  } else if ([25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39].indexOf(cellNo) >= 0) {
              //        //    menuArray[4]['lunch'].push(newString);
              //        //  } else if ([47, 48, 49, 50, 51, 52, 53].indexOf(cellNo) >= 0) {
              //        //    menuArray[4]['dinner'].push(newString);
              //        //  }
              //        //}
              //        //array.push(newString);
              //        num += 1;
              //      }
              //      console.log(num);
              //    }
              //  } while (oldString);
              //}
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
