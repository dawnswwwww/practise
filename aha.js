<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		* {
			margin: 0;
			padding: 0;
		}
		#box {
			width: 800px;
			height: 400px;
			margin: 0 auto;
			border: 1px solid red;
		}
	</style>
</head>
<body>
	<div id="box"></div>
	<script type="text/javascript" src="js/jquery-1.12.3.min.js"></script>
	<script type="text/javascript" src="js/highcharts.js"></script>
	<script type="text/javascript">
	// 原本highcharts是jQuery的一个插件，所以要依赖与jQuery
	$("#box").highcharts({
		// 图片标题
		title: {
			// 配置标题
			text: "标题",
			// 设置标题的样式
			style: {
				"color": "red",
				"fontSize": "20px"
			},
			// 水平偏移
			x: 100,
			// 竖直偏移
			// y: 100,
			floating: true
		},
		// 数据列
		series: [
			{
				name: "北京",
				data: [1, 2, 3, 4, 5, 6, 7]
			},
			{
				name: "上海",
				data: [8, 9, 10, 11, 12, 13]
			}
		],
		// x轴
		xAxis: {
			// 配置标题
			title: {
				// 标题文字
				text: "日期",
				// 标题样式
				style: {
					"color": "red",
					"fontSize": "20px"
				}
			},
			// 轴标签
			labels: {
				format: "{value}"
			},
			// 配置轴便签分类
			categories: [
				"星期一",
				"星期二",
				"星期三",
				"星期四",
				"星期五",
				"星期六",
				"星期日",
			]
		},
		// y轴
		yAxis: {
			// 标题
			title: {
				// 文字
				text: "温度",
				style: {
					"color": "red"
				}
			},
			// 轴标签
			labels: {
				format: "{value}℃"
			}
		},
		// 图例
		legend: {
			enabled: false
		}
	})


	// 到后来不再依赖于jQuery
	</script>
</body>
</html>
