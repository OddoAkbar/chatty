document.querySelector("#start_chat").addEventListener("click", (event) => {
  
  const charac_help = document.getElementById("chat_help");
  charac_help.style.display = "none";
  
  const chat_in_support = document.getElementById("chat_in_support");
  chat_in_support.style.display = "block";
  
  const email = document.getElementById("email").value;
  const text = document.getElementById("txt_help").value;
  
  const socket = io();

  socket.on("connect", () => {
    const params = {
      email,
      text
    }
    socket.emit("client_first_access", params, (call, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(call);
      }
    })
  })

});
