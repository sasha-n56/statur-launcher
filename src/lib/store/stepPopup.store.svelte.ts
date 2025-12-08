let popup = $state<{ isOpen: boolean; step: number }>({
  isOpen: false,
  step: 0
})

function onOpen() {
  popup.isOpen = true
  popup.step = 0
}

function onClose() {
  popup.isOpen = false
  popup.step = 0
}

function onNext() {
  popup.step += 1
}

function onPrev() {
  if (popup.step > 0) popup.step -= 1
}

const isOpen = () => popup.isOpen
const currentStep = () => popup.step

export { isOpen, currentStep, onOpen, onClose, onNext, onPrev }
