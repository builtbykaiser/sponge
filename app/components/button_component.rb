class ButtonComponent < ApplicationComponent
  def initialize(label:, icon: nil)
    @label = label
    @icon = icon
  end
end
