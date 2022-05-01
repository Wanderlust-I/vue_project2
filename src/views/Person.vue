<template>
    <div class='wrapper'>
     <div class="content">
       <el-form :model="form" ref="form" label-width="80px">
                <el-form-item label="昵称">
                    <el-input v-model="form.nickname" class="nickname"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload
                        class="avatar-uploader"
                        action=""
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        name="head_img">
                        <img :src="imageUrl!=null?imageUrl:imgDefault" class="avatar">
                    </el-upload>
                    <p class="tips">tips:请上传2M以内JPG/PNG格式的图片，比例最好1:1</p>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="save">保存</el-button>
                    <el-button >退出登录</el-button>
                </el-form-item>
            </el-form>
            
         
     </div>
    </div>
</template>

<script>
  import imgDefault from '../assets/default.jpg'
    export default {
        data(){
            return {
                form:{
                    nickname:''
                },
                  imageUrl:imgDefault,
                
            }
        },
        methods:{
            save(){

            },
            handleAvatarSuccess(res,file) {
        console.log(res,file);
        
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
            },
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
    min-height: calc(100vh - 262px);
    .content {
        width: 40%;
        margin: 0 auto;
        padding: 50px 0;
    }
}
.nickname {
    width: 70%;
}
/deep/ .avatar-uploader {
    .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover {
            border-color: #409EFF;
        }
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
}
.tips {
    font-size: 12px;
    color: #999;
}
</style>