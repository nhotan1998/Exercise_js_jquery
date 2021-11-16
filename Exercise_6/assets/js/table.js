    const btnDeleteRow = document.querySelectorAll("input[type='button']");
    const btnAdd = document.querySelector(".btn-add");
    const btnDelete = document.querySelector(".btn-delete");
    const table = document.querySelector("#myTable");
    const checkBoxAll = document.querySelector("#checkBoxAll");
    const getRow = document.getElementsByTagName("tr");
    const getCell = document.getElementsByTagName("td");
    var arrayRow = getRow.length;

    
    handleEvent('dblclick',true);
    handleEvent('focusout',false);
    // delete one row
    function myDeleteOneRow(selector) {
        const x = selector.parentNode.parentNode.rowIndex;
        table.deleteRow(x);
        handleEvent("dblclick",true);
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
        cell2.innerHTML = "<p></p>";
        cell3.innerHTML = "<p></p>";
        cell4.innerHTML = "<p></p>";
        cell5.innerHTML = "<td><input type='button' value='delete' onclick='myDeleteOneRow(this)'/></td>";
        arrayRow++;
        handleEvent("dblclick",true);
        handleEvent("focusout",false);
    }
    // delete row
    function myDeleteFunction () {
        const inputChecked = document.querySelectorAll("#checkbox");
        inputChecked.forEach(x => {
            if (x.checked) {
                x.parentNode.parentNode.remove();
            }
        })
        arrayRow--;
        handleEvent("dblclick",true);
    }
    // handleEvent
    function handleEvent(event,status) {
        const arrayCell = getCell.length;
        for (let i = 0; i < arrayRow; i++) {
            for (let j = 0; j < arrayCell; j++) {
                getCell[j].addEventListener(event, function() {
                    getCell[j].contentEditable = status;
                })
            }
        }
    } 
    // checkAll
    function myCheckAll() {
        const  list = document.querySelectorAll("input[type='checkbox']");
        list.forEach(x => {
            if (checkBoxAll.checked) {
                x.checked = true;
            } else {
                return x.checked = false;
            }
        })
    }

