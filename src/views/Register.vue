<template>
  <div class="register-form">
    <form class="card auth-card" @submit.prevent="submitHandler">
      <div class="card-content">
        <span class="card-title">Шинэ хэрэглэгч</span>
        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{ invalid: $v.name.$dirty && !$v.name.required }"
          />
          <label for="name">Нэр</label>
          <small
            class="helper-text invalid"
            v-if="$v.name.$dirty && !$v.name.required"
          >
            Нэрээ оруулна уу
          </small>
        </div>
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
            >Эмайлийн талбар хоосон байж болохгүй</small
          >
          <small
            class="helper-text invalid"
            v-else-if="$v.email.$dirty && !$v.email.email"
            >Эмайл хаягаа зөв оруулна уу</small
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
        <div class="input-field">
          <input
            id="confirm"
            type="password"
            v-model.trim="confirm"
            :class="{
              invalid: $v.confirm.$dirty && !$v.confirm.sameAS,
            }"
          />
          <label for="password">Нууц үгийн давталт</label>
          <small
            class="helper-text invalid"
            v-if="$v.confirm.$dirty && !$v.confirm.sameAS"
            >Нууц үгийн давталт тохирсонгүй</small
          >
        </div>
      </div>

      <div class="radio">
        <label v-for="type in usertypes" :key="type.value">
          <input
            name="type"
            type="radio"
            :value="type.value"
            v-model="usertype"
            class="with-gap"
          />
          <span class="reglabel">{{ type.text }}</span>
        </label>
      </div>

      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            Бүртгэх
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, sameAs } from "vuelidate/lib/validators";

export default {
  name: "register",
  data: () => ({
    email: "",
    password: "",
    confirm: "",
    name: "",
    usertypes: [
      { text: "Борлуулагч", value: "saler" },
      { text: "Нябо", value: "accounter" },
      { text: "Админ", value: "admin" },
    ],
    usertype: "saler",
  }),
  validations: {
    email: { email, required },
    password: { required },
    confirm: { sameAs: sameAs("password") },
    name: { required },
    // agree: { checked: (v) => v },
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
        name: this.name,
        usertype: this.usertype,
      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
  },
};
</script>

<style scoped>
.register-form {
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

.radio {
  padding: 0px 24px 0px 24px;
}

.reglabel {
  width: 130px;
}
</style>
