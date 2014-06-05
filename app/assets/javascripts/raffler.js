Raffler = {};

Raffler.random = function(min, max) {
  // Shamelessly copied from Mozilla.
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Raffler.seedData = function() {
  $(Raffler.participants).each(function(index, participant) {
    div = $("<div class='participant'></div>");
    div.text(participant.name);

    Raffler.container.prepend(div);
  });
}

Raffler._addParticipant = function(e) {
  e.preventDefault();

  div = $("<div class='participant'></div>");
  div.text(this.name.value || 'Nameless');

  Raffler.container.prepend(div);

  this.name.value = null;
}

Raffler._pickWinner = function(value) {
  participants = Raffler.container.children("div");
  winnerIndex = Raffler.random(0, participants.length - 1);

  name = $(participants).eq(winnerIndex).html();
  $(participants).eq(winnerIndex).html(name + "<span class='label label-success'>Winner</span>");
}

Raffler.initialize = function() {
  this.container    = $('.js-participants');
  this.participants = this.container.data("seed") || [];

  $('.js-pick-winner').on("click", this._pickWinner);
  $(".js-participant-form").on("submit", this._addParticipant);
};
