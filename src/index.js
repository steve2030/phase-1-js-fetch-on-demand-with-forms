const init = () => {
    grabFormElement();
}

function grabFormElement() {
    let form = document.querySelector('form');
    form.addEventListener('submit', displayMovie);
}

function displayMovie(e) {
    e.preventDefault();
    let titleHead = document.querySelector('#movieDetails h4');
    let summaryParagraph = document.querySelector('#movieDetails p');
    let inputValue = document.querySelector('#searchByID').value;
    fetch(`http://localhost:3000/movies/${inputValue}`)
        .then(res => res.json())
        .then(movie => {
            titleHead.innerText = movie.title;
            summaryParagraph.innerText = movie.summary;

        })


    e.target.reset();
}

document.addEventListener('DOMContentLoaded', init);
