/*
1. Evenement : click
2. Sur quels éléments du DOM : button
3. Quelle est la fonctionnalité : clignoter
*/

function changeColor()
{
    if ($('div').css('color') == 'rgb(255, 0, 0)')
    {
        $('div').css('color', 'rgb(0, 0, 255)');
    }
    else
    {
        $('div').css('color', 'red');
    }
}

function clignoter()
{
    setInterval(changeColor, 500);
}

$('button').click(clignoter);