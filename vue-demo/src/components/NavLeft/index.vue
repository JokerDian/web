 <template >
  <div>
    <el-menu router class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-submenu index="1-2">
          <span slot="title">选项4</span>
          <el-menu-item index="/test">选项1</el-menu-item>
          <el-menu-item index="/helloWorld">选项2</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>
     

<script>
export default {
  data() {
    return {};
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: true,
    },
  },
  methods: {},
};
</script>

<style>
</style>