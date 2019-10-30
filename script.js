window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 60 );
				};
})();

var bad_zone = document.getElementById('text').getBoundingClientRect();

var slov = ["Богатства", "Изобилия", "Процветания",  "Финансового благополучия", "Большого благосостояния", "Вагон денег", "Купаться в роскоши", "Огромных доходов", "Достойной зарплаты", "Благополучной жизни", "Несметных сокровищ", "Золотых дождей",  "Прибыльных проектов",  "Выгодных контрактов", "Доходных инвестиций",  "Множественных источников дохода", "Огромного урожая",  "Легко отдать кредит",  "Карьерного роста", "Взлета карьеры", "Блестящих побед", "Успешного бизнеса", "Успеха", "Славы", "Совершенства", "Покорения новых высот", "Доблестных дел", "Смелых начинаний", "Достижения целей", "Крутых достижений", "Высших оценок", "Наилучших результатов", "Правильных действий", "Твердости намерений", "Продуктивности", "Постоянного развития", "Раскрытия талантов и способностей", "Творческой индивидуальности", "Успешного самовыражения", "Гениальных идей", "Наполеоновских планов", "Заманчивых предложений", "Чудесных перспектив", "Великих завоеваний", "Предприимчивости", "Мудрых знаний", "Признания заслуг", "Королевских почестей", "Быстрого решения всех проблем", "Легкого решения задач", "Больших возможностей", "Открытия новых горизонтов", "Великих открытий", "Широты взглядов", "Легких путей", "Попутного ветра", "Воплощения задуманного", "Следовать своей мечте", "Ярких озарений", "Творческих находок", "Ясных целей", "Здоровых амбиций", "Грандиозных устремлений", "Умения убеждать", "Торжества в твою честь", "Перемен к лучшему", "Легко преодолевать преграды", "Внутренней свободы", "Стать знаменитым ", "Стать непревзойденным мастером своего дела", "Достичь совершенства ", "Найти свое призвание", "Стать начальником ", "Стать виртуозом", "Устроиться в престижную фирму", "Получать заслуженные награды", "Произвести фурор", "Быть всегда на коне", "Быть победителем", "Быть лидером", "Быть всегда на высоте", "Быть сильной личностью", "Достичь небывалых высот", "Всегда идти вперед", "Всегда выигрывать", "Верить в собственные силы", "Уметь находить нестандартные решения", "Всё успевать", "Далеко пойти", "Учиться на отлично", "Быть профессионалом", "Быть преуспевающим", "Реализовать свои таланты и возможности", "Чтобы все задачи были по плечу", "Иметь путеводную звезду", "Познать себя", "Найти свое место в жизни", "Быть самим собой", "Удачи во всем", "Большого везения", "Благосклонности фортуны", "Быть любимцем фортуны", "Быть везунчиком", "Улыбок фортуны", "Покровительства звезд", "Приятных сюрпризов", "Подарков судьбы", "Быть баловнем судьбы", "Быть магнитом удачи", "Исполнения желаний", "Сбычи мечт", "Прухи и везухи", "Поймать птицу счастья", "Вагон подарков", "Миллион благоприятных шансов", "Миллион приятных мелочей", "Огромных выигрышей", "Ценных призов", "Вкусных плюшек от жизни", "Удачного стечения обстоятельств", "Быть всегда в нужное время в нужном месте", "Всех благ", "Всего самого лучшего", "Сказочной жизни", "Повседневных чудес", "Волшебства в жизни", "Золотой судьбы", "Светлого будущего", "Счастливых случаев", "Чтобы улыбнулось счастье", "Желанных событий", "Увлекательных приключений", "Восхитительных путешествий", "Классного отдыха в красивейших местах планеты", "Объездить весь мир", "Поплавать с дельфинами", "Благоденствия", "Замечательного отпуска", "Побывать на концерте любимого певца", "Превосходных вестей", "Быть под защитой высших сил", "Радужного настроения", "Яркого настроения", "Отличного настроения", "Оранжевого настроенрия", "Улетного настроения", "Классного веселья", "Искрящейся радости", "Звонкого смеха", "Лучезарных улыбок", "Приятного времяпрепровождения в любой компании", "Ярких мгновений жизни", "Яркости красок", "Многообразия", "Наслаждения жизнью", "Радоваться каждому дню", "Улетных впечатлений", "Драйва", "Огонька", "Искрометных шуток", "Весны в душе", "Полета души", "Веры", "Любви", "Надежды", "Счастья", "Восторга", "Добра", "Нежности", "Позитива", "Оптимизма", "Новизны", "Юношеского задора", "Молодецкой удали", "Счастливого блеска в глазах", "Сердечного света", "Мира в душе", "Ласки", "Радостных эмоций", "Вдохновения", "Душевного тепла", "Сердечной теплоты", "Заботы", "Гармонии", "Восхищения окружающих", "Приятных фантазий", "Море комплиментов", "Море удовольствия", "Праздничной атмосферы", "Праздничного фейерверка", "Силы духа", "Упорства", "Настойчивости", "Решительности", "Неординарности", "Оригинальности", "Целеустремленности", "Мужественности", "Независимости", "Уверенности", "Терпения", "Жизнелюбия", "Любознательности", "Быстроты мышления", "Сфокусированности", "Энтузиазма", "Мудрости", "Обаяния", "Цельности", "Духовной чистоты", "Спокойствия", "Притягательности", "Сексапильности", "Легкости", "Зоркости", "Харизматичности", "Притягательного магнетизма", "Отличного самочувствия", "Бодрости тела и духа", "Крепкого здоровья", "Богатырского здоровья", "Отменного здоровья", "Океан энергии", "Энергичности", "Богатырской силы", "Долгих лет жизни", "Активного долголетия", "Ясного ума", "Крепкой памяти", "Орлиного зрения", "Молодости", "Вечного цветения", "Легкости в теле", "Идеального веса", "Стрессоустойчивости", "Быть в отличной форме", "Быть в тонусе", "Всегда высыпаться", "Сладких снов", "Классно расслабиться в спа-салоне", "Получить удовольствие от массажа", "Замечательно отдохнуть", "Пламенной любви", "Настоящей любви", "Взаимной любви", "Любви длиною в жизнь", "Верного спутника жизни", "Удачного брака", "Любящую жену", "Идеальную тещу", "Жарких ночей", "Романтики", "Сладких поцелуев", "Страстных объятий", "Райского блаженства", "Взаимопонимания", "Гармоничных отношений", "Лада в семье", "Уютного дома", "Жить в доме своей мечты", "Чтобы дом был полной чашей", "Комфорта", "Уютных вечеров в кругу семьи", "Крепкой опоры родных и друзей", "Надежного тыла", "Всегда получать помощь и поддержку", "Замечательных детей", "Прибавления в семье", "Родить прелестных детей", "Идеальных соседей", "Желанных гостей", "Надежных друзей", "Верных друзей", "Незабываемых встреч", "Интересных собеседников", "Многообещающих знакомств", "Приятного окружения", "Уважения в коллективе", "Душевного общения", "Красивых закатов", "Восхитительных рассветов", "Чистого неба", "Ясного неба", "Звездного неба", "Потрясающих пейзажей", "Красивых трелей соловья", "Пения птиц", "Ласкового шума прибоя", "Жемчужной россыпи росы", "Море цветов", "Благоухания любимых цветов", "Солнечного дня", "Прекрасной погоды", "Утренней свежести", "Увидеть цветение сакуры", "Увидеть звездопад", "Увидеть белые ночи", "Увидеть северное сияние", "Чтоб гитара не расстраивалась", "Чтобы струны не рвались", "Неземной красоты", "Очарования", "Всегда стройной фигуры", "Выглядеть на 100%", "Быть королевой на балу жизни", "Быть загадкой", "Быть яркой звездой", "Быть драгоценной жемчужиной", "Неземной красоты", "Очарования", "Всегда стройной фигуры", "Выглядеть на 100%", "Быть королевой на балу жизни", "Быть загадкой", "Быть яркой звездой", "Быть драгоценной жемчужиной", "Цветущих садов и пения птиц",  "Понимания своей уникальности", "Возможности почаще расслабиться", "Понимания и поддержки", "Интересных бесед", "Ярких ощущений", "Красивых чувств", "Радужной мечты", "Увлекательных воспоминаний", "Сияющего солнца", "Комфорта и уюта", "Веры в хорошее", "Понимания и тепла", "Непревзойденности"]

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext( '2d' ),
	cw = window.innerWidth,
	ch = window.innerHeight,
	fireworks = [],
    particles = [],
    words = [],
	hue = 120,
	limiterTotal = 5,
	limiterTick = 0,
    timerTick = 0,
    timerTickWord = 0,
	mousedown = false,
    mx, my;
		
