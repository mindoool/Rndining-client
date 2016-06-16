app.directive('fileReader', function () {
  return {
    scope: {
      fileReader: "="
    },
    link: function (scope, element) {
      //모든 셀에 대하여 아래와 같이 키 값들을 정의내리기
      var keyMap = {
        D5: ['morningKoreanObj', ['time', 'category', 'date', 'menus'], 'rice']
      };

      var obj = {};
      var val = 'ffff';
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
