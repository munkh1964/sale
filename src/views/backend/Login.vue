<template>
  <div class="login-form">
    <form class="card auth-card" @submit.prevent="submitHandler">
      <div class="card-content">
        <span class="card-title center">Системд нэвтрэх</span>
        <div class="input-field">
          <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{
              invalid:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email),
            }"
          />
          <label for="email">Эмайл</label>
          <small
            class="helper-text invalid"
            v-if="$v.email.$dirty && !$v.email.required"
            >Эмайл хоосон байж болохгүй.</small
          >
          <small
            class="helper-text invalid"
            v-else-if="$v.email.$dirty && !$v.email.email"
            >Эмайл хаягаа зөв оруулна уу.</small
          >
        </div>
        <div class="input-field">
          <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{
              invalid: $v.password.$dirty && !$v.password.required,
            }"
          />
          <label for="password">Нууц үг</label>
          <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
            >Нууц үгээ оруулна уу</small
          >
        </div>
      </div>
      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            Нэвтрэх
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import { required, email } from "@vuelidate/validators";
import { email, required } from "vuelidate/lib/validators";
// import messages from "@utils/messages";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { required },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/dashboard");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
  },
};
</script>

<style scoped>
.login-form {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 6rem;
  height: 100vh;
}
.auth-card {
  width: 500px;
}
.auth-submit {
  width: 100%;
}
.helper-text.invalid {
  color: #f44336;
}
</style>
