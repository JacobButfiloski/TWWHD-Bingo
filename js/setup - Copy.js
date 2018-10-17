//Goals
var goals = [
	"Kill a boss swordless",
	"DRC Tingle Statue",
	"FW Tingle Statue",
	"DRC Compass",
	"FW Compass",
	"Map and Compass in Forsaken Fortress",
	"2 Dungeon Maps",
	"Any Horseshoe Island Sea Chart",
	"Survive a zombie hover",
	"Open 5 small chests",
	"Elixer Soup",
	"DRC Big Key",
	"HP from cannon shooting minigame",
	"Loot 3 submarines",
	"Swim into Jabun's Cavern",
	"Blue potion",
	"Endless night",
	"All FF2 searchlights facing upwards",
	"Get into Mother & Child island",
	"Open 10 small chests",
	"Windfall hide and seek",
	"Learn 2 Songs",
	"Swift sail",
	"Hero's Sword",
	"Bait Bag",
	"Spoils Bag",
	"Sail",
	"Pictobox",
	"Deluxe Pictobox",
	"Win an Auction",
	"1 of each spoil",
	"2 ledge clips",
	"200 Rupees",
	"Kill Kalle Demos with forest water",
	"Submarine bottle",
	"Change the savewarp flag away from Outset",
	"Telescope",
	"Beat FF1",
	"Biggest Quiver",
	"Biggest Bomb Bag",
	"1k Wallet",
	"Flight Control Platform HP",
	"Both Sploosh Kaboom Sea Charts",
	"Bird's Peak Rock Triforce Chart",
	"Isle of Steel Triforce Chart",
	"5 Sea Charts",
	"Place a pearl",
	"Master Sword",
	"Bottled forest firefly",
	"Open the Nintendo Gallery",
	"Bomb Isle HP",
	"Stone Watcher Platform HP",
	"Angular Isle HP",
	"Decorate Private Oasis"
];


function setup() {
	//var seedvalue;
	$( '.popout' ).click( function () {
		var mode = null;
		var line = $( this ).attr( 'id' );
		var name = $( this ).html();
		var items = [];
		var cells = $( '#bingo .' + line );
		for ( var i = 0; i < 5; i++ ) {
			items.push( $( cells[ i ] ).html() );
		};
		window.open( 'popout.html#' + name + '=' + items.join( ';;;' ), "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=220, height=460" );
	} );

	$( "#bingo tr td:not(.popout), #selected td" ).toggle(
		function () {
			$( this ).addClass( "greensquare" );
		},
		function () {
			$( this ).addClass( "redsquare" ).removeClass( "greensquare" );
		},
		function () {
			$( this ).removeClass( "redsquare" );
		}
	);

	$( "#row1" ).hover( function () {
		$( ".row1" ).addClass( "hover" );
	}, function () {
		$( ".row1" ).removeClass( "hover" );
	} );
	$( "#row2" ).hover( function () {
		$( ".row2" ).addClass( "hover" );
	}, function () {
		$( ".row2" ).removeClass( "hover" );
	} );
	$( "#row3" ).hover( function () {
		$( ".row3" ).addClass( "hover" );
	}, function () {
		$( ".row3" ).removeClass( "hover" );
	} );
	$( "#row4" ).hover( function () {
		$( ".row4" ).addClass( "hover" );
	}, function () {
		$( ".row4" ).removeClass( "hover" );
	} );
	$( "#row5" ).hover( function () {
		$( ".row5" ).addClass( "hover" );
	}, function () {
		$( ".row5" ).removeClass( "hover" );
	} );

	$( "#col1" ).hover( function () {
		$( ".col1" ).addClass( "hover" );
	}, function () {
		$( ".col1" ).removeClass( "hover" );
	} );
	$( "#col2" ).hover( function () {
		$( ".col2" ).addClass( "hover" );
	}, function () {
		$( ".col2" ).removeClass( "hover" );
	} );
	$( "#col3" ).hover( function () {
		$( ".col3" ).addClass( "hover" );
	}, function () {
		$( ".col3" ).removeClass( "hover" );
	} );
	$( "#col4" ).hover( function () {
		$( ".col4" ).addClass( "hover" );
	}, function () {
		$( ".col4" ).removeClass( "hover" );
	} );
	$( "#col5" ).hover( function () {
		$( ".col5" ).addClass( "hover" );
	}, function () {
		$( ".col5" ).removeClass( "hover" );
	} );

	$( "#tlbr" ).hover( function () {
		$( ".tlbr" ).addClass( "hover" );
	}, function () {
		$( ".tlbr" ).removeClass( "hover" );
	} );
	$( "#bltr" ).hover( function () {
		$( ".bltr" ).addClass( "hover" );
	}, function () {
		$( ".bltr" ).removeClass( "hover" );
	} );
	//setRandomValue();
	generateGoals( goals );
}
var seedvalue = "25";

