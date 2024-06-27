function skillsMember() {
  var member = document.getElementById('member');
  var memberSkills = document.getElementById('memberSkills');
  var memberNav = document.getElementById('memberNav');
  var memberNavItems = memberNav.getElementsByTagName('li');
  var memberNavItemsLength = memberNavItems.length;
  var memberSkillsItems = memberSkills.getElementsByClassName('memberSkills-item');
  var memberSkillsItemsLength = memberSkillsItems.length;

  for (var i = 0; i < memberNavItemsLength; i++) {
    memberNavItems[i].addEventListener('click', function() {
      for (var j = 0; j < memberNavItemsLength; j++) {
        memberNavItems[j].classList.remove('active');
      }
      this.classList.add('active');
      for (var k = 0; k < memberSkillsItemsLength; k++) {
        memberSkillsItems[k].classList.remove('active');
      }
      var memberSkillsItemsActive = memberSkills.querySelector('.memberSkills-item[data-member="' + this.getAttribute('data-member') + '"]');
      memberSkillsItemsActive.classList.add('active');
    });
  }
}