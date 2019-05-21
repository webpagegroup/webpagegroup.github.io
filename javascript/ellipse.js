
document.querySelector('.ellipse .bottom select').addEventListener('change', function (e) {
	var main = document.querySelector('.ellipse .main');
	main.style.backgroundImage = 'url(./img/' + e.target.value + '.png)';
	updateChart();
});

window.addEventListener('load', function () {

	var main = document.querySelector('.ellipse .main');
	main.style.backgroundImage = 'url(1.png)';

	var width = 800;
	var height = 550;
	var draw = SVG('drawing').size(width, height);

	window.draw = draw;

	updateChart();
});

function randInt (min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function updateChart () {
	var width = 800;
	var height = 550;
	document.querySelector('#drawing').innerHTML = '';

	// 圆圈的数据
	var datas = [];
	for (var i = 0;i < 10;i ++) {
		datas.push({
			title: Date.now()
		});
	}

	var tip = document.querySelector('.ellipse .tip');




//// Point Foure
	for (var i = 0, len = datas.length;i < len;i ++) {
		var data = datas[i];
		draw.circle(25)
			.attr('cx', 90)
			.attr('cy', 320)
            .attr('fill', '#97B6B0')
			.attr('info', 'Borough: Brooklyn')
			.attr('nbhd', 'Neighbourhood: Park Slope')
			.attr('data-info', JSON.stringify(data))
			.mouseover(function (e) {
				var info = JSON.parse(e.target.dataset.info);
				tip.style.visibility = 'visible';
				tip.style.left = e.offsetX + 190+ 'px';
				tip.style.top = e.offsetY + 'px';
				tip.querySelector('.cx').textContent = e.target.getAttribute('info');
				tip.querySelector('.cy').textContent = e.target.getAttribute('nbhd');
				tip.querySelector('.title').textContent = e.target.dataset.info.title;
			})
			.mouseout(function (e) {
				tip.style.visibility = 'hidden';
			});
	}

//// Point Five
	for (var i = 0, len = datas.length;i < len;i ++) {
		var data = datas[i];
		draw.circle(25)
			.attr('cx', 210)
			.attr('cy', 330)
			.attr('fill', '#ebebeb')
			.attr('info', 'Borough: Brooklyn')
			.attr('nbhd', 'Neighbourhood: East New York')
			.attr('data-info', JSON.stringify(data))
			.mouseover(function (e) {
				var info = JSON.parse(e.target.dataset.info);
				tip.style.visibility = 'visible';
				tip.style.left = e.offsetX + 190+ 'px';
				tip.style.top = e.offsetY + 'px';
				tip.querySelector('.cx').textContent = e.target.getAttribute('info');
				tip.querySelector('.cy').textContent = e.target.getAttribute('nbhd');
				tip.querySelector('.title').textContent = e.target.dataset.info.title;
			})
			.mouseout(function (e) {
				tip.style.visibility = 'hidden';
			});
	}

	for (var i = 0, len = datas.length;i < len;i ++) {
		var data = datas[i];
		draw.circle(25)
			.attr('cx', 170)
			.attr('cy', 230)
			.attr('fill', '#00887d')
			.attr('info', 'Borough: Queens')
			.attr('nbhd', 'Neighbourhood: Flushing')
			.attr('data-info', JSON.stringify(data))
			.mouseover(function (e) {
				var info = JSON.parse(e.target.dataset.info);
				tip.style.visibility = 'visible';
				tip.style.left = e.offsetX + 190+ 'px';
				tip.style.top = e.offsetY + 'px';
				tip.querySelector('.cx').textContent = e.target.getAttribute('info');
				tip.querySelector('.cy').textContent = e.target.getAttribute('nbhd');
				tip.querySelector('.title').textContent = e.target.dataset.info.title;
			})
			.mouseout(function (e) {
				tip.style.visibility = 'hidden';
			});
	}

//// Point Four
for (var i = 0, len = datas.length;i < len;i ++) {
		var data = datas[i];
		draw.circle(30)
			.attr('cx', 110)
			.attr('cy', 160)
			.attr('fill', '#014d64')
			.attr('info', 'Borough: Manhattan')
			.attr('nbhd', 'Neighbourhood: Midtown')
			.attr('data-info', JSON.stringify(data))
			.mouseover(function (e) {
				var info = JSON.parse(e.target.dataset.info);
				tip.style.visibility = 'visible';
				tip.style.left = e.offsetX + 190+ 'px';
				tip.style.top = e.offsetY + 'px';
				tip.querySelector('.cx').textContent = e.target.getAttribute('info');
				tip.querySelector('.cy').textContent = e.target.getAttribute('nbhd');
				tip.querySelector('.title').textContent = e.target.dataset.info.title;
			})
			.mouseout(function (e) {
				tip.style.visibility = 'hidden';
			});
	}

	for (var i = 0, len = datas.length;i < len;i ++) {
		var data = datas[i];
		draw.circle(30)
			.attr('cx', 0)
			.attr('cy', 410)
			.attr('fill', '#76c0c1')
			.attr('info', 'Borough: Staten Island')
			.attr('nbhd', 'Neighbourhood: Rose Bank')
			.attr('data-info', JSON.stringify(data))
			.mouseover(function (e) {
				var info = JSON.parse(e.target.dataset.info);
				tip.style.visibility = 'visible';
				tip.style.left = e.offsetX + 190+ 'px';
				tip.style.top = e.offsetY + 'px';
				tip.querySelector('.cx').textContent = e.target.getAttribute('info');
				tip.querySelector('.cy').textContent = e.target.getAttribute('nbhd');
				tip.querySelector('.title').textContent = e.target.dataset.info.title;
			})
			.mouseout(function (e) {
				tip.style.visibility = 'hidden';
			});
	}

//// Point Six

for (var i = 0, len = datas.length;i < len;i ++) {
		var data = datas[i];
		draw.circle(30)
			.attr('cx', 190)
			.attr('cy', 80)
			.attr('fill', '#7ad2f6')
			.attr('info', 'Borough: Bronx')
			.attr('nbhd', 'Neighbourhood: Parkchester')
			.attr('data-info', JSON.stringify(data))
			.mouseover(function (e) {
				var info = JSON.parse(e.target.dataset.info);
				tip.style.visibility = 'visible';
				tip.style.left = e.offsetX + 190+ 'px';
				tip.style.top = e.offsetY + 'px';
				tip.querySelector('.cx').textContent = e.target.getAttribute('info');
				tip.querySelector('.cy').textContent = e.target.getAttribute('nbhd');
				tip.querySelector('.title').textContent = e.target.dataset.info.title;
			})
			.mouseout(function (e) {
				tip.style.visibility = 'hidden';
			});
	}

}