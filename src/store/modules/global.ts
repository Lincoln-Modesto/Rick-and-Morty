import { reactive } from "vue";

const state = reactive({
  isLoading: false,
});

export function setGlobalLoading(status: boolean) {
  state.isLoading = status;
}

export default state;
