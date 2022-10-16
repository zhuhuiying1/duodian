<template>
  <div class="add-location">
    <field-form :mode="formData" :rules="rules" ref="form">
      <field-item label="联系人">
        <field-input type="text" v-model="formData.name" placeholder="请输入联系人"/>
      </field-item>
      <field-item label="手机号">
        <field-input type="phone" v-model="formData.phone" placeholder="请输入手机号"/>
      </field-item>
      <field-item label="地址">
        <field-input type="text" v-model="formData.address" placeholder="请选择地址" readonly @click.native="$router.push('/map')">
          <i class="el-icon-arrow-right"></i>
        </field-input>
      </field-item>
      <field-item label="详细地址">
        <field-input type="text" v-model="formData.minutelyAddress" placeholder="请输入详细地址"/>
      </field-item>
    </field-form>
    <button @click="submit">完成</button>
  </div>
</template>

<script>
import storage from '@/utils/localStorage'
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
        // 验证通过添加至数据库
        this.$api.address.create(this.formData).then((res) => {
          console.log('成功')
          this.$message.success('添加成功')
          this.$store.dispatch('user/getUserAddress') // 添加成功更新vuex里面的数据
          setTimeout(() => {
            this.$router.back()
          }, 2000)
        })
      }).catch(res => {
        // this.$error.show(res)
        this.$message.error(res)
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.path === '/map') {
      storage.setItem('fromInput', this.formData, 1000 * 60 * 60 * 24) // 保存24小时
    } else {
      if (storage.getItem('fromInput')) {
        storage.removeItem('fromInput')
      }
    }
    next()
  },
  beforeRouteEnter (to, from, next) {
    // 如果是从map页面过来的就获取之前填的内容,否则是空的
    if (from.path === '/map') {
      if (storage.getItem('fromInput')) {
        next(vm => {
          // console.log(111)
          vm.formData = storage.getItem('fromInput')
          // vm.$root.$on('createAddress', (val) => {
          //   console.log(222)
          //   vm.formData.address = val
          //   console.log(vm.formData)
          // })
        })
      }
    } else {
      next(
        vm => {
          vm.formData = {
            name: '',
            phone: '',
            address: '',
            minutelyAddress: ''
          }
        }
      )
    }
  },
  created () {
    console.log('初始化')
    // this.$root.$on('createAddress', (val) => {
    //   const formData = storage.getItem('fromInput')
    //   console.log(formData)
    //   formData.address = val
    //   console.log(formData.address)
    //   storage.setItem('fromInput', formData, 1000 * 60 * 60 * 24) // 保存24小时
    // })
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
  i {
    font-size: 28px;
  }
}
</style>
