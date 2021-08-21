console.log('JS Connected!');

/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

const $startGameBtn = $('.startGameBtn');
const $closeBtn = $('.closeButton');
const $containerDiv = $('.container');

const showContainer = () => {
    $containerDiv.addClass('active');
}

const closeContainer = () => {
    $containerDiv.removeClass('active');
}

$startGameBtn.on('click', (e) => {
    e.preventDefault();
    showContainer();
});

$closeBtn.on('click', (e) => {
    e.preventDefault();
    closeContainer();
})