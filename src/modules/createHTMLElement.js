class HTMLElementCreator {
  constructor() {
    this.attributes = {};
    this.classes = [];
    this.children = [];
    this.elementText = null;
    this.element = null;
  }

  addAttributes(atribute) {
    this.attributes = atribute;
    return this;
  }

  addClasses(...classes) {
    this.classes = classes;
    return this;
  }

  addChildren(children) {
    this.children = children;
    return this;
  }

  addElementText(text) {
    this.elementText = text;
    return this;
  }

  // addEvent(event) {
  //   this.eventListener = event;
  //   return this;
  // }

  addElement(ele) {
    this.element = ele;
    return this;
  }

  create() {
    const el = document.createElement(this.element);
    if (this.classes.length > 0) {
      el.classList.add(...this.classes);
    }
    Object.keys(this.attributes).forEach((key) => el.setAttribute(key, this.attributes[key]));
    if (this.children) {
      this.children.forEach((element) => {
        el.appendChild(element);
      });
    }

    if (this.elementText) {
      el.innerHTML = this.elementText;
    }
    return el;
  }
}

export default new HTMLElementCreator();