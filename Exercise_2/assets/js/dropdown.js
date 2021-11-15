window.addEventListener("load", function () {
    const selectLocation = document.querySelector(".select-location");
    const listSelection = document.querySelectorAll(".list-group .list-group-item");
    
    selectLocation.addEventListener("change", function() {
        let selected = this.value;
        // clear active class
        for (let i = 0; i < listSelection.length; i++) {
            listSelection[i].className = "list-group-item";
        }
        if (selected === "reset") {
            selectLocation.selectedIndex = "0";
        }
        if (selected === "Select location" || selected === "reset") {
            listSelection[i].className = "list-group-item";
            return;
        } 
        for (let i = 0; i < listSelection.length; i++) {
            if (selected === "even") {
                if (i % 2 !== 0) {
                    listSelection[i].classList.add("active");
                }
            } else if (selected === "odd") {
                if (i % 2 == 0) {
                    listSelection[i].classList.add("active");
                }
            } else {
                    listSelection[selected - 1].classList.add("active");
            }
        }
    });
});


