<template>
  <template-view>
    <div class="container">
      <h4>Onway Mechanics</h4>
      <p>version : 1.0.2</p>
      <div>
        <ul class="nav flex-column">
          <div class="shadow p-3 mb-5 bg-white rounded">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$router.push({ name: 'about' })"
                >About Us</a
              >
            </li>
          </div>
          <div class="shadow p-3 mb-5 bg-white rounded">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$router.push({ name: 'privacy' })"
                >Privacy Policy</a
              >
            </li>
          </div>
          <div class="shadow p-3 mb-5 bg-white rounded">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$router.push({ name: 'terms' })"
                >Terms and Conditions</a
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </template-view>
</template>

<script>
import TemplateView from "@/views/TemplateView";
export default {
  name: "InfoView",
  components: {
    TemplateView,
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: black;
  font-size: 20px;
  padding: 15px;
}
</style>
