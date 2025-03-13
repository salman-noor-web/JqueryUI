$( function() {
    $( "#draggable" ).draggable();
  } );
  
$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

$( function() {
    $( "#accordion" ).accordion();
  } );

$( function() {
    $( "#dialog" ).dialog();
  } );

$( function() {
    $( "#datepicker" ).datepicker();
  } );

$( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );

$( function() {
    $( "#slider" ).slider();
  } );

$( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );

$( function() {
    $( "#tabs" ).tabs();
  } );