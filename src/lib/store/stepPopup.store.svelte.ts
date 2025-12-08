let popup = $state<{ isOpen: boolean; step: number }>({
  isOpen: false,
  step: 0
})

function openStepPopup() {
  popup.isOpen = true
  popup.step = 0
}

function closeStepPopup() {
  popup.isOpen = false
  popup.step = 0
}

function nextStep() {
  popup.step += 1
}

function prevStep() {
  if (popup.step > 0) popup.step -= 1
}

const isOpen = () => popup.isOpen
const currentStep = () => popup.step

export { isOpen, currentStep, openStepPopup, closeStepPopup, nextStep, prevStep }
