// On définit les valeurs de chaque élé ment du jeu
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// On définit les éléments qui vont prendre pour "valeur" les différentes images
const pImg = document.getElementById('pImg');
const cImg = document.getElementById('cImg');

// On définit les variables de score
const playerScore = document.getElementById('playerScore');
const comScore = document.getElementById('comScore');
// On leur attribue la valeur de 0
let pScore = 0;
let cScore = 0;

// On définit le tableau contenant les différentes images
const choiceArray = ['la-chose-pop', 'groot-pop', 'wolverine-pop'];

// On vérifie dans les tableaux quel élément est selectionné
// () => correspond à une fonction, en gros, c'est comme si on écrivait function ()
const pChoice = (i) => {
    // On cherche la source ayant pour nom l'élément du tableau
    pImg.src = 'assets/img/' + choiceArray[i] + '.png';
    // On lui attribue la valeur de i (si i=0 alors l'image sera La Chose, si i=1, alors l'image sera Groot sinon ce sera Wolverine)
    pImg.value = choiceArray[i];
    compareHands();
}

const cChoice = (i) => {
    cImg.src = 'assets/img/' + choiceArray[i] + '.png';
    cImg.value = choiceArray[i];
}

// On crée une fonction pour le choix de la pierre
rock.addEventListener('click', () => {
    // Math.floor permet d'arrondir la valeur obtenu à l'entier (inférieur) tandis que Math.random permet à l'ordinateur de calculer de manière aléatoire en multipliant, ici par 3
    cChoice(Math.floor(Math.random() * 3));
    // Ici le choix "pierre" sera représenté par 0, dans le tableau "choiceArray"
    pChoice(0);
    // On cache la div, ayant pour id "playerSelect", et on affiche la div, ayant pour id "result"
    document.getElementById('playerSelect').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
});

// On crée une fonction pour le choix du papier
paper.addEventListener('click', () => {
    cChoice(Math.floor(Math.random() * 3));
    // Ici le choix "feuille" sera représenté par 1, dans le tableau "choiceArray"
    pChoice(1);
    document.getElementById('playerSelect').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
});

// On crée une fonction pour le choix des ciseaux
scissors.addEventListener('click', () => {
    cChoice(Math.floor(Math.random() * 3));
    // Ici le choix "ciseaux" sera représenté par 2, dans le tableau "choiceArray"
    pChoice(2);
    document.getElementById('playerSelect').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
});

// On réutilise la fonction créée dans la constante pChoice pour comparer les résultats
const compareHands = () => {
    // On compare la valeur de l'image du joueur et celle de l'ordi et on applique les règles du Pierre-Feuille-Ciseaux
    if (pImg.value == 'la-chose-pop') {
        if (cImg.value == 'groot-pop') {
            cScore += 1;
        }
        else if (cImg.value == 'wolverine-pop') {
            pScore += 1;
        }

    }
    else if (pImg.value == 'wolverine-pop') {
        if (cImg.value == 'la-chose-pop') {
            cScore += 1;
        }
        else if (cImg.value == 'groot-pop') {
            pScore += 1;
        }
    }
    if (pImg.value == 'groot-pop') {
        if (cImg.value == 'wolverine-pop') {
            cScore += 1;
        }
        else if (cImg.value == 'la-chose-pop') {
            pScore += 1;
        }
    }

    var audio = new Audio("assets/media/avengers-suite-theme.mp3");
    audio.loop = false;

    document.getElementById('validate').addEventListener('click', function () {
        // On actualise les résultats
        playerScore.textContent = pScore;
        comScore.textContent = cScore;
        document.getElementById('playerSelect').style.display = 'flex';
        document.getElementById('result').style.display = 'none';
        if (pScore == 3) {
            document.getElementById('result').style.display = 'none';
            document.getElementById('finish').style.display = 'flex';
            document.getElementById('lose').style.display = 'none';
            document.getElementById('playerSelect').style.display = 'none';
            audio.play();
        }
        else if (cScore == 3) {
            document.getElementById('result').style.display = 'none';
            document.getElementById('finish').style.display = 'flex';
            document.getElementById('win').style.display = 'none';
            document.getElementById('playerSelect').style.display = 'none';
        }
    });



    document.getElementById('restart').addEventListener('click', function () {
        location.reload();
    });
}

// Pour se connecter

let logoUser = document.getElementById('logoUser');

logoUser.addEventListener('click', () => {
    document.getElementById('container').style.display = 'flex';
});