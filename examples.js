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
    html: `<div style="position: relative">
    <div>static</div>
    <div id="abs">absolute</div>
</div>`,
    css: `#abs {
    position: absolute; top: 200px; left: 50px;
    border: 5px solid blue;
    background: rgba(0, 0, 255, 0.5);
}`
  })

  addExample({
    name: 'flex',
    html: `<div class="p">
    <div class="c c1">1</div>
    <div class="c c2">2</div>
    <img class="c c3" src="lastleaf.jpg">
</div>`,
    css: `.p { display: flex }
.c { flex: 1; text-align: center }
.c1 { background: yellow }
.c2 { background: pink }
.c3 { flex-grow: 0; height: 50vh; opacity: 0.5 }`
  })

})();
