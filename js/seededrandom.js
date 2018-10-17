Math.seed = -1;
Math.lastMin = -1;
Math.lastMax = -1;

function Random( min, max, seed, wholeNumber ) {
	max = max || 1;
	min = min || 0;

	Math.seed = seed;
	Math.lastMin = min;
	Math.lastMax = max;

	Math.seed = ( Math.seed * 9301 + 49297 ) % 233280;
	var rnd = Math.seed / 233280;

	if ( wholeNumber === true ) {
		return Math.floor( min + rnd * ( max - min ) );
	} else {
		return min + rnd * ( max - min );
	}
}

Random.next = function ( min, max, floor ) {
	temp = Random( 1, 2, );
	console.log( "temp var is" + temp );
	if ( temp === 1 ) {
		temp = Random( min, max, Random( Math.lastMin, Math.lastMax, Math.seed ) / Random( 1, 4, Math.seed ) );
	} else if ( temp === 2 ) {
		temp = Random( min, max, Random( Math.lastMin, Math.lastMax, Math.seed ) * Random( 1, 4, Math.seed ) );
	} else {
		console.log( "temp var error" );
	}

	if ( floor === true ) {
		Math.floor( temp );
		return temp;
	} else {
		return temp;
	}
}