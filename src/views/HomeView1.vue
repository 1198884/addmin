<template>
  <div class="home">
    <el-container>
      <el-aside>
        <el-menu>
          <!-- 菜单组件 -->
          <el-submenu index="1">
            <!-- 二级菜单 -->
            <template slot="title">  
              <i class="el-icon-message">导航</i>
              </template>
              <el-menu-item-group>
                <!-- 分组 -->
                <template slot="title">分组1</template>
                <el-menu-item>
                  选项一
                </el-menu-item>

                 <el-menu-item>
                  选项2
                </el-menu-item>
              </el-menu-item-group>
              <!-- 分组2 -->
              <el-menu-item-group title="分组二">
                <el-menu-item>选项3</el-menu-item>
              </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          
          sss
        </el-header>
        <el-main>dd</el-main>
      </el-container>
    </el-container>
   
     <el-container>
      <el-aside></el-aside>
      
    </el-container>
   
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
   
  },
  mounted(){
    // this.cuiplugin()
  }
};
</script>
