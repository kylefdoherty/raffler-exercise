$(document).ready(function() {
  participantsContainer = $(".js-participants")

  participantsContainer.data("seed").forEach(function(participant) {
    participantElement = $("<div class='participant'></div>");
    participantElement.html(participant.name);

    participantsContainer.append(participantElement);
  });

  $('.js-participant-form').on("submit", function(e) {
    e.preventDefault();

    participantElement = $("<div class='participant'></div>");
    participantElement.html(this.name.value || 'Nameless');

    participantsContainer.prepend(participantElement);
    this.name.value = null;
  });
});
