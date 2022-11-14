<template>
  <template-view>
    <div class="py-3">
      <div class="container">
        <h4>Discussion</h4>
        <h6>Discuss Your problems with others</h6>
        <div class="discussion">
          <img src="../assets/discussion.png" />
          <h6>You must be logged in to view this page</h6>
          <div class="py-3">
            <button class="btn" type="submit" @click.prevent="showLoginForm()">
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  </template-view>
</template>

<script>
import TemplateView from "@/views/TemplateView";
export default {
  name: "DiscussView",
  components: {
    TemplateView,
  },
  methods: {
    showLoginForm() {
      this.$modal.show("login-form");
    },
  },
};
</script>

<style lang="scss" scoped></style>
