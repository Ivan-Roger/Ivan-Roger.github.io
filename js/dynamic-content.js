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
  $("h2.project-tagline").click(changeSubtitle);
  changeSubtitle();
})
