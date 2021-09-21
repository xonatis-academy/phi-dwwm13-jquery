/*
1. événement : click
2. les éléments concernés : tous les boutons du tableau
3. fonctionnalité (on choisit) : cocher
*/

var joueurEncours = 'X';

function cocher() {
    $(this).html(joueurEncours);
}

$('table button').click(cocher);


/*
1. événement : click
2. les éléments concernés : id change-btn
3. fonctionnalité (on choisit) : changerJoueur
*/

function changerJoueur() {
    if (joueurEncours == 'X')
    {
        joueurEncours = 'O';
    }
    else
    {
        joueurEncours = 'X';
    }
}

$('#change-btn').click(changerJoueur);