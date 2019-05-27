$.extend({
	drcb: {
		taskIndex: 0,
		taskPool:[],
		param: {
			column: [],
			description: "",
			query: function (data) {},
			timeInerval: 10
		},
		getTime: function (taskIndex) {
			return this.param.timeInerval;
		},

		starter: function (datalist) {
			var drcb = this;
			$.each(datalist,function(i,item){
				drcb.taskPool.push("drcb.param.query("+item+")");
			});
			drcb.taskIndex=0;
			var runner;
			var run = function () {
				//handle
				try {
					var result = eval(drcb.taskPool[taskIndex]);
					drcb.printInfo(result);
				} catch (e) {console.log(e)}
				finally {
					drcb.taskIndex++;
				}

				clearInterval(runner);
				runner = setInterval(run, drcb.getTime(drcb.taskIndex) * 1001);
				if (drcb.taskIndex >= taskPool.length) {
					clearInterval(runner);
					//结束
					$("body").replaceWith($("#drcbGrid")[0].outerHTML);
					console.log("done!");
				}
			}
			runner = setInterval(run, drcb.getTime(drcb.taskIndex) * 1001);
		},
		initView: function (param) {
			var drcb = this;
			if (param == undefined || param == null) {
				return;
			}
			this.param = param;
			$("body").prepend("<div id='DRCBDiv' class='clickable' style='display:flex;flex-direction:row'></div>");
			$("#DRCBDiv").append("<div style='margin:4 textAlign:center'>" + param.description + "</div>");
			$("#DRCBDiv").append("<input id='drcbStartBtn' type ='file' style='margin:4'></input>");

			var table = '';
			$.each(param.column, function (i, item) {
				table += '<td>' + item + '</td>';
			});
			//file upload
			$("#drcbStartBtn").change(function (obj) {
				if (obj.files) {
					return;
				};
				var f = obj.target.files[0];
				var reader = new FileReader();
				reader.onload = function (e) {
					var data = e.target.result;
					var workbook = XLSX.read(data, {
							type: 'binary'
						});
					var datalist = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
					$("#DRCBDiv").after("<div><table id='drcbGrid'><tr>" + table + "</tr><table><div>");
					drcb.starter(datalist);
				};
				reader.readAsBinaryString(f);
			});
			//enable sync
			$.ajaxSetup({
				async: false
			});
		},
		printInfo: function (data) {
			if (data == undefined || data == null) {
				return;
			}
			var drcb = this;
			if (data.length == undefined) {
				data = [data];
			}
			var tr = "";
			$.each(data, function (i, item) {
				tr += "<tr>";
				$.each(drcb.param.column, function (j, column) {
					tr += "<td>" + item[column] + "</td>";
				});
				tr += "</tr>";
			});
			$("#drcbGrid").append(tr);
		}
	}
});
