app.directive('fileReader', function () {
  return {
    scope: {
      fileReader: "="
    },
    link: function (scope, element) {
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

            var sheet_name_list = workbook.SheetNames;
            // y - 시트명, z - 셀명, v - 셀 값
            sheet_name_list.forEach(function (y) { /* iterate through sheets */
              var worksheet = workbook.Sheets[y];
              var num = 0;
              for (z in worksheet) {
                /* all keys that do not begin with "!" correspond to cell addresses */
                if (z[0] === '!') continue;
                console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
                do {
                  var oldString = expText.exec(worksheet[z].v);
                  if (oldString) {
                    console.log(oldString);
                    console.log(oldString[0]);
                    //셀주소를 바탕으로 날짜, 시간대 구분하기
                    console.log(z.slice(1,2));
                    var newString = oldString[0].replace(/ /g, '');
                    if (newString !== '') {
                      array.push(newString);
                      num += 1;
                    }
                    console.log(num);
                  }
                } while (oldString);
              }
            });
            scope.fileReader = array;
            scope.$parent.$digest();
          };
          reader.readAsBinaryString(f);
        }
      })
    }
  }
});
