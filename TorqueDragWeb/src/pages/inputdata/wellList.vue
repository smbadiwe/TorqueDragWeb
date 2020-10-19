<template>
    <div class="col-12">

    <q-card class="my-card bg-secondary text-white" style="height:50px;">
      <q-card-section align="right">
        <div class="text-center text-subtitle1 q-pb-md">Well List</div>
      </q-card-section>
    </q-card>

    <q-scroll-area
        :visible="visible"
      style="height: 500px; width: 100%;"
    >
        <q-list class="bg-accent text-primary">
        <q-item 
        v-for="n in 100" :key="n"
        clickable v-ripple>
            <q-item-section>Drilling Well {{ n }}</q-item-section>
            <q-item-section side class="text-primary">10/19/2020</q-item-section>
        </q-item>

        </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  data () {
    return {
        visible: true
    }
  }
}
</script>