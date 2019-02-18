$(document).ready(function () {
$(function () {

   // var lapsNr = 1;

    function format(ms) {
        var minutes = Math.floor(ms / (1000 * 60)),
            seconds = Math.floor((ms - minutes * 1000 * 60) / 1000),
            fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 10);

        return minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.' + (fract < 10 ? '0' : '') + fract;
    }
	
    $('#demo').mobiscroll().timer({
        theme: 'ios',
        display: 'inline',
        step: 0.01,
        mode: 'stopwatch',
        rows: 1,
        cssClass: 'mbsc-no-padding',
         onReset: function () {
            $('#laps').remove();
            //lapsNr = 1;
        },
        onLap: function (ev, inst) {
            $('#laps').prepend('<tr><td>#' + lapsNr + '</td><td> - ' + format(ev.lap) + ' - </td><td>' + format(ev.ellapsed) + '</td></tr>');
            lapsNr++;
        } ,onStart: function (event, inst) {        // More info about onStart: https://docs.mobiscroll.com/4-5-3/javascript/timer#event-onStart
            
	
        },
    });
	

});


});

