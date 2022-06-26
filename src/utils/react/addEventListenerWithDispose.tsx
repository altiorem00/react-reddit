export function addEventListenerWithDispose(element: HTMLElement, name: string, handler: () => void) {
  element.addEventListener(name, handler);
  return element.removeEventListener(name, handler);
}
