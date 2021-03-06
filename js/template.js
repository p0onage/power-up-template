/* global TrelloPowerUp */

var YOUTRACK_ICON = './images/youtrack.png';

var GetYouTrackLinkIfAvailable = function(t){
  var youTrackUrl = "http://source.scannt.lan:8080/";
  t.card('name')
  .get('name')
  .then(function(cardName){
    var lowercaseName = cardName.toLowerCase();
    var issueNumberRegex = /[A-Za-z\d]{1,4}-[0-9]{1,5}/;
    var issueNumberMatches = lowercaseName.match(issueNumberRegex);
    if(!issueNumberMatches){
       window.open(youTrackUrl,'_blank');
    } else {
      youTrackUrl = "http://source.scannt.lan:8080/issue/$0".replace(/\$0/g, issueNumberMatches[0]);
      window.open(youTrackUrl,'_blank');
    }
  });
};


TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: YOUTRACK_ICON,
      text: 'YouTrack',
      callback: function(t){
        GetYouTrackLinkIfAvailable(t);
      }
    }];
  }
});
