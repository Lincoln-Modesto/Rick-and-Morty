<template>
  <div class="d-flex justify-content-end align-items-center w-100">
    <nav class="mt-5">
      <ul class="pagination">
        <li
          class="page-item"
          :class="previous=== 0 ? 'disabled' : ''"
        >
          <a class="page-link" tabindex="-1" @click="previousPage">Previous</a>
        </li>
        <li
          :class="previous === 0 ? 'disabled' : ''"
          class="page-item"
          @click="previousPage"
        >
          <a class="page-link">{{ previous }}</a>
        </li>
        <li class="page-item active">
          <a class="page-link">{{ current }}</a>
        </li>
        <li class="page-item" v-if="next !== 43">
          <a class="page-link" @click="nextPage">{{ next }}</a>
        </li>
        <li class="page-item" :class="next === 43 ? 'disabled' : ''">
          <a class="page-link" @click="nextPage">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    previous: { type: Number, required: true, },
    current: { type: Number, required: true, },
    next: { type: Number, required: true, },
    previousPage: { type: Function, required: true },
    nextPage: { type: Function, required: true }
  }
})
</script>

<style scoped>
.page-item {
  cursor: pointer;
  color: #57BB44;
}

.page-link{
  color: #57BB44;
}

.page-item.active .page-link {
  background-color: #57BB44 !important;
  border-color: #57BB44 !important;
  color: #fff !important;
}

.disabled{
  cursor: auto !important;
}

@media (max-width: 600px) {

  .pagination{
    zoom: 0.7;
  }
}
</style>