canvas.width = cw;
canvas.height = ch;

function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}

function calculateDistance( p1x, p1y, p2x, p2y ) {
	var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
	return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

function Word (x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.live = 0;
    this.alpha = 1;
}

Word.prototype.draw = function() {
    ctx.font = "3em Comfortaa";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.globalAlpha = this.alpha;
    ctx.fillText(this.text, this.x, this.y);
}

Word.prototype.update = function(index) {
    this.live++;
    var k = 2;
    if (this.live < 90 * k)
        this.alpha = 1 - this.live / (90 * k);
    else
        this.alpha = (this.live - 90 * k) / (90 * k);

    if (this.live > 180 * k) {
        words.splice(index, 1);
    }
}

function Firework( sx, sy, tx, ty ) {
    this.x = sx;
	this.y = sy;
	this.sx = sx;
	this.sy = sy;
	this.tx = tx;
	this.ty = ty;
	this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
	this.distanceTraveled = 0;
	this.coordinates = [];
	this.coordinateCount = 3;
	while (this.coordinateCount--)
		this.coordinates.push( [ this.x, this.y ] );
	this.angle = Math.atan2( ty - sy, tx - sx );
	this.speed = 2;
	this.acceleration = 1.05;
	this.brightness = random( 50, 70 );
	this.targetRadius = 1;
}

Firework.prototype.update = function( index ) {
	this.coordinates.pop();
	this.coordinates.unshift( [ this.x, this.y ] );
	
	if( this.targetRadius < 8 ) {
		this.targetRadius += 0.3;
	} else {
		this.targetRadius = 1;
	}
	
	this.speed *= this.acceleration;
	
	var vx = Math.cos( this.angle ) * this.speed;
	var	vy = Math.sin( this.angle ) * this.speed;
	this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
	
	if( this.distanceTraveled >= this.distanceToTarget ) {
		createParticles( this.tx, this.ty );
		fireworks.splice( index, 1 );
	} else {
		this.x += vx;
		this.y += vy;
	}
}

Firework.prototype.draw = function() {
	ctx.beginPath();
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
	ctx.stroke();
}

function Particle(x, y) {
	this.x = x;
	this.y = y;
    
    this.coordinates = [];
    this.coordinateCount = 5;
    
	while(this.coordinateCount--)
		this.coordinates.push([this.x, this.y]);
    
    this.angle = random( 0, Math.PI * 2 );
	this.speed = random( 1, 10 );
    this.friction = 0.95;
	this.gravity = 1;
	this.hue = random(hue - 50, hue + 50);
	this.brightness = random(50, 80);
	this.alpha = 1;
	this.decay = random(0.015, 0.03);
}

Particle.prototype.update = function(index) {
	this.coordinates.pop();
	this.coordinates.unshift([this.x, this.y]);
	this.speed *= this.friction;
	this.x += Math.cos(this.angle) * this.speed;
	this.y += Math.sin(this.angle) * this.speed + this.gravity;
	this.alpha -= this.decay;
	
	if (this.alpha <= this.decay)
		particles.splice(index, 1);
}

Particle.prototype.draw = function() {
	ctx.beginPath();
	ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
	ctx.lineTo(this.x, this.y);
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
	ctx.stroke();
}

function createParticles( x, y ) {
	var particleCount = 30;
	while( particleCount-- ) {
		particles.push( new Particle( x, y ) );
	}
}

function loop() {
	requestAnimFrame(loop);
	
	hue = random(0, 360);
	
	ctx.globalCompositeOperation = 'destination-out';
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect( 0, 0, cw, ch );
	ctx.globalCompositeOperation = 'lighter';
	
    var i = fireworks.length;

    for (var i = 0; i < fireworks.length; i++){
        fireworks[i].draw();
		fireworks[i].update(i);
    }

    for (var i = 0; i < particles.length; i++){
        particles[i].draw();
		particles[i].update(i);
    }
    
    for (var i = 0; i < words.length; i++) {
        words[i].draw();
        words[i].update(i);
    }

	if(timerTick >= random(10, 30)) {
		fireworks.push(new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2)));
		timerTick = 0;
	} else {
		timerTick++;
    }
    
    if(timerTickWord >= random(30, 60)) {
        var y = random(0, random(100, ch))
        if (y > bad_zone.top && y < bad_zone.bottom)
            y += random(bad_zone.height, ch - bad_zone.height - y);
        words.push(new Word(random(0, cw), y, slov[Math.floor(random(0, slov.length - 1))]));
        timerTickWord = 0;
	} else {
		timerTickWord++;
	}
}

window.onload = loop;

window.onresize = function(e) {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = cw;
    canvas.height = ch;
}

window.onclick = function(e) {
    fireworks.push(new Firework(cw / 2, ch, e.clientX, e.clientY));
}
