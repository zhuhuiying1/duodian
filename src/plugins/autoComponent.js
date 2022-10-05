export default (Vue) => {
  const files = require.context('@/components', false, /.vue$/) // true为查询其子目录
  files.keys().forEach(filePath => {
    const file = files(filePath)
    if (filePath.indexOf('.vue') !== -1) {
      const name = file.default.name // 名字是vue组件内起的名字
      Vue.component(name, file.default)
    }
    //  else {
    //   Vue.use(file.default)
    // }
  })
}
