window.addEventListener("load", function () {
  const formChat1 = document.querySelector(".form1 .messages-inputArea");
  const formChat2 =  document.querySelector(".form2 .messages-inputArea");
  const inputMsg1 =  document.querySelector(".form1 .messages-input");
  const inputMsg2 =  document.querySelector(".form2 .messages-input");
  const chatMsg1 =  document.querySelector(".form1 .messages-chat");
  const chatMsg2 =  document.querySelector(".form2 .messages-chat");
  const btnResetForm1 =  document.querySelector(".form1 .btn-reset");
  const btnResetForm2 =  document.querySelector(".form2 .btn-reset");
  const avatarForm1 = document.querySelector(".avatar-userTan").src;
  const avatarForm2 = document.querySelector(".avatar-userDuy").src;
  
  // showData
  function showData(user, msg) {
    if (user === 2) {
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

  // reset btn data
  (function () {
    btnResetForm1.addEventListener("click", function () {
      if (inputMsg1.innerHTML) {
        inputMsg1.innerHTML = "";
      }
    });
    btnResetForm2.addEventListener("click", function () {
      if (inputMsg2.innerHTML) {
        inputMsg2.innerHTML = "";
      }
    });
  })();

  // form Submit
    function formSubmit(event, user, msgInput) {
      event.preventDefault();
      const message = msgInput.innerHTML;
      showData(user, message);
      cleanValue(msgInput);
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
