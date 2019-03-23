(function(){

  const BASE_STYLE = `
    div {
      display: block;
    }
    span {
      display: inline;
    }
    img {
      display: inline;
    }
  `

  const canvas = new glayout.Canvas(0)
  const context = canvas.getContext()
  context.setClearColor(1, 1, 1, 1)
  context.setCanvasSize(640, 360, 1)
  const rootNode = context.getRootNode()
  let bodyNode = context.createElement('empty', 'body')
  rootNode.appendChild(bodyNode)

  const run = function() {
    rootNode.removeChild(0)
    bodyNode.release()

    context.clearStyleSheets()
    context.appendStyleSheet(BASE_STYLE)
    context.appendStyleSheet(document.getElementById('css-input').value)

    const wrapper = document.createElement('span')
    wrapper.innerHTML = document.getElementById('html-input').value
    bodyNode = context.createElement('empty', 'body')
    const convertToContextElement = function(parentNode, parentContextElement) {
      for (let i = 0; i < parentNode.childNodes.length; i++) {
        const child = parentNode.childNodes[i]
        let contextElement = null
        if (child instanceof Element) {
          if (child.tagName === 'IMG') {
            contextElement = context.createElement('image', child.tagName.toLowerCase())
            const src = child.getAttribute('src') || ''
            if (src) {
              contextElement.load(src)
            }
          } else {
            contextElement = context.createElement('empty', child.tagName.toLowerCase())
          }
          const id = child.getAttribute('id') || ''
          if (id) contextElement.setId(id)
          const cls = child.getAttribute('class') || ''
          if (cls) contextElement.setClass(cls)
          const style = child.getAttribute('style') || ''
          if (style) contextElement.setStyle(style)
        } else {
          const text = child.textContent.trim()
          if (text) {
            contextElement = context.createElement('text', '')
            contextElement.setText(text)
          }
        }
        if (contextElement) {
          convertToContextElement(child, contextElement)
          parentContextElement.appendChild(contextElement)
          contextElement.release()
        }
      }
    }
    convertToContextElement(wrapper, bodyNode)

    rootNode.appendChild(bodyNode)
  }

  document.getElementById('run').addEventListener('click', run)

})();
