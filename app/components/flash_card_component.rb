class FlashCardComponent < ApplicationComponent
  def initialize(front:, back:)
    @front = front
    @back = back
  end
end
