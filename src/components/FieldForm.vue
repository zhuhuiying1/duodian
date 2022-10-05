<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
const reg = {
  phone: /\d{11}/
}
export default {
  name: 'field-form',
  props: { // 接收参数,mode为input的名字,rules为每个表单的校验规则
    mode: Object,
    rules: Object
  },
  methods: {
    check (value, rule) { // 验证方法,针对不同的错误返回不同的错误提示
      let message = ''
      rule.forEach(item => { // 验证方法是个数组,数组可能有多个对象,所以要循环一下,每个对象为一个验证规则,有不同的错误提示
        if (message) return // 如果有错误提示就return出去,跳到下一次循环,不要被后面的覆盖了
        if (item.required && !value) { // 针对每个验证规则对象做判断,不符合就返回错误提示
          message = item.message
        } else if ((item.min || item.max) && (value.length < item.min || item.length > item.max)) {
          message = item.message
        } else if (item.type && reg[item.type] && !reg[item.type].test(value)) {
          message = item.message
        }
      })
      return message
    },
    validate () {
      return new Promise((resolve, reject) => {
        const fields = Object.keys(this.rules) // 每个规则的名字数组,用规则取名字的意思是 有的不需要校验,没有校验规则,forEach会报错
        let message
        for (let i = 0; i < fields.length; i++) {
          const name = fields[i] // 名字
          const value = this.mode[name] // 每一个input的值
          const rule = this.rules[name] // 因为每个校验规则和input的名字都是对的上的,所以也这么取规则
          message = this.check(value, rule) // 调用校验方法,校验失败会返回错误信息
          if (message.length >= 1) { // 如果错误信息有值就报错,并且跳出去,保证不会被后面的错误信息覆盖,优先提示第一个
            reject(message)
            // break
          }
        }
        resolve() // for循环成功走完表明验证成功
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
