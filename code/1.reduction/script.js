/*
1. Créer ma fonction
2. Binder cette fonction au clic du bouton
*/

function compute()
{
    // let input = document.getElementById('typing-input');
    var input = $('#typing-input');
    let contenu = input.val();
    let result = contenu * 0.8;
    // let div = document.getElementById('result-div');
    var div = $('#result-div');
    div.html(result);

    if (result <= 50)
    {
        div.css('color', 'green');
    }
    else
    {
        div.css('color', 'red');
    }
}

// let bouton = document.getElementById('compute-btn');
var bouton = $('#compute-btn');
// bouton.addEventListener('click', compute);
bouton.click(compute);
