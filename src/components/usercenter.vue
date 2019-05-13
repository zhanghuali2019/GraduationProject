<template>
  <div class="main">
    <div class="wrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div class="profile">
              <div class="block">
                <ul class="info">
                  <li>
                    <img src="../assets/2.jpg" alt="">
                  </li>
                  <li>
                    <span>{{this.$store.state.user}}</span>
                  </li>
                </ul>
                <hr>
                <ul class="menu">
                  <li>
                    <a href>我的信息</a>
                  </li>
                  <li>
                    <a href>我的帖子</a>
                  </li>
                  <li>
                    <a href>我的收藏</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="secondary">
              <div class="block">
                <div class="crumbs">
                  <a href>个人中心</a>
                  >
                  <span>我的信息</span>
                </div>
              </div>
              <div class="block">
                <el-upload
                      class="avatar-uploader"
                      action="http://localhost/biyesheji/avatars/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = require(URL.createObjectURL(file.raw));
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style>
@import "../../public/css/style.css";
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
    height: 178px;
    display: block;
  }
</style>