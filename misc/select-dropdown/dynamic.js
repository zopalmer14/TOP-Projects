
function styleSelectDropDown() {
    // DOM references 
    const select_input = document.querySelector('select');

    // toggle the styling when the select input is clicked
    select_input.addEventListener('click', () => {
        select_input.classList.toggle('showing');
    })

    // if the user clicks outside the select input, remove the styling
    window.addEventListener("click", (e) => {
        if (!select_input.contains(e.target)) {
            select_input.classList.remove("showing");
        }
    });
}

styleSelectDropDown();