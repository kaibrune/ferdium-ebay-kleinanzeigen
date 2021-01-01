"use strict";

const path = require('path');
module.exports = (Ferdi) => {
  const getMessages = () => {
    
    var output=0;
    $('.ConversationList').find('.ConversationListItem--Counter').each(function () {
        output += parseInt(this.innerHTML);
    });
    const directMessages = output;

    Ferdi.setBadge(directMessages);
  }

  Ferdi.loop(getMessages);

  document.addEventListener("DOMContentLoaded", function(){
    var breadcrump = document.getElementById("vap-brdcrmb");
    if(breadcrump!=null){
      breadcrump.innerHTML ='<a class="back-button" href="/m-nachrichten.html"><span class="Button--Body"><span>Return to messenger</span></span></a>' + breadcrump.innerHTML;
    }

    var error_msg = document.getElementById("my-manageads-content");
    if(error_msg!=null){
    error_msg.innerHTML ='<a class="back-button" href="/m-nachrichten.html"><span class="Button--Body"><span>Return to messenger</span></span></a>' + error_msg.innerHTML;
    }
});


  Ferdi.injectCSS(path.join(__dirname, 'style.css'));
}