<template>
  <div class="form-container">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-position="top"
    >
      <el-card>
        <div class="title">
          <span>My Account</span>
        </div>

        <el-row :gutter="40">
          <el-col :span="12">

            <el-form-item label="First Name" prop="firstName">
              <el-input label="Test" v-model="form.firstName" />
            </el-form-item>

            <el-form-item label="Last Name" prop="lastName">
              <el-input v-model="form.lastname" />
            </el-form-item>

          </el-col>
        </el-row>

        <hr>

        <el-row :gutter="40">

          <el-col :span="12">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Phone" prop="phone">
              <el-input type="tel" v-mask="'(999) 999-9999'" v-model="form.phone" />
            </el-form-item>
          </el-col>
        </el-row>

      </el-card>

      <el-form-item class="button-group">
        <el-button size="medium">Cancel</el-button>
        <el-button size="medium" type="primary" @click="onSubmit('form')">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastname: '',
        email: '',
        phone: '',
      },
      rules: {
        firstName: [
          { required: true, message: 'Please input First name', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Please input Last name', trigger: 'blur' },
          { type: 'number', message: 'Please input Last name', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
        ],
        phone: [
          { required: true, message: 'Please input phone', trigger: 'blur' },
          { pattern: /\(\d{3}\) \d{3}-\d{4}/, message: 'Please input correct phone', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log('error submit!!');
          return;
        }
        alert('submit!');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  display: flow-root;
  width: 1000px;
  margin: 0 auto;
}

.title {
  text-transform: uppercase;
  font-weight: bold;
  margin: 20px 0;
}

.button-group {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;

  .el-button--primary {
    width: 140px;
  }

  .el-button--default {
    width: 100px;
  }
}
</style>
