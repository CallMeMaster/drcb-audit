// ==UserScript==
// @name         员工及关系人经商办企业@企查查
// @namespace    http://tampermonkey.net/
// @version      1.0.5.21
// @description  爬取工商企业信息
// @author       Pan Hao
// @icon         data:image/png;base64,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
// @match        https://www.qichacha.com*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      http://oss.sheetjs.com/js-xlsx/xlsx.full.min.js
// @require      https://raw.githubusercontent.com/CallMeMaster/drcb-audit/master/jquery-drcb-common.js
// ==/UserScript==

(function() {
    'use strict';

    var companylist;
    var runner;
    var homeurl="https://www.qichacha.com";

    var queryDetail=function(url,queryData,type){
        var result = [];
        $.get(url,function(data){
            var companys=$(data).find("#search-result > tr");
            $.each(companys,function(i,company){
                var detailUrl = ($(company).find("a.ma_h1").attr("href"));
                if(detailUrl==undefined||detailUrl=="") {
                    return;
                }
                $.get(homeurl+detailUrl,function(data1){
                    var companyName = $(data1).find("#company-top > div.row > div.content > div.row.title > h1").text();
                    var companyNo = $(data1).find("#Cominfo > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2)").text();
                    companyNo = companyNo.replace(/(^\s*)|(\s*$)/g, "");
                    result.push({
                        柜员号:queryData.柜员号,
                        员工姓名:queryData.员工姓名,
                        关系人姓名:queryData.关系人姓名,
                        关系:queryData.关系,
                        公司:companyName,
                        注册号:companyNo,
                        备注:type
                    });
                });
            });
        });
        console.log("return");
        console.log(result);
        return result;
    }

    var param = {
        column: ['柜员号','员工姓名', '关系人姓名', '关系', '公司','注册号','备注'],
        description: '员工及关系人经商办企业使用说明：请导入包【柜员号】【员工姓名】【关系人姓名】【关系】字段的excel文件！',
        timeInerval:60,
        query: function (queryData) {
            var result=[];
            var url0 = homeurl + "/search_index?key="+queryData.关系人姓名+"&ajaxflag=1&province=ZJ&city=330500&county=330521&index=6&";
            var result0 = queryDetail(url0,queryData,"高管");
            console.log(result0);
            var url1 = homeurl + "/search_index?key="+queryData.关系人姓名+"&ajaxflag=1&province=ZJ&city=330500&county=330521&index=4&";
            var result1 = queryDetail(url1,queryData,"法人");
            console.log(result1);
            var url2 = homeurl + "/search_index?key="+queryData.关系人姓名+"&ajaxflag=1&province=ZJ&city=330500&county=330521&index=14&";
            var result2 = queryDetail(url2,queryData,"股东");
            console.log(result2);
            result = result0.concat(result1).concat(result2);
            console.log(result);
            return result;
        },
    };
    $.drcb.initView(param);

})();