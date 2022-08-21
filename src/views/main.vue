<template>
  <div class="main-container">
    <h1 class="header">用户管理</h1>
    <div class="main">
        <div class="title">
            <div class="left">
              <el-button class="add" @click="btnAdd">新建</el-button>
              <el-input class="search" placeholder="按关键字搜索" v-model="searchVal" @change="searchFn"></el-input>
            </div>
            <div class="right">
              <el-button class="revoke" @click="idRevoke">撤销</el-button>
            </div>
        </div>
        <div class="table">
            <!-- @select="selectFn" @select-all="selectAllFn" -->
            <el-table @selection-change="handleSelectionChange"  :data="tableData" style="width: 100%;" >
                <el-table-column label-class-name="col" type="selection" width="50" ></el-table-column>
                <el-table-column label-class-name="col" label="序号" prop="ind" width="50" ></el-table-column>
                <el-table-column label-class-name="col" class="name" prop="username" label="姓名"  align="center" ></el-table-column>
                <el-table-column label-class-name="col" class="age" prop="age" label="年龄"  align="center" ></el-table-column>
                <el-table-column label-class-name="col" class="sex" prop="sex"  label="性别"  align="center" ></el-table-column>
                <el-table-column label-class-name="col" class="phone" prop="mobile" width="150" label="联想电话"  align="center" ></el-table-column>
                <el-table-column label-class-name="col" class="address" prop="address" label="详细地址" width="700" align="center" ></el-table-column>
                <el-table-column label-class-name="col" label="操作" width="200"  align="center">
                    <template slot-scope="scope">
                        <el-button class="editBtn" plain type="defalut" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button class="delBtn"  plain type="defalut" size="mini"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-button class="alldel" size="small" @click="isAllDelFn">批量删除</el-button>
        <el-dialog
          title="提示框"
          :visible.sync="dialogVisible"
          width="30%"
        >
          <span>是否批量删除</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="allDelFn">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog
          title="提示框"
          :visible.sync="revokeShow"
          width="30%"
        >
          <span>回退上一步</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="revokeShow = false">取 消</el-button>
            <el-button type="primary" @click="revoke">确 定</el-button>
          </span>
        </el-dialog>
    </div>
    <MyDialog ref="dialog" :showDialog.sync="showDialog" :addOrEdit="addOrEdit"></MyDialog>
  </div>
</template>

<script>
import MyDialog from '../components/my-dialog.vue'
export default {
  name: 'Main',
  components: {
    MyDialog
  },
  data () {
    return {
      searchArr: [], // 模糊搜索得到的数组
      tableData: [], //  列表数据
      oldTableData: [], // 上一次的数据
      searchVal: '', // 搜索框的值
      radio: false,
      showDialog: false, // 控制添加与编辑弹层的显示
      revokeShow: false, // 控制是否回退的弹层的显示
      addOrEdit: 0, // 控制弹层是 添加状态还是编辑状态 0-添加 1-编辑
      allDelArr: [], // 要批量删除的数组
      dialogVisible: false // 控制批量删除提示框显示
    }
  },
  //   created () {
  //     this.tableData = this.$store.state.tableData
  //   },
  computed: {
    stateData () {
      return [...this.$store.state.tableData]
    }
  },
  watch: {
    stateData: {
      handler (newVal, oldVal) {
        console.log(oldVal)
        console.log('newVal', newVal)
        this.oldTableData = oldVal
        this.tableData = newVal
      },
      immediate: true,
      deep: true
    }

  },
  methods: {
    // 编辑
    handleEdit (index, row) {
      this.addOrEdit = 1
      this.showDialog = true
      this.$refs.dialog.addOrEditHandler({ index, row })
    },
    // 删除
    handleDelete (index, row) {
      this.$store.dispatch('delTableData', { index, row })
    },
    // 新增
    btnAdd () {
      this.addOrEdit = 0
      this.showDialog = true
    },
    // 获取本地缓存中的tableData
    getList () {
      this.tableData = JSON.parse(localStorage.getItem('tableData'))
      this.$store.commit('setTableDate', this.tableData)
    },
    // 点击单选框后的回调函数
    handleSelectionChange (e) {
      this.allDelArr = e
    },
    // 是否批量删除
    isAllDelFn () {
      this.dialogVisible = true
    },
    // 确定批量删除
    async allDelFn () {
      await this.$store.commit('allDelTableData', this.allDelArr)
      this.dialogVisible = false
    },
    // 是否回退上一步
    idRevoke () {
      this.revokeShow = true
    },
    // 确定回退上一步
    revoke () {
      console.log(this.oldTableData)
      localStorage.setItem('tableData', JSON.stringify(this.oldTableData))
      this.getList()
      // this.oldTableData = []
      this.revokeShow = false
    },
    // 搜索方法
    searchFn (val) {
      if (val.length < 1) {
        this.getList()
      }
      const result = this.$store.state.tableData.filter(item => {
        const valArr = Object.values(item)
        console.log(valArr)
        const ind = valArr.findIndex(item1 => {
          console.log(item1, val)
          // eslint-disable-next-line eqeqeq
          return item1 == val
        })
        if (ind !== -1) return item
      })
      this.tableData = result
    }
  }

}
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    height: 100px;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
    background-color: #ececec;
}
.main{
    width: 1400px;
    margin: 50px auto;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .add{
            border: none;
            margin-right: 20px;
            background-color: #f5f5f5;
            color: black;
        }
        .search{
            border: none;
            background: #f5f5f5;
            width: 400px;
        }
    }
    .table{
        border: 1px solid #ececec;
         .el-table{
            :deep(.col) {
                background: #efefef;
                color: black;
            }
        }
    }
    :deep(.el-button){
        background: #efefef;
        color: black;
    }
    :deep(.alldel){
        margin-top: 10px;
        color: black;
    }
}

</style>
