let pointbonus = 0;
let pointmalus = 0;
let pointhtml = 0;

const lienEval = document.getElementById('lienEval');

sessionStorage.clear();

// photo 1
function reponse2() { // reponse fausse affiche message perdu
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.message1').style.display = 'block'; // passer le style display none en display block
    pointmalus += 1;
}


function reponse3() {  // reponse fausse affiche message perdu
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.message1').style.display = 'block'; // passer le style display none en display block
    pointmalus += 1;
}


function reponse1() { // reponse bonne affiche bloc suivant
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.photo2').style.display = 'block'; // afficher exos suivant
    document.querySelector('.rep1').style.display = 'none'; // cacher les boutons précédants
    document.querySelector('.rep2').style.display = 'none';
    document.querySelector('.rep3').style.display = 'none';

    if (document.querySelector('.message1').style.display = 'block') {
        document.querySelector('.message1').style.display = 'none';
    }
    pointbonus += 2;
}

//photo2
function reponse4() { // reponse fausse affiche message perdu
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.message2').style.display = 'block'; // passer le style display none en display block
    pointmalus += 1;
}


function reponse5() {  // reponse fausse affiche message perdu
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.message2').style.display = 'block'; // passer le style display none en display block
    pointmalus += 1;
}


function reponse6() { // reponse bonne affiche bloc suivant
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.photo3').style.display = 'block'; // afficher exos suivant
    document.querySelector('.rep4').style.display = 'none'; // cacher les boutons précédants
    document.querySelector('.rep5').style.display = 'none';
    document.querySelector('.rep6').style.display = 'none';

    if (document.querySelector('.message2').style.display = 'block') {
        document.querySelector('.message2').style.display = 'none';
    }
    pointbonus += 2;
}


//photo3
function reponse7() { // reponse fausse affiche message perdu
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.message3').style.display = 'block'; // passer le style display none en display block
    pointmalus += 1;
}


function reponse9() {  // reponse fausse affiche message perdu
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.message3').style.display = 'block'; // passer le style display none en display block
    pointmalus += 1;
}


function reponse8() { // reponse bonne affiche bloc suivant
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.photo4').style.display = 'block'; // afficher exos suivant
    document.querySelector('.rep7').style.display = 'none'; // cacher les boutons précédants
    document.querySelector('.rep8').style.display = 'none';
    document.querySelector('.rep9').style.display = 'none';

    if (document.querySelector('.message3').style.display = 'block') {
        document.querySelector('.message3').style.display = 'none';
    }
    pointbonus += 2;
}

//photo4
function reponse11() { // reponse fausse affiche message perdu
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.message4').style.display = 'block'; // passer le style display none en display block
    pointmalus += 1;
}


function reponse12() {  // reponse fausse affiche message perdu
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.message4').style.display = 'block'; // passer le style display none en display block
    pointmalus += 1;
}


function reponse10() { // reponse bonne affiche bloc suivant
    event.stopPropagation();
    event.preventDefault();

    document.querySelector('.evaluation').style.display = 'block';
    document.querySelector('.rep10').style.display = 'none'; // cacher les boutons précédants
    document.querySelector('.rep11').style.display = 'none';
    document.querySelector('.rep12').style.display = 'none';

    if (document.querySelector('.message4').style.display = 'block') {
        document.querySelector('.message4').style.display = 'none';
    }
    pointbonus += 2;

    console.log(pointhtml = (pointbonus - pointmalus));
}


lienEval.addEventListener('click', function (event) {
    event.stopPropagation();
    event.preventDefault();

    sessionStorage.setItem("pointJeux", pointhtml);
    window.location.href = "eval_html_css.php";
});


