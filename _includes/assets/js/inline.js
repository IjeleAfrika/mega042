if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

var xxxload = 0;

document.getElementById('gform').onload = function(){
    /*Execute on every reload on iFrame*/
    xxxload++;
    if(xxxload > 1){
        /*Second reload is a submit*/
        document.location = "https://chat.whatsapp.com/IHmBJgBir0n1QqIHjgnkgw";
    }
}
