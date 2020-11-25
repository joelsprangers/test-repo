

//buttons
const toggleButton = document.querySelector('.toggle-image');

//colors
const page = document.querySelector('.page');
const coral = document.querySelector('.background--coral');
const azure = document.querySelector('.background--azure');
const lilac = document.querySelector('.background--lilac');
const peach = document.querySelector('.background--peach');
const amber = document.querySelector('.background--amber');
const colorNav = document.querySelector('.color-nav');

//functions
const slideRight = function () {
    colorNav.classList.remove('color-nav--slide-left');
    colorNav.classList.add('color-nav--slide-right');
}

const slideLeft = function () {
    colorNav.classList.remove('color-nav--slide-right');
    colorNav.classList.add('color-nav--slide-left');
}

const addText = function (textToAdd) {
    document.querySelector('.color-name').innerHTML = textToAdd;
}

const deleteText = function () {
    document.querySelector('.color-name').innerHTML = '';
}

const removeAllEvents = function () {
    coral.classList.remove('background--coral--click');
    page.classList.remove('background--coral--click');
    coral.classList.remove('opacity');
    azure.classList.remove('background--azure--click');
    page.classList.remove('background--azure--click');
    azure.classList.remove('opacity');
    lilac.classList.remove('background--lilac--click');
    page.classList.remove('background--lilac--click');
    lilac.classList.remove('opacity');
    peach.classList.remove('background--peach--click');
    page.classList.remove('background--peach--click');
    peach.classList.remove('opacity');
    amber.classList.remove('background--amber--click');
    page.classList.remove('background--amber--click');
    amber.classList.remove('opacity');
    deleteText();
}

const backgroundCoral = function () {
    removeAllEvents();
    addText('coral');
    coral.classList.add('background--coral--click');
    page.classList.add('background--coral--click');
    coral.classList.add('opacity');
    slideLeft();
}

const backgroundAzure = function () {
    removeAllEvents();
    addText('azure');
    azure.classList.add('background--azure--click');
    page.classList.add('background--azure--click');
    azure.classList.add('opacity');
    slideLeft();
}
const backgroundLilac = function () {
    removeAllEvents();
    addText('lilac');
    lilac.classList.add('background--lilac--click');
    page.classList.add('background--lilac--click');
    lilac.classList.add('opacity');
    slideLeft();
}
const backgroundPeach = function () {
    removeAllEvents();
    addText('peach');
    peach.classList.add('background--peach--click');
    page.classList.add('background--peach--click');
    peach.classList.add('opacity');
    slideLeft();
}
const backgroundAmber = function () {
    removeAllEvents();
    addText('amber');
    amber.classList.add('background--amber--click');
    page.classList.add('background--amber--click');
    amber.classList.add('opacity');
    slideLeft();
}

const pressKey = function (e) {
    if (e.key === '1') {
        backgroundCoral();
    }
    else if (e.key === '2') {
        backgroundAzure();
    }
    else if (e.key === '3') {
        backgroundLilac();
    }
    else if (e.key === '4') {
        backgroundPeach();
    }
    else if (e.key === '5') {
        backgroundAmber();
    }
}

document.addEventListener('keypress', pressKey);

//calls
toggleButton.addEventListener('mouseover', slideRight);
colorNav.addEventListener('mouseleave', slideLeft);
1
coral.addEventListener('click', backgroundCoral);
azure.addEventListener('click', backgroundAzure);
lilac.addEventListener('click', backgroundLilac);
peach.addEventListener('click', backgroundPeach);
amber.addEventListener('click', backgroundAmber);



