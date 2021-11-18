    const btnDeleteRow = document.querySelectorAll("input[type='button']");
    const btnAdd = document.querySelector(".btn-add");
    const btnDelete = document.querySelector(".btn-delete");
    const table = document.querySelector("#myTable");
    const checkBoxAll = document.querySelector("#checkBoxAll");
    const getRow = document.getElementsByTagName("tr");
    const getCell = document.getElementsByTagName("td");
    var arrayRow = getRow.length;

    
    handleEvent('click',true);
    handleEvent('focusout',false);
    // delete one row
    function myDeleteOneRow(selector) {
        const x = selector.parentNode.parentNode.rowIndex;
        table.deleteRow(x);
        handleEvent("click",true);
    }
    
    // add row
    function myCreateFunction() {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        cell1.innerHTML = "<input type='checkbox' id='checkbox' />";
        cell2.innerHTML = "<p class='nameTable'></p>";
        cell3.innerHTML = "<p class='emailTable'></p>";
        cell4.innerHTML = "<p class='phoneTable'></p>";
        cell5.innerHTML = "<td><input type='button' value='delete' onclick='myDeleteOneRow(this)'/></td>";
        arrayRow++;
        handleEvent("click",true);
        handleEvent("focusout",false);
    }
    // delete row
    function myDeleteFunction () {
        const inputChecked = document.querySelectorAll("#checkbox");
        inputChecked.forEach(x => {
            if (x.checked) {
                x.parentNode.parentNode.remove();
                checkBoxAll.checked = false;
            }
        })
        arrayRow--;
        handleEvent("click",true);
    }
    // handleEvent
    function handleEvent(event,status) {
        const arrayCell = getCell.length;
        const regexName = /^[a-zA-Z\s]+$/;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPhone = /^[0][0-9]{9}/;
            for (let i = 0; i < arrayCell; i++) {
                getCell[i].addEventListener(event, function() {
                    getCell[i].contentEditable = status;
                    if (event === "focusout") {
                        if (getCell[i].children[0].classList.contains("nameTable")) {
                            checkValidate(regexName,getCell[i].textContent);
                        }
                        if (getCell[i].children[0].classList.contains("emailTable")) {
                            checkValidate(regexEmail,getCell[i].textContent);
                        }
                        if (getCell[i].children[0].classList.contains("phoneTable")) {
                            checkValidate(regexPhone,getCell[i].textContent);
                        }
                    }
                })
            }
        
    } 
    // checkAll
    function myCheckAll() {
        const  list = document.querySelectorAll("input[type='checkbox']");
        list.forEach(x => {
            if (checkBoxAll.checked) {
                x.checked = true;
            } else {
                x.checked = false;
            }
        })
    }

    // Validate
    function checkValidate(regex,message) {
        if(!regex.test(message)) {
            alert("Invalid");
        }
    }
