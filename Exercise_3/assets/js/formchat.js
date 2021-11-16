window.addEventListener("load", function () {
    const formChat1 = document.querySelector(".form1 .messages-inputArea");
    const formChat2 =  document.querySelector(".form2 .messages-inputArea");
    const inputMsg1 =  document.querySelector(".form1 .messages-input");
    const inputMsg2 =  document.querySelector(".form2 .messages-input");
    const chatMsg1 =  document.querySelector(".form1 .messages-chat");
    const chatMsg2 =  document.querySelector(".form2 .messages-chat");
    const btnResetForm1 =  document.querySelector(".form1 .btn-reset");
    const btnResetForm2 =  document.querySelector(".form2 .btn-reset");
    const btnBoldForm1 = document.querySelector(".form1 .btn-bold");
    const btnBoldForm2 = document.querySelector(".form2 .btn-bold");
    const btnItalicForm1 = document.querySelector(".form1 .btn-italic");
    const btnItalicForm2 = document.querySelector(".form2 .btn-italic");
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

    boldButton(btnBoldForm1,inputMsg1);
    boldButton(btnBoldForm2,inputMsg2);
    italicButton(btnItalicForm1,inputMsg1);
    italicButton(btnItalicForm2,inputMsg2);
    resetButton(btnResetForm1,inputMsg1);
    resetButton(btnResetForm2,inputMsg2);

    // Bold
    function boldButton(selector,message) {
      selector.addEventListener("click", function () {
        message.classList.add("bold");
      })
    }
    // Italic
    function italicButton(selector,message) {
      selector.addEventListener("click", function () {
        message.classList.add("italic");
      })
    }
    //  reset
    function resetButton(selector,message) {
      selector.addEventListener("click", function () {
        message.classList.remove("bold");
        message.classList.remove("italic");
      })
    }
    
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
      }
    );
  
    // form chat 2
    formChat2.addEventListener("submit", function (event) {
        formSubmit(event, 1, inputMsg2);
      }
    );
  
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
  
