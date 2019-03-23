(function() {

  const exampleSelect = document.getElementById('example-select')
  const htmlInput = document.getElementById('html-input')
  const cssInput = document.getElementById('css-input')
  const exampleMap = {}

  let exampleIdInc = 0
  const addExample = function(config) {
    const exampleId = String(exampleIdInc++)
    exampleMap[exampleId] = config
    const option = document.createElement('option')
    option.setAttribute('value', exampleId)
    option.innerText = config.name
    exampleSelect.appendChild(option)
  }
  exampleSelect.addEventListener('change', function() {
    const exampleId = this.value
    const config = exampleMap[exampleId]
    htmlInput.value = config.html
    cssInput.value = config.css
  })

  addExample({
    name: '（空）',
    html: '',
    css: ''
  })

  addExample({
    name: 'hello-world',
    html: '<div class="hello-world">Hello world!</div>',
    css: '.hello-world { color: green }'
  })

  addExample({
    name: 'image',
    html: '<div class="image-wrapper"> <img class="lastleaf-avatar" src="lastleaf.jpg"> </div>',
    css: '.image-wrapper { text-align: center }\n.lastleaf-avatar { width: 100px }'
  })

  addExample({
    name: 'absolute',
    html: `<div>
    <div>static</div>
    <div style="position: absolute; top: 200px; left: 50px; right: 200px; bottom: 50px; background: yellow">absolute</div>
</div>`,
    css: ''
  })

})();
