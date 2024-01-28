var handleRefineSearchClick = () => {
  let sendButton = document.getElementsByClassName("chat-footer")[0];

  sendButton.addEventListener("click", () => {
    console.log("Send button clicked");
  });
};

handleRefineSearchClick();