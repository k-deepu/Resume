const contentContainer = document.getElementById('contentContainer');

function loadContent(page) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentContainer.innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

document.getElementById('aboutMeLink').addEventListener('click', function (e) {
    e.preventDefault();
    loadContent('about.html');
});

document.getElementById('educationLink').addEventListener('click', function (e) {
    e.preventDefault();
    loadContent('education.html');
});

document.getElementById('skillsLink').addEventListener('click', function (e) {
    e.preventDefault();
    loadContent('skills.html');
});

document.getElementById('myWorksLink').addEventListener('click', function (e) {
    e.preventDefault();
    loadContent('myworks.html');
});

document.getElementById('contactMeLink').addEventListener('click', function (e) {
    e.preventDefault();
    loadContent('contactme.html');
});

document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html';
});



