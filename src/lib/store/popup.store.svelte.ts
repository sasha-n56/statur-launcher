let popup = $state<{ isOpen: boolean }>({ isOpen: false });

function openPopup() {
   popup.isOpen = true
};

function closePopup() {
  popup.isOpen = false
};

const isOpen = ()=>popup.isOpen;

export {isOpen, openPopup, closePopup }
