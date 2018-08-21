	$(document).ready(function() {
		/*
		$('#menu01').mouseenter(function() {
			$(".sub").stop();
			$(".sub").hide();
			$("#sub1").animate({width:'toggle'}).animate({width: '100%'},300);
		    changeClass(1,"0");

	  	});

	  	$('.sub').mouseleave(function() {
	  		goDefaultMenu();
	  	});


	  	$('#menu02').mouseenter(function() {
	  		$(".sub").stop();
	  		$(".sub").hide();

		    $("#sub2").animate({width:'toggle'}).animate({width: '100%'},300);
		    changeClass(2,"0");

	  	});

	  	$('#menu03').mouseenter(function() {
	  		$(".sub").stop();
	  		$(".sub").hide();

		    $("#sub3").animate({width:'toggle'}).animate({width: '100%'},300);
		    changeClass(3,"0");

	  	});


	  	$('#menu04').mouseenter(function() {
	  		$(".sub").stop();
	  		$(".sub").hide();

		    $("#sub4").animate({width:'toggle'}).animate({width: '100%'});
		    changeClass(4,"0");

	  	});

	  	$('#menu05').mouseenter(function() {
	  		$(".sub").stop();
	  		$(".sub").hide();

		    $("#sub5").animate({width:'toggle'}).animate({width: '100%'});
		    changeClass(5,"0");

	  	});

	  	$('#menu06').mouseenter(function() {
	  		$(".sub").stop();
	  		$(".sub").hide();

		    $("#sub6").animate({width:'toggle'}).animate({width: '100%'});
		    changeClass(6,"0");

	  	});


	  	$('#menu07').mouseenter(function() {
	  		$(".sub").stop();
	  		$(".sub").hide();

		    $("#sub7").animate({width:'toggle'}).animate({width: '100%'});
		    changeClass(7,"0");

	  	});
	  	*/

	  	$('#menu01').mouseenter(function() {

			if( !$("#sub1").is(":visible") ){
				$(".sub").stop();
				$(".sub").hide();
		    	$("#sub1").animate({width: 'toggle'});
		    	changeClass(1, "0");
		    }
	  	});


	  	$('#menu02').mouseenter(function() {
	  		if( !$("#sub2").is(":visible") ){
		  		$(".sub").hide();
		    	$("#sub2").animate({width: 'toggle'});
		    	changeClass(2,"0");

		    }
	  	});
		
	  	$('#menu03').mouseenter(function() {
	  		if( !$("#sub3").is(":visible") ){
		  		$(".sub").hide();
		    	$("#sub3").animate({width: 'toggle'});
		    	changeClass(3,"0");
		    }
	  	});


	  	$('#menu04').mouseenter(function() {
	  		if( !$("#sub4").is(":visible") ){
		  		$(".sub").hide();
		    	$("#sub4").animate({width: 'toggle'});
		    	changeClass(4,"0");
		    }
	  	});


	  	$('#menu05').mouseenter(function() {
	  		if( !$("#sub5").is(":visible") ){
		  		$(".sub").hide();
		    	$("#sub5").animate({width: 'toggle'});
		    	changeClass(5,"0");
		    }
	  	});


	  	$('#menu06').mouseenter(function() {
	  		if( !$("#sub6").is(":visible") ){
		  		$(".sub").hide();
		    	$("#sub6").animate({width: 'toggle'});
		    	changeClass(6,"0");
		    }
	  	});

		$('#menu07').mouseenter(function() {
	  		if( !$("#sub7").is(":visible") ){
		  		$(".sub").hide();
		    	$("#sub7").animate({width: 'toggle'});
		    	changeClass(7,"0");
		    }
	  	});
			$('#menu08').mouseenter(function() {
	  		if( !$("#sub8").is(":visible") ){
		  		$(".sub").hide();
		    	$("#sub8").animate({width: 'toggle'});
		    	changeClass(8,"0");
		    }
	  	});

	});

	function changeClass(idx,gubun){

		for(var i=1; i<9; i++ ){
			$("#g_menu"+i).removeClass("menu"+i+"b").addClass("menu"+i);
		}

		if( gubun=="0"){
			$("#g_menu"+idx).removeClass("menu"+idx).addClass("menu"+idx+"b");
		}else{
			$("#g_menu"+idx).removeClass("menu"+idx+"b").addClass("menu"+idx);
		}

	}

	function resetClass(){
		for(var i=1; i<9; i++ ){
			$("#g_menu"+i).removeClass("menu"+i+"b").addClass("menu"+i);
		}
	}

	function changeClass2(idx,sub_idx){

		for(var i=1; i<11; i++ ){
			$(".menu"+i).removeClass("menu"+i+"b").addClass("menu"+i);
		}

		$("#g_menu"+idx).removeClass("menu"+idx).addClass("menu"+idx+"b");
		$("#sub"+idx+"_menu"+sub_idx).removeClass("menu"+sub_idx).addClass("menu"+sub_idx+"b");


	}




