var VERSION = '1.0.0';
var LAST_UPDATE = '29/01/2016';

function changeSubtitle() {
  var subtitlesList = [
    "Et bien plus ...",
    "Ou sinon, contactez moi.",
    "Les infos sont ici.",
    "Quelques informations ..."
  ]
  var subtitle = subtitlesList[Math.ceil(Math.random()*subtitlesList.length)-1];
  $("h2.project-tagline").text(subtitle);
}

$(function(){
  $(".version-info-footer .version").text(VERSION);
  $(".version-info-footer .last-update").text(LAST_UPDATE);

  $("h2.project-tagline").click(changeSubtitle);
  changeSubtitle();
})
