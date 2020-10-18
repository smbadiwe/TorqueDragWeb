<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">

      <div 
      v-bind:style="showHideStyle"
      class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <fileRibbon-app
            :ribbons="ribbons"></fileRibbon-app>
     </div>


      <q-input v-model="text" label="Standard">
          <template v-slot:prepend>
          <q-icon name="event" />
        </template>
        <template v-slot:append>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input filled v-model="text" label="Filled" />
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      datumList: [],
      selectedDatum: ""
    }
  },
  methods: {
      showHideStyle: {
          display: 'inline'
      },
  }
}
</script>