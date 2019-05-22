$.extend({
	drcb: {
		dataIndex:0,
		param: {
			column: [],
			description: "",
			query: function (data) {},
			timeInerval:10
		},
		getTime: function(dataIndex){
			return this.param.timeInerval;
		},

		starter: function (datalist) {
            var drcb = this;
            var runner;
			var run = function () {
				console.log("search:"+datalist[drcb.dataIndex]);
				var data = datalist[drcb.dataIndex];
				//handle
				try {
					var result = drcb.param.query(data);
					printInfo(result);
				} catch (e) {}
				finally {
					drcb.dataIndex++;
				}
				
				clearInterval(runner);
				runner = setInterval(run, drcb.getTime(drcb.dataIndex) * 1001);
				if (drcb.dataIndex >= datalist.length) {
					clearInterval(runner);
					delete drcb.dataIndex;
					//结束
					//$("body").replaceWith($("#dataGrid")[0].outerHTML);
					console.log("done!");
				}
			}
			runner = setInterval(run,drcb.getTime(drcb.dataIndex) * 1001);
		},
		
		initView: function (param) {
            var drcb=this;
			if(param == undefined || param == null)
            {
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
			if(data.length==undefined) {
				data = [data];
			}
			var tr = "";
			$.each(data, function (i, item) {
				tr += "<tr>";
				$.each(this.param.column, function (j, column) {
					tr += "<td>" + item[column] + "</td>";
				});
			});
			$("#drcbGrid").append(tr);
			
		}
	}
});
