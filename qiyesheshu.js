// ==UserScript==
// @name         企业涉诉情况@信用浙江
// @namespace    http://tampermonkey.net/
// @version      1.0.5.21
// @description  企业涉诉情况
// @author       Pan Hao
// @icon         data:image/png;base64,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
// @match        http://xyxx.zjzwfw.gov.cn*
// @match        http://xyxx.zjzwfw.gov.cn/index*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      http://oss.sheetjs.com/js-xlsx/xlsx.full.min.js
// @require      https://raw.githubusercontent.com/CallMeMaster/drcb-audit/master/jquery-drcb-common.js
// ==/UserScript==


(function() {
    'use strict';

    var companylist;
    var runner;
    var homeurl="http://xyxx.zjzwfw.gov.cn/search/search?pageSize=20&pageNum=1&condition=";

    var param = {
        column: ['公司名称',"不良信息"],
        description: '使用说明：请导入包【公司名称】字段的excel文件！',
        query: function (data) {
            var tabNameList=["企业严重失信名单信息","企业不履行判决、裁定等生效法律文书的信息","企业行政处罚信息"];
            var creditid='';
            var result = {};
            var companyName=data.公司名称;
            $.get(homeurl+companyName,function(data){
                //verifyStop(data);
                creditid = data.rows[0].creditid;
                ///var creditid=$(data).find("#searchTable > tbody > tr > td:nth-child(2)").text();
                //return creditid;
                $.post("http://xyxx.zjzwfw.gov.cn/search/getData",{creditid:creditid},function(data){
                    var description="";
                    $.each(data.msg,function(i,item){
                        $.each(item.data,function(i,item){
                            $.each(item.tabList,function(i,item){
                                if(item.tabName=="企业严重失信名单信息") {
                                    description = description+",企业严重失信名单信息";
                                }
                                if(item.tabName=="企业不履行判决、裁定等生效法律文书的信息") {
                                    description = description+",企业不履行判决、裁定等生效法律文书的信息";
                                }
                                if(item.tabName=="企业行政处罚信息") {
                                    description = description+",企业行政处罚信息";
                                }
                                result = description.length==0?null:{公司名称:companyName,不良信息:description};
                            })
                        })
                    });
                })
            });
            return result;
        }
    };
    $.drcb.initView(param);
})();
