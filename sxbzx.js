// ==UserScript==
// @name         失信被执行
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.js
// @require      https://cdn.bootcss.com/xlsx/0.15.1/xlsx.full.min.js
// ==/UserScript==

(function () {
	'use strict';

	var wb;
	var arr;

	var uploadButton = $('<input type="file" id="xxx" class="ui-button ui-widget ui-corner-all">A button element</input>');

	var url = "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php";

	var parame = {
		resource_id: 6899,
		query: "失信被执行人名单",
		cardNum: "",
		iname: "潘昊",
		areaName: "",
		ie: "utf-8",
		oe: "utf-8",
		format: "json",
		t: "1524537973200",
		cb: "jQuery110207319777455577083_1524537959352"
	}

	$.ajaxSetup({
		async: false
	});

	$("body").append(uploadButton);

    var tips = $("<div>导入格式为【证件号码】【姓名】两列的excel文件</div>")

    $("body").append(tips);

	uploadButton.change(function (obj) {
		if (obj.files) {
			return;
		}
		var f = obj.target.files[0];

		var reader = new FileReader();
		reader.onload = function (e) {
			var data = e.target.result;
			wb = XLSX.read(data, {
					type: 'binary'
				});
			//wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
			//wb.Sheets[Sheet名]获取第一个Sheet的数据
			arr = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
			search(arr);
		};
		reader.readAsBinaryString(f);

	});

	var search = function (arr) {

		var array = new Array();
		for (var i = 0; i < arr.length; i++) {

			parame.iname = arr[i].姓名;
			//parame.cardNum = arr[i].证件号码;
            var cardcode = arr[i].证件号码;
            console.log(i+":"+cardcode);




			$.get(url, parame, function (resultStr) {
              //  console.log(resultStr);
                var resultData =  JSON.parse(resultStr.substring(resultStr.indexOf("(") + 1, resultStr.lastIndexOf(");"))).data;
                if(resultData.length>0 && resultData[0] !=undefined) {
                    var resultArr = resultData[0].result;
                }

				if (resultArr && resultArr.length > 0) {

					for (var i = 0; i < resultArr.length; i++) {
                       // console.log(i);
                        var info = {};
			            info.name = parame.iname;
			            info.cardNum = cardcode;
                        var c1 = info.cardNum+"";
                        var c2 = resultArr[i].cardNum +"";
                        console.log(c1.substring(1,10)+"|"+c2.substring(1,10));
                        console.log(c1.substring(14,18)+"|"+c2.substring(14,18));
                        console.log(info.name.length+":"+info.name);
                        if(info.name.length>3) {
                           info.date = resultArr[i].publishDate;
						   //console.log("d:"+resultArr[i].publishDate);
						   array.push(info);
                        }
                        if(c1.substring(1,10)==c2.substring(1,10) && c1.substring(14,18)==c2.substring(14,18)){
                           console.info(cardcode);
                           info.date = resultArr[i].publishDate;
						   //console.log("d:"+resultArr[i].publishDate);
						   array.push(info);
                        }


					}

				}
			}, "text");

		}



		//JSONToExcelConvertor(array,"test",["iname","cardNum","date"]);
        //JSONToExcelConvertor(data.data, "Report", data.title);

		console.log(array);
        var table = $(arrToTable(array,["iname","cardNum","date"]));
        $("body").append(table);

//tableToExcel("datatable","test");

		//$.mmm = array;

	}

    var tableToExcel = (function () {
        var uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
          base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) },
          format = function (s, c) {
              return s.replace(/{(\w+)}/g,
              function (m, p) { return c[p]; })
          }
        return function (table, name) {
            if (!table.nodeType) table = document.getElementById(table)
            var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
            window.location.href = uri + base64(format(template, ctx))
        }
    })()


    var arrToTable=function(JSONData,ShowLabel) {

        //先转化json
		var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

		var excel = '<table id="datatable">';

		//设置表头
		var row = "<tr>";
		for (var p = 0, l = ShowLabel.length; p < l; p++) {
			row += "<td>" + ShowLabel[p] + '</td>';
		}

		//换行
		excel += row + "</tr>";

		//设置数据
		for (var i = 0; i < arrData.length; i++) {
			row = "<tr>";
			for (var index in arrData[i]) {
                var value = arrData[i][index]==undefined?"":arrData[i][index];
				row += '<td>' + value + '</td>';
			}
			excel += row + "</tr>";
		}

		excel += "</table>";
        return excel;

    }

	function JSONToExcelConvertor(JSONData, FileName, ShowLabel) {
		//先转化json
		var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

		var excel = '<table>';

		//设置表头
		var row = "<tr>";
		for (var p = 0, l = ShowLabel.length; p < l; p++) {
			row += "<td>" + ShowLabel[p].value + '</td>';
		}

		//换行
		excel += row + "</tr>";

		//设置数据
		for (var i = 0; i < arrData.length; i++) {
			row = "<tr>";
			for (var index in arrData[i]) {
                var value = arrData[i][index].value === "." ? "" : arrData[i][index].value;
				row += '<td>' + value + '</td>';
			}
			excel += row + "</tr>";
		}

		excel += "</table>";

		var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
        excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
		excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
		excelFile += '; charset=UTF-8">';
		excelFile += "<head>";
		excelFile += "<!--[if gte mso 9]>";
		excelFile += "<xml>";
		excelFile += "<x:ExcelWorkbook>";
		excelFile += "<x:ExcelWorksheets>";
		excelFile += "<x:ExcelWorksheet>";
		excelFile += "<x:Name>";
		excelFile += "{worksheet}";
		excelFile += "</x:Name>";
		excelFile += "<x:WorksheetOptions>";
		excelFile += "<x:DisplayGridlines/>";
		excelFile += "</x:WorksheetOptions>";
		excelFile += "</x:ExcelWorksheet>";
		excelFile += "</x:ExcelWorksheets>";
		excelFile += "</x:ExcelWorkbook>";
		excelFile += "</xml>";
		excelFile += "<![endif]-->";
		excelFile += "</head>";
		excelFile += "<body>";
		excelFile += excel;
		excelFile += "</body>";
		excelFile += "</html>";

        console.log(excelFile);

		var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);

		var link = document.createElement("a");
		link.href = uri;

		link.style = "visibility:hidden";
		link.download = FileName + ".xls";

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

})();
