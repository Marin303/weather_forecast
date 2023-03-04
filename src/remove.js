function removeLastChild(container) {
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

export { removeLastChild };