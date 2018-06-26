// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// Select color input
let colorPick = $('#colorPicker');
// Select size input
let input_Height = $('#inputHeight');
let input_Width = $('#inputWeight');


// Define the canvas
let pixel_Canvas = $('#pixelCanvas');
 
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    makeGrid();
    event.preventDefault();
});


function makeGrid() {

// Your code goes here!

    // Clear the canvas before creating a new one
 
    pixel_Canvas.children().remove('tr');
     
    // Assigns values to height and width
 
    let height = input_Height.val();
    let width = input_Width.val();
 
    // Build the canvas
    if (height > 50 || width > 50 || height < 1 || width < 1) {
        if (!error.classList.contains("error")) {
            error.classList.toggle("error");
            error.innerText = "Invalid Entry!! The Grid Heigth and Width Has to be less than 50 and Greater than 1";
            backUp();
        }
    } 
    else{
        error.innerText = "";
        $("span").removeClass("error");
    // Create rows
    for (row = 1; row <= height; row++){
        $('#pixelCanvas').append('<tr></ tr>');
    }
    // Create columns
	for (col = 1; col <= width; col++){
    	$('#pixelCanvas tr').each(function () {
            $(this).append('<td></td>');
        });
    }
}
}


pixel_Canvas.on('click', 'td', function(){
	let color = $('#colorPicker').val();
    $(this).css('background-color', color);
});
