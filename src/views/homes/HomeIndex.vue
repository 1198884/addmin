<template>
  <div>
    <el-table :data="arrs">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="text" label="文本"></el-table-column>
      <el-table-column label="操作">
        <!-- 编辑删除 -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 按钮 -->
    <el-button type="primary" class="addbtn" @click="addfn(1)">
      增加用户
      <span>{{this.$store.state.count}}</span>
    </el-button>
    <!-- 弹窗 -->

    <el-dialog :title="i === 1 ? '添加用户' : '编辑'"
      :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="文本" :label-width="formLabelWidth">
      <el-input v-model="form.text" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="fnsure">确 定</el-button>
  </div>
</el-dialog>
  </div>
  <!-- 弹出 -->
</template>
    <script>
import instance from "../../api/index";
export default {
  name: "HomeIndex",
  data() {
    return {
      arrs: null,
      debounceedit: null, //防抖封装
      debouncedelete: null,
      dialogFormVisible: false, //弹窗显示不显示
      form: {
        id: 0,
        name: "张三",
        text: "李四",
      },
      formLabelWidth: "120px",
      i: 0, //添加业务还是修改业务
    };
  },
  methods: {
    addfn(i) {
      // 添加业务
      this.i = i;
      console.log(i);
      this.form.name = "";
      this.form.text = "";
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    fnsure() {
      this.dialogFormVisible = false;
      if (this.i === 1) return this.handleAdd(); //添加业务
      this.editHomeIndex(); //修改业务
    },
    async handleAdd() {
      // 添加业务
      let name = this.form.name;
      let text = this.form.text;
      let {data} = await instance.post("/homeindex", { name, text })
      this.getHomeIndex();
    },

    handleEdit(a, b) {
      //   用户行为
      console.log(a, b);
      this.i=0
      this.form.name = b.name;
      this.form.text = b.text;
      this.form.id = b.id;
      this.dialogFormVisible = !this.dialogFormVisible;
    },

    handleDelete(a, b) {
      // 用户行为
      console.log(a, b);
      this.$confirm("确定删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        tyoe: "warning",
      })
        .then(() => {
          // 确定的回调函数
          console.log("删除了");
          this.deleteHomeIndex(a);
        })
        .catch(() => {
          // 取消的回调函数
          console.log("你取消了");
        });
    },
    async getHomeIndex() {
      let { data } = await instance.get("/homeindex");
      console.log(data);
      this.arrs = data;
    },
    // 删除业务
    async deleteHomeIndex(index) {
      let { data } = await instance.delete("/homeindex/" + index);
      console.log(data);
      this.getHomeIndex();
    },
    // 编辑业务
    async editHomeIndex() {
      let name = this.form.name;
      let text = this.form.text;
      let id =this.form.id;
      let { data } = await instance.put("/homeindex/edit/" + id, { id,name, text })
      this.getHomeIndex();
    },
  },

  created() {
    this.getHomeIndex();
  },
};
</script>
<style scoped>
</style>