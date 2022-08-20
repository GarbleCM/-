<template>
  <div class="main-container">
    <h1 class="header">用户管理</h1>
    <div class="main">
        <div class="title">
            <el-button class="add" @click="btnAdd">新建</el-button>
            <el-input class="search" placeholder="按关键字搜索" v-model="input"></el-input>
        </div>
        <div class="table">
            <!-- @select="selectFn" @select-all="selectAllFn" -->
            <el-table @selection-change="handleSelectionChange"  :data="tableData" style="width: 100%;" >
                <el-table-column label-class-name="col" type="selection" width="50" ></el-table-column>
                <el-table-column label-class-name="col" label="序号" type="index" width="50" ></el-table-column>
                <el-table-column label-class-name="col" class="name" prop="username" label="姓名"  align="center" ></el-table-column>
                <el-table-column label-class-name="col" class="age" prop="age" label="年龄"  align="center" ></el-table-column>
                <el-table-column label-class-name="col" class="sex" prop="sex"  label="性别"  align="center" ></el-table-column>
                <el-table-column label-class-name="col" class="phone" prop="phone" width="150" label="联想电话"  align="center" ></el-table-column>
                <el-table-column label-class-name="col" class="address" prop="address" label="详细地址" width="700" align="center" ></el-table-column>
                <el-table-column label-class-name="col" label="操作" width="200"  align="center">
                    <template slot-scope="scope">
                        <el-button class="editBtn" plain type="defalut" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button class="delBtn"  plain type="defalut" size="mini"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-button class="alldel" size="small">批量删除</el-button>
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
      tableData: [],
      input: '',
      radio: false,
      showDialog: false,
      addOrEdit: 0
    }
  },
  //   created () {
  //     this.tableData = this.$store.state.tableData
  //   },
  computed: {
    stateData () {
      return this.$store.state.tableData
    }

  },
  watch: {
    stateData: {
      handler (newVal, oldVal) {
        this.tableData = newVal
      },
      immediate: true
    }
  },
  methods: {
    handleEdit (index, row) {
      this.addOrEdit = 1
      this.showDialog = true
      this.$refs.dialog.addOrEditHandler({ index, row })
    },
    handleDelete (index, row) {
      this.$store.dispatch('delTableData', { index, row })
    },
    btnAdd () {
      this.addOrEdit = 0
      this.showDialog = true
    },
    getList () {
      this.tableData = JSON.parse(localStorage.getItem('tableData'))
    },
    // selectFn (value, row) {
    //   console.log(value)
    //   console.log(row)
    // },
    // selectAllFn (value) {
    // //   console.log(value)
    // },
    handleSelectionChange (e) {
      console.log(e)
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
        justify-content: flex-start;
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
