function deplacer(event) {
    var touche = event.which;
    var element = $('img');
    if (touche == 37) 
    {
        $('img').css('left', '-=5px');
    } 
    else if (touche == 38) 
    {
        element.css('top', '-=5px');
    } 
    else if (touche == 39) 
    {
        element.css('left', '+=5px');
    } 
    else if (touche == 40) {
        element.css('top', '+=5px');
    }
}

$(document).keydown(deplacer);