var goalNumbers;

function genGoals() {
	var goalnums = new Array();
	if ( seedvalue[ 24 ] === null ) {
		//console.log( "errr" );
	}
	for ( var i = 0; i <= 25; i++ ) {
		//console.log( seedvalue[ i ] );
		//console.log( "temp " + temp );

		//console.log( goalnums[ i ] );
	}
	goalNumbers = goalnums;
}
var arrayOfGoals = new Array();
var tempArr = new Array();
var tempNum = 0;

function createGoalList() {
	var r = new Srand( seedvalue );
	for ( var i = 0; i <= 24; i++ ) {
		index = r.randomIntegerIn( 0, goals.length - 1 );
		if ( tempNum === 0 ) {
			tempArr[ i ] = index;
			tempNum++;
		} else {
			tempNum = 0;
			for ( var x = 0; x < tempArr.length; x++ ) {
				tempNum++;
				console.log( "yo" );
				if ( index === tempArr[ x ] ) {
					index = r.randomIntegerIn( 0, goals.length - 1 );
					x = 0;
					console.log( "thinking" );
				}

				if ( tempNum === tempArr.length - 1 ) {
					tempArr[ i ] = index;
				}
			}
		}
		console.log( index );
		arrayOfGoals[ i ] = goals[ index ];
	}
}

function generateGoals( goalList ) {
	createGoalList();
	genGoals();
	slot1.innerText = arrayOfGoals[ 0 ];
	slot2.innerText = arrayOfGoals[ 1 ];
	slot3.innerText = arrayOfGoals[ 2 ];
	slot4.innerText = arrayOfGoals[ 3 ];
	slot5.innerText = arrayOfGoals[ 4 ];
	slot6.innerText = arrayOfGoals[ 5 ];
	slot7.innerText = arrayOfGoals[ 6 ];
	slot8.innerText = arrayOfGoals[ 7 ];
	slot9.innerText = arrayOfGoals[ 8 ];
	slot10.innerText = arrayOfGoals[ 9 ];
	slot11.innerText = arrayOfGoals[ 10 ];
	slot12.innerText = arrayOfGoals[ 11 ];
	slot13.innerText = arrayOfGoals[ 12 ];
	slot14.innerText = arrayOfGoals[ 13 ];
	slot15.innerText = arrayOfGoals[ 14 ];
	slot16.innerText = arrayOfGoals[ 15 ];
	slot17.innerText = arrayOfGoals[ 16 ];
	slot18.innerText = arrayOfGoals[ 17 ];
	slot19.innerText = arrayOfGoals[ 18 ];
	slot20.innerText = arrayOfGoals[ 19 ];
	slot21.innerText = arrayOfGoals[ 20 ];
	slot22.innerText = arrayOfGoals[ 21 ];
	slot23.innerText = arrayOfGoals[ 22 ];
	slot24.innerText = arrayOfGoals[ 23 ];
	slot25.innerText = arrayOfGoals[ 24 ];


}
$( setup );