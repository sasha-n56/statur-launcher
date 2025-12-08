let popup = $state<{ isOpen: boolean }>({ isOpen: false });

function onOpen() {
   popup.isOpen = true
};

function onClose() {
  popup.isOpen = false
};

const isOpen = ()=>popup.isOpen;

export {isOpen, onOpen, onClose }

