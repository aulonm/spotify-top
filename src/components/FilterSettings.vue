<template>
  <VExpansionPanel>
    <VExpansionPanelContent
      :key="1"
    >
      <div slot="header">
        Filter
      </div>
      <VForm ref="settings">
        <VCard>
          <VContainer>
            <VLayout
              row
              wrap
            >
              <VFlex
                lg2
                md2
                sm2
                xs2
              >
                <VTextField
                  label="limit:"
                  v-model="dataLimit"
                  placeholder="max 50"
                  type="tel"
                />
              </VFlex>
              <VSpacer />
              <VSelect
                :items="ranges"
                v-model="dataTimeRange"
                label="Time range"
                item-text="name"
                item-value="value"
                clearable
              />
              <VSpacer />
              <VFlex
                lg2
                md2
                sm2
                xs2
              >
                <VTextField
                  label="offset:"
                  v-model="dataOffset"
                  offset="0"
                  type="tel"
                />
              </VFlex>
            </VLayout>
            <VCardActions>
              <VSpacer />
              <VBtn
                @click="clickFunction(dataLimit, dataOffset, dataTimeRange)"
              >
                Filter
              </VBtn>
              <VSpacer />
            </VCardActions>
          </VContainer>
        </VCard>
      </VForm>
    </VExpansionPanelContent>
  </VExpansionPanel>
</template>

<script>
export default {
  name: 'FilterSettings',
  props: {
    clickFunction: {
      type: Function,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
    ranges: {
      type: Array,
      required: true,
    },
    timeRange: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dataLimit: this.limit,
      dataOffset: this.offset,
      dataTimeRange: this.timeRange,
    };
  },
};
</script>
