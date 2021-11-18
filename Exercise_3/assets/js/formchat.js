window.addEventListener("load", function () {
  const formChat1 = document.querySelector(".form1 .messages-inputArea");
  const formChat2 =  document.querySelector(".form2 .messages-inputArea");
  const inputMsg1 =  document.querySelector(".form1 .messages-input");
  const inputMsg2 =  document.querySelector(".form2 .messages-input");
  const chatMsg1 =  document.querySelector(".form1 .messages-chat");
  const chatMsg2 =  document.querySelector(".form2 .messages-chat");
  const btnBold1 = document.querySelector(".form1 .btn-bold");
  const btnBold2 = document.querySelector(".form2 .btn-bold");
  const btnItalic1 = document.querySelector(".form1 .btn-italic");
  const btnItalic2 = document.querySelector(".form2 .btn-italic");
  const btnResetForm1 =  document.querySelector(".form1 .btn-reset");
  const btnResetForm2 =  document.querySelector(".form2 .btn-reset");
  const avatarForm1 = document.querySelector(".avatar-userTan").src;
  const avatarForm2 = document.querySelector(".avatar-userDuy").src;
  
  // showData
  function showData(user, msg) {
    // là 2 tham số truyền vào ở hàm formSubmit
    const userFormChat1 = 2;
    if (user === userFormChat1) {
        chatMsg1.insertAdjacentHTML(
          "beforeend",
          renderMsg(avatarForm1, msg, "right")
        );
        chatMsg2.insertAdjacentHTML(
          "beforeend",
          renderMsg(avatarForm1, msg, "left")
        );
      } else {
        chatMsg1.insertAdjacentHTML(
          "beforeend",
          renderMsg(avatarForm2, msg, "left")
        );
        chatMsg2.insertAdjacentHTML(
          "beforeend",
          renderMsg(avatarForm2, msg, "right")
        );
      }
    }
  btnEvent(btnBold1);
  btnEvent(btnBold2);
  btnEvent(btnItalic1);
  btnEvent(btnItalic2);
  // btn bold 
  function btnEvent(selector) {
    selector.addEventListener("click", function () {
      selector.classList.toggle("active");
      if (selector.classList.contains("active")) {
        selector.style.border = "2px cyan solid";
      } else {
        selector.style.border = "0px";
      }
    })
  }
  // reset btn data
  (function () {
    btnResetForm1.addEventListener("click", function () {
      if (btnBold1.classList.contains("active")) {
        btnBold1.style.border = "0px";
      }
      if (btnItalic1.classList.contains("active")) {
        btnItalic1.style.border = "0px";
      }

      if (inputMsg1.innerHTML) {
        inputMsg1.innerHTML = "";
      }
    });
    btnResetForm2.addEventListener("click", function () {
      if (btnBold2.classList.contains("active")) {
        btnBold2.style.border = "0px";
      }
      if (btnItalic2.classList.contains("active")) {
        btnItalic2.style.border = "0px";
      }

      if (inputMsg2.innerHTML) {
        inputMsg2.innerHTML = "";
      }
    });
  })();
  // form Submit
  function formSubmit(event, user, msgInput) {
    event.preventDefault();
    const message = msgInput.innerHTML;
    if (message) {
      showData(user, message);
      cleanValue(msgInput);
    } else {
      alert("Please enter text to send")
    }
  }
  
    // form chat 1
    formChat1.addEventListener("submit", function (event) {
        formSubmit(event, 2, inputMsg1);
    });
    // form chat 2
    formChat2.addEventListener("submit", function (event) {
        formSubmit(event, 1, inputMsg2);
    });
  
    // Render chat Left Right
    function renderMsg(avatar, msg, side) {
      return `<div class="msg ${side}-msg">
                  <div class="msg-img" style="background-image: url(${avatar})"></div>
                  <div class="msg-chat">
                      <div class="msg-text">
                          ${msg}
                      </div>
                  </div>
              </div>`;
    }
    //   clean Value & Scroll;
    function cleanValue(msgInput) {
      msgInput.innerHTML = "";
      chatMsg1.scrollTop = 5000;
      chatMsg2.scrollTop = 5000;
    }

});
