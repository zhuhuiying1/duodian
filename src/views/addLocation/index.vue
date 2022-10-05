<template>
  <div class="add-location">
    <field-form :mode="formData" :rules="rules" ref="form">
      <field-item label="联系人">
        <field-input type="money" v-model="formData.name"/>
      </field-item>
      <field-item label="手机号">
        <field-input type="phone" v-model="formData.phone"/>
      </field-item>
      <field-item label="地址">
        <field-input type="text" v-model="formData.address"/>
      </field-item>
      <field-item label="详细地址">
        <field-input type="text" v-model="formData.minutelyAddress"/>
      </field-item>
    </field-form>
    <button @click="submit">完成</button>
  </div>
</template>

<script>
export default {
  name: 'add-location',
  data () {
    return {
      formData: { // 每个不同input的值的名字
        name: '',
        phone: '',
        address: '',
        minutelyAddress: ''
      },
      rules: { // 每个input针对的校验规则
        name: [
          { required: true, message: '请输入联系人' },
          { min: 2, max: 10, message: '联系人格式不正确' }
        ],
        phone: [
          { required: true, message: '请输入手机号' },
          { type: 'phone', message: '手机号格式不正确' }
        ],
        address: [
          { required: true, message: '请输入配送地址' }
        ],
        minutelyAddress: [
          { required: true, message: '请输入详细地址' }
        ]
      }
    }
  },
  methods: {
    submit () {
      // 调用表单的验证方法
      this.$refs.form.validate().then(() => {
        console.log('提交')
      }).catch(res => {
        this.$error.show(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-location {
  @include wh(100%, 100vh);
  button {
    @include wh(100%, 88px);
    background: #FF3232;
    color: #fff;
    font-size: 26px;
    outline: none;
    border: 0px solid transparent;
    margin-top: 100px;
  }
}
</style>
