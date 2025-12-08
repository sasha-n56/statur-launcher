let isOpen = $state(false);

function onOpen() {
  isOpen = true
};

function onClose() {
  isOpen = false
}

export { isOpen, onOpen, onClose }

