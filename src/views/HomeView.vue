<template>
  <template-view>
    <!-- hello -->
    <div class="py-3">
      <div class="container">
        <div>
          <h4>Hello,</h4>
          <h2>Guest</h2>
        </div>
      </div>
    </div>

    <!-- Nearby -->
    <div class="py-5">
      <div class="container">
        <div>
          <h4>Nearby</h4>
          <p>Services around you</p>
          <div class="nearby shadow p-3 mb-5 bg-white rounded">
            <div class="row g-5">
              <div class="col-md-2" v-for="(garage, index) in garage" :key="index">
                <a href=""><garage-component :garage="garage" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- puncture repair -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>Puncture Repair</h5>
          </div>
          <div class="col-md-6">
            <div class="view-more">
              <a href=""> <h4>ViewMore</h4></a>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md-3" v-for="(repair, index) in repair" :key="index">
            <a href=""> <repair-components :repair="repair" /></a>
          </div>
        </div>
      </div>
    </div>

    <!-- car Garages -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>Car Garage</h5>
          </div>
          <div class="col-md-6">
            <div class="view-more">
              <a href=""> <h4>ViewMore</h4></a>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md-3" v-for="(nearby, index) in nearby" :key="index">
            <a href="">
              <nearby-components :nearby="nearby" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Motorparts Store -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>Motorparts Store</h5>
          </div>
          <div class="col-md-6">
            <div class="view-more">
              <a href=""> <h4>ViewMore</h4></a>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md-12" v-for="(motor, index) in motor" :key="index">
            <a href="">
              <motor-component :motor="motor" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </template-view>
</template>

<script>
// @ is an alias to /src

import TemplateView from "@/views/TemplateView";
import { mapGetters } from "vuex";
import NearbyComponents from "@/components/NearbyComponents";
import RepairComponents from "@/components/RepairComponents";
import GarageComponent from "@/components/GarageComponent";
import MotorComponent from "@/components/MotorComponent";
export default {
  name: "HomeView",
  components: {
    TemplateView,
    NearbyComponents,
    RepairComponents,
    GarageComponent,
    MotorComponent,
  },
  computed: {
    ...mapGetters({
      nearby: "get_nearby",
      repair: "get_repair",
      garage: "get_garage",
      motor: "get_motor",
    }),
  },
};
</script>
