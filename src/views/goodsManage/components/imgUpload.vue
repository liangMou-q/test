<template>
  <div>
    <h4 style="margin: 0;">图片修改：</h4>
    <el-upload
      class="avatar-uploader"
      action=""
      :auto-upload="false"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-change="upload"
    >
      <img v-if="img" :src="img" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon" />
    </el-upload>

  </div>
</template>

<script>
import { upload } from '@/api/goods'
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      img: this.imageUrl
    }
  },
  watch: {
    imageUrl: {
      immediate: true,
      handler() {
        // console.log('地址', this.imageUrl)
        // console.log(this.img)
        this.img = this.imageUrl
      }
    }
  },
  methods: {
    // 文件上传成功时的钩子
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 上传文件之前的钩子
    beforeAvatarUpload(file) {
      console.log(file)
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
      return file
    },
    /**
     *
     * @param {上传文件} file
     */
    async upload(file) {
      console.log('文件', file.width)
      const result = await upload(file)
      console.log(result)
      this.img = result.url
      // this.dialogImageUrl = result.url
      // this.getUrl(result.url)
    }
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    /* height: 178px; */
    height: auto;
    display: block;
  }
</style>
