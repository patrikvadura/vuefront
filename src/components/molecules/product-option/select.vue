<template>
  <div class="vf-m-product-option vf-m-product-option--select">
    <vf-a-heading level="6" class="mt-5 vf-m-product-option__name">{{option.name}}</vf-a-heading>
    <vf-a-select
      class="vf-m-product-option__value"
      :value="activeOptionValue"
      :options="selectOptions"
      @input="handleChange"
    />
  </div>
</template>
<script>
import { find } from "lodash";
export default {
  props: ["option", "selected"],
  computed: {
    selectOptions() {
      let result = [
        {
          value: null,
          text: this.$t("elements.store.product.option.select.selectText")
        }
      ];

      this.option.values.forEach(value => {
        result = [...result, { text: value.name, value: value.id }];
      });

      return result;
    },
    activeOptionValue() {
      let result = find(this.selected, { id: this.option.id });

      return result ? result.value : null;
    }
  },
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    }
  }
};
</script>