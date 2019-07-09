let btn1 = document.querySelector('#btnUser1'),
  btn2 = document.querySelector('#btnUser2'),
  userInput1 = document.querySelector('#u1Input'),
  userInput2 = document.querySelector('#u2Input'),
  chatBox = document.querySelector('#chatArea'),
  badWords = ["fuck", "suck","shit","retard","ass"];

  btn1.addEventListener('click',addToChat);
  btn2.addEventListener('click',addToChat);

  function addToChat() {
    let mainInput = this.parentElement.querySelector('input');
    let msg = mainInput.value;
    console.log(msg);
    for (var i = 0; i < badWords.length; i++) {
      let pattern = new RegExp(badWords[i],"gi");
      msg = msg.replace(pattern,"****");
    }
    chatBox.value += this.parentElement.querySelector('h2').innerHTML+" : "+msg+"\n";
    mainInput.value = "";
  }
