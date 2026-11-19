// >>> Put your support email address here (the only thing to change) <<<
const EMAIL = "hello.daolune@gmail.com";

const LANGS = [["en","English"],["fr","Français"],["es","Español"],["pt","Português"],["zh","中文"],["ru","Русский"],["th","ไทย"]];

// Shows the page in the visitor's language (or the one picked), with a language bar on top.
function renderPage(T, body){
  const want = new URLSearchParams(location.search).get("lang") || (navigator.language || "en").slice(0,2).toLowerCase();
  const L = T[want] ? want : "en";
  document.documentElement.lang = L;
  document.getElementById("langs").innerHTML = LANGS.map(([c,n]) => c===L ? "<b>"+n+"</b>" : '<a href="?lang='+c+'">'+n+"</a>").join(" · ");
  document.getElementById("doc").innerHTML = body(T[L], L);
  const back = document.getElementById("back");
  if(back){ back.textContent = T[L].back; back.href = back.getAttribute("href").split("?")[0] + "?lang=" + L; }
  document.title = "Higher or Lower – " + T[L].title;
}
