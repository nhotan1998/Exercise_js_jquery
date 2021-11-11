window.addEventListener("load", function () {
    const selectLocation = document.querySelector(".select-location");
    const listLocation = document.querySelectorAll(".list-group .list-group-item");
    
    selectLocation.addEventListener("change", function() {
        let select = this.value;
        // clear active class
        listLocation.forEach(x => {
            x.className = "list-group-item";
        })
        
        for (let i = 0; i <= listLocation.length; i++) {
            if (select === "even") {
                if (i % 2 !== 0) {
                    listLocation[i].className += " active";
                }
              } else if (select === "odd") {
                if (i % 2 == 0) {
                    listLocation[i].className += " active";
                }
              } else if (select === "Select location" || select === "reset") {
                    listLocation[i].className = "list-group-item";
              } else {
                    listLocation[select - 1].className += " active";
                    return;
              }
        }
    })
})
