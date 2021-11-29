<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header>Header</el-header>
      <el-container>
        <el-aside :width="!isCollapse ? '200px' : '64px'">
          <navleft :isCollapse="isCollapse"></navleft>
          <div
            :style="[
              { left: !isCollapse ? '200px' : '64px' },
              { position: 'absolute' },
              { padding: '18px 0px' },
              { background: '#d3dce6' },
              { top: '48%' },
              { 'border-radius': '0px 5px 5px 0px' },
            ]"
            :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"
            @click="clickIcon"
          ></div>
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navleft from "@/components/NavLeft/index.vue";
export default {
  name: "App",
  components: {
    navleft,
  },
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    clickIcon() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
html,
body {
  margin: 0px !important;
  height: 100%;
  width: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  /* text-align: center; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
