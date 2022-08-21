<template>
  <el-dialog
    title="新建/编辑用户"
    :visible="showDialog"
    width="50%"
    @close="btnCancel"
    center
  >
    <el-form ref="employeeData" :model="peopleData" :rules="rules" label-width="120px">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="peopleData.username" style="width: 40%" placeholder="1-4字符" />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="peopleData.age" style="width: 40%" placeholder="请输入年龄" />
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="peopleData.sex" placeholder="请选择性别">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"

            >
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="peopleData.mobile" style="width: 50%" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="详细地址" prop="address1">
        <el-cascader v-model="peopleData.address1" :options="cityOptions"></el-cascader>
      </el-form-item>
      <el-form-item  prop="address2">
        <el-input style="width: 40%" v-model="peopleData.address2" placeholder="请输入详细地址" />
      </el-form-item>
    </el-form>
    <el-row slot="footer" class="dialog-footer">
      <el-button size="small" @click="btnCancel">取 消</el-button>
      <el-button size="small" type="primary" @click="btnOk('employeeData')">确 定</el-button>
    </el-row>
  </el-dialog>
</template>

<script>
import cityArr from '../views/city'
export default {
  props: {
    showDialog: {
      default: false,
      type: Boolean
    },
    addOrEdit: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      peopleData: {
        username: '', // 姓名
        mobile: '', // 手机号
        sex: '', // 性别
        age: '', // 年龄
        address: '', // 地址
        address1: [],
        address2: ''
      },
      rules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            message: '用户姓名不能为空'
          },
          {
            min: 1,
            max: 4,
            trigger: 'blur',
            message: '用户姓名不能超过4个字符'
          }
        ],
        mobile: [
          {
            required: true,
            trigger: 'blur',
            message: '手机号不能为空'
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            trigger: 'blur',
            message: '手机格式不正确'
          }
        ],
        age: [
          {
            required: true,
            message: '年龄不可为空'
          },
          {
            type: 'number',
            message: '年龄必须为数值'
          }
        ],
        sex: [
          {
            required: true,
            trigger: 'blur',
            message: '性别不能为空'
          }
        ],
        address1: [
          {
            required: true,
            trigger: 'change',
            message: '详细地址能不为空'
          },
          {
            type: 'array',
            trigger: 'change',
            message: '详细地址字数不能超出20字'
          }
        ],
        address2: [
          {
            required: true,
            trigger: 'blur',
            message: '详细地址能不为空'
          },
          {
            max: 20,
            trigger: 'blur',
            message: '详细地址字数不能超出20字'
          }
        ]
      },
      options: [{
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
      }],
      index: 0, // 编辑的下标
      cityOptions: cityArr.cityArr
    }
  },
  computed: {
    allAdress () {
      return this.peopleData.address1.join('') + ' ' + this.peopleData.address2
    }
  },
  watch: {
    allAdress: {
      handler (newVal) {
        this.peopleData.address = newVal
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    btnCancel () {
      // console.log('调用了btncancel')
      // 重置表单
      this.$refs.employeeData.resetFields() // 重置校验提示
      this.$emit('update:showDialog', false)
      this.peopleData = {
        // ind: 0,
        username: '', // 姓名
        mobile: '', // 手机号
        sex: '', // 性别
        age: '', // 年龄
        address: '', // 地址
        address1: [], // 地址
        address2: '' // 地址
      }
    },
    btnOk (employeeData) {
      this.$refs[employeeData].validate(async (valid) => {
        if (valid) { // 校验成功
          if (this.addOrEdit === 0) {
            // 发起新增员工请求
            const tableData = JSON.parse(localStorage.getItem('tableData'))
            const tableLength = tableData.length
            if (tableLength === 0) {
              this.peopleData.ind = 0
            } else {
              this.peopleData.ind = tableData[tableLength - 1].ind + 1
            }
            await this.$store.dispatch('addTableData', this.peopleData)
            this.$message.success('新增成功')
          } else {
            // 编辑
            await this.$store.dispatch('editTableData', { peopleData: this.peopleData, index: this.index })
            this.$message.success('编辑成功')
          }
          this.$emit('update:showDialog', false)
        } else {
          this.$message.error('操作失败！')
          return false
        }
      })
    },
    // handleChange () {

    // },
    // opChange (e) {
    //   console.log(e)
    // },
    addOrEditHandler (obj) {
      console.log(obj)
      this.peopleData = { ...obj.row }
      this.index = obj.index
    }
  }
}
</script>

<style>

</style>
