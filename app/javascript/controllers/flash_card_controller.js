import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [
    "revealButton",
    "answer",
    "feedbackButton"
  ]

  reveal() {
    this.revealButtonTarget.style.display = 'none'
    this.answerTarget.style.display = 'block'

    for (const button of this.feedbackButtonTargets) {
      button.classList.remove('opacity-50', 'cursor-not-allowed')
      button.classList.add('opacity-100')
    }
  }
}
