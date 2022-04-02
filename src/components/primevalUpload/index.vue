<template>
  <input
      ref="file"
      type="file"
      multiple="multiple"
      placeholder=""
      accept="video/*"
      name="filename"
      @change="handleChange"
      maxlength="10"
  >
  </input>
</template>

<script>
  export default {
    name: "index",
    methods: {
      handleChange (e) {
        this.filePath = e.target.files[0].name;
        console.log(this.filePath);
        this.files = [...e.target.files];
        let flag = true;
        e.target.value = null;
        for (let i = 0; i < this.files.length; i++) {
          const arr = this.files[i].name.split('.');
          const fileType = arr[arr.length - 1];
          if (!['xls', 'xlsx'].includes(fileType)) {
            flag = false;
          }
        }
        if (!flag) {
          this.$message.error('请选择正确文件类型(.xls，.xlsx)导入！');
          if (this.$refs.file) {
            this.filePath = '';
            this.$refs.file.value = '';
          }
        }
      },
      /**
       * @description 导入文件
       * @author wangkangzhang
       * @date 2021/11/27
       */
      async uploadFile () {
        try {
          const fd = new FormData();
          fd.append('id', this.formDataId);
          for (let i = 0; i < this.files.length; i++) {
            fd.append('multipartFile', this.files[i]);
          }
          if (this.files.length === 0) {
            this.$message.error('请选择文件');
            return false;
          }
        } catch (e) {
          console.log(`src/components/import-dialog.vue-importFn error: ${e} `);
        }
      }
    }
  }
</script>

<style scoped>

</style>
