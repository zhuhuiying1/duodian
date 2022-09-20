var baseFont = 100
var baseWidth = 750
function setFontWidth () {
  var windowWidth = window.innerWidth > 750 ? 750 : window.innerWidth
  document.querySelector('html').style.fontSize = windowWidth / baseWidth * baseFont + 'px'
}
setFontWidth()
window.addEventListener('resize', function () {
  setFontWidth()
})
