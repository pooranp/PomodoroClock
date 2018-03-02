$(document).ready(function (){
  var alarm = $('#alarm')[0];
  var resetBtn = $('#reset').hide();
  var restTime = parseInt($('#restCount').html());
  var workTime = parseInt($('#workCount').html());
  var workSet;
	var restSet;
  

  // BEGIN 'MIN REST'
  $('#minRest').on('click', function() {
    if (restTime > 5) {
    restTime -= 5;
    $('#restCount').html(restTime);
  };
  });
  // END 'MIN REST'
   
  // BEGIN 'ADD REST'
  $('#addRest').on('click', function() {
    if (restTime < 60)
    restTime += 5;
    $('#restCount').html(restTime)
  });
  // END 'ADD REST'
  
  // BEGIN 'MIN TIME'
  $('#minTime').on('click', function() {
    if (workTime > 5){
    workTime -= 5;
    $('#workCount').html(workTime);
    };
  });
  // END 'MIN TIME'
  
  // BEGIN 'ADD TIME'
  $('#addTime').on('click', function (){
    if (workTime < 60) {
      workTime += 5;
      $('#workCount').html(workTime);
    };    
  });
  // END 'ADD TIME'
  
$('#reset').click(function() {
	restTime = 5;
	workTime = 5;
	$('#workCount').html(workTime);
	$('#restCount').html(restTime);
	$('#addRest, #minRest, #restBox, #restCount, #workBox, #addTime, #workCount, #minTime').show();
	$('#timeType').hide();
	$('#start').show();
	$(this).hide();
});
  
	  
  // BEGIN CLOCK
	
  $('#start').click(function runClock(){
   $('button').hide();
   $('#timeType').html('Work').show();
   $('#workBox').show();
   $('#restCount').hide();
    var countSeconds = setInterval(countdown1, 1000);
	  workTime *= 60;
    function countdown1() {
      workTime -= 1;
      if (workTime === 0) {
		  alarm.play();
        $('#workBox').hide();
          clearInterval(countSeconds);
		  var startRest = setInterval(restTimer, 1000);
		  restTime *= 60; 
      };
		if(workTime%60>=10) {
			$('#workCount').html(Math.floor(workTime/60) + ':' + workTime%60)
			}
		else {
			$('#workCount').html(Math.floor(workTime/60) + ':0' + workTime%60)
		};
		
		function restTimer() {
      $('#timeType').html('Rest');
      $('#restCount').show();
      restTime -= 1;
      if (restTime === 0){
        clearInterval(startRest);
		  alarm.play();
		  $('#reset').show();
      };
			if(restTime%60>=10) {
			$('#restCount').html(Math.floor(restTime/60) + ':' + restTime%60)
			}
		else {
			$('#restCount').html(Math.floor(restTime/60) + ':0' + restTime%60)
		};
    };
  };
    
    }); // END CLOCK
  
}); // END DOCUMENT READY