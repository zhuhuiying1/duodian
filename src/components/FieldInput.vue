<template>
  <div>
    <input type="text" v-model="formatval" class="field-input">
  </div>
</template>

<script>
const format = {
  phone: {
    get (val) {
      return val.replace(/(\d{3})(\d{1,4})(\d{0,4})(\d{0,})/, '$1 $2 $3').replace(/\s+$/, '')
    },
    set (val) {
      return val.replaceAll(' ', '')
    }
  },
  money: {
    get (val) {
      let money = val
      const reg = /(\d{1,})(\d{4})/
      while (reg.test(money)) {
        money = money.replace(reg, '$1,$2')
      }
      return money
    },  
    set (val) {
      return val.replaceAll(',', '')
    }
  },
  idcard: {
    get (val) {},
    set (val) {}
  },
  text: {
    get (val) {
      return val
    },
    set (val) {
      return val
    }
  }
}
export default {
  name: 'field-input',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    value (value) {
      this.val = value
    },
    val (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    formatval: {
      get () {
        return format[this.type].get(this.val)
      },
      set (value) {
        this.val = format[this.type].set(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  flex-grow: 1;
  .field-input {
    @include wh(100%, auto);
    outline: none;
    border: 0px solid transparent;
  }
}

</style>
