// ==UserScript==
// @name         工商企业信息@企查查
// @namespace    http://tampermonkey.net/
// @version      1.5.4.23
// @description  爬取工商企业信息
// @author       Pan Hao
// @icon         data:image/png;base64,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
// @match        https://www.qichacha.com*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      http://oss.sheetjs.com/js-xlsx/xlsx.full.min.js
// ==/UserScript==

(function() {
    'use strict';

    var companylist;
    var runner;
	var homeurl="https://www.qichacha.com";

	var init = function () {
		$("body").prepend("<div id='DRCBDiv' class='clickable' style='display:flex;flex-direction:row'></div>");
		$("#DRCBDiv").append("<div style='margin:4 textAlign:center'>使用说明：请导入包含【企业名称】字段的excel文件！</div>");
		$("#DRCBDiv").append("<input id='startBtn' type ='file' style='margin:4'></input>");

        //file upload
		$("#startBtn").change(function (obj) {
			if (obj.files) {
				return;
			}
			var f = obj.target.files[0];
			var reader = new FileReader();
			reader.onload = function (e) {
				var data = e.target.result;
				var workbook = XLSX.read(data, {
						type: 'binary'
					});
				//workbook.SheetNames[0]是获取Sheets中第一个Sheet的名字
				//workbook.Sheets[Sheet名]获取第一个Sheet的数据
				companylist = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
				$("#DRCBDiv").after("<div><table id='dataGrid'><tr><td>序号</td><td>名称</td><td>状态</td><td>公司类型</td><td>成立日期</td><td>地址</td><td>关系人</td><td>备注</td><td>状态</td></tr><table><div>");
				starter(companylist);
			};
			reader.readAsBinaryString(f);
		});
		//enable sync
		$.ajaxSetup({
			async: false
		});
		window.companyIndex = window.companyIndex||0;
	}();

    var starter =function(companyList) {
		var run = function(){
            console.log("search "+companyIndex+":"+companylist[companyIndex].企业名称);
            var company = new Company(companylist[companyIndex].企业名称);
            try{
                company.load();
                print(company);
            }catch(e){

            }finally{
                companyIndex++;
            }
            console.log(company);
            clearInterval(runner);
            runner=setInterval(run,getTime(companyIndex)*1001);
            if(companyIndex>=companylist.length){
                clearInterval(runner);
                delete window.companyIndex;
                $("body").replaceWith($("#dataGrid")[0].outerHTML);
                console.log("done!");
            }
        }
        runner = setInterval(run,getTime(companyIndex)*1001);
    }
    var print=function(company){
        var tr="";
        var persons = [].concat(company.legal).concat(company.partner).concat(company.mainmember);
        $.each(persons,function(i,person){
            tr += "<tr>";
            tr += "<td>"+companyIndex+"</td>";
            tr += "<td>"+company.name+"</td>";
            tr += "<td>"+company.state+"</td>";
            tr += "<td>"+company.type+"</td>";
            tr += "<td>"+company.createDate+"</td>";
            tr += "<td>"+company.address+"</td>";
            tr += "<td>"+person.name+"</td>";
            tr += "<td>"+person.share+"</td>";
            tr += "<td>SUCCESS</td>";
            tr += "/<tr>";
        });
        if(persons.length<=0) {
            console.error("faile");
            tr += "<tr>";
            tr += "<td>"+companyIndex+"</td>";
            tr += "<td>"+company.name+"</td>";
            tr += "<td>"+company.state+"</td>";
            tr += "<td>"+company.type+"</td>";
            tr += "<td>"+company.createDate+"</td>";
            tr += "<td>"+company.address+"</td>";
            tr += "<td></td>";
	    tr += "<td></td>";
            tr += "<td>FAIL</td>";
            tr += "/<tr>";
        }
        $("#dataGrid").append(tr);
    }

    //返回检测
    var verifyStop = function(data) {
        if(data.indexOf("window.location123123123") != -1) {
            clearInterval(runner);
            window.companyIndex = 0;
            console.log(window.result);
        }
    }

    //间隔时间测算
	var getTime = function(index){
        return 10
	}

    var Company = function(name) {

        this.html="";
        this.name = name;
        this.state = "";
        this.createDate="";
        this.address="";
        this.type="";
        this.partner = [];
        this.mainmember = [];
        this.legal=[];
        this.getHtml = function() {
            var detailHtml = "";
            $.get(homeurl + "/search?key="+this.name,function(data){
                verifyStop(data);
                var name=$(data).find("#search-result tr:eq(0) a.ma_h1").text();
                var url=$(data).find("#search-result tr:eq(0) a.ma_h1").attr("href");
                $.get(homeurl + url,function(data){
                    verifyStop(data);
                    detailHtml = data;
                })
            })
            return detailHtml;
        };
        this.getValue=function(selector) {
            return $(this.html).find(selector).text();
        };
        this.getPartner = function() {
            var partner = [];
            $.each($(this.html).find("#partnerslist > table > tbody > tr").slice(1),function(i,tr){
                var p = {};
                p.name = $(tr).find("td:nth-child(2) > a > h3").text();
                p.share = $(tr).find("td:nth-child(3).text-center").text();
                partner[i]=p;
            });
            return partner;
        };
        this.getMainmember = function() {
            var mainmember = [];
            $.each($(this.html).find("#Mainmember table > tbody > tr").slice(1),function(i,tr){
                var p = {};
                p.name = $(tr).find("td:nth-child(2) > div > a.c_a > h3").text();
                p.share = $(tr).find("td.text-center").text();
                mainmember[i]=p;
            });
            return mainmember;
        };
        this.getLegal = function(){
            var legal=[];
            var p = {};
            p.name = $(this.html).find("#Cominfo > table:nth-child(3) > tbody > tr:nth-child(2) > td.ma_left > div > div.clearfix > div:nth-child(2) > a > h2").text();
            p.share = '法人';
            legal[0] = p;
            return legal;
        };
        this.render=function(){
            this.html = this.getHtml();
            this.state=this.getValue("#company-top > div.row > div.content > div.row.tags > span.ntag.text-success");
            this.createDate=this.getValue("#Cominfo > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(4)");
            this.address=this.getValue("#company-top > div.row > div.content > div.dcontent > div:nth-child(2) > span.cvlu > a:nth-child(1)");
            this.type = this.getValue("#Cominfo > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2)");
            this.partner = this.getPartner();
            this.mainmember = this.getMainmember();
            this.legal = this.getLegal();
        };
        this.load=function(){
            this.render();
        };
    }
})();
