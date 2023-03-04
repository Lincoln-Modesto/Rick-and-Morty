<template>
  <div
    class="form-group has-search d-flex justify-content-start align-items-center"
  >
    <img
      src="@/assets/svgs/search.svg"
      class="fa fa-search form-control-feedback"
      alt="Pesquisar"
    />
    <input
      type="text"
      class="form-control"
      placeholder="Search by name"
      :value="value"
      v-bind="$attrs"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: { type: String, required: true, default: '' } ,
  }
})
</script>

<style scoped>
input {
  padding: 8px 0;
  max-width: 350px;
}

img {
  height: 20px !important;
  width: 20px !important;
  margin-left: 10px;
  opacity: 0.7;
}

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search {
  position: relative;
}

.form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

@media (max-width: 420px) {
  input {
    width: 160px;
  }
}

@media (max-width: 768.97px) and (min-width: 420px) {
  input {
    width: 180px;
    margin-right: 10px;
  }
}
</style>
