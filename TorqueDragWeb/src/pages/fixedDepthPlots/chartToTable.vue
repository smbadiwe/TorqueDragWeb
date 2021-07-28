<template>
    <div class="q-pa-md">
    <q-table
        class="my-sticky-header-table"
      :title="tableTitle"
      :data="customTable"
      :columns="customColumns"
        row-key="name"
        dark
        color="amber"
        bordered
        :separator="separator"
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to xlsx"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { exportFile } from 'quasar'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}
export default {
    computed:{
        customTable() {
            return this.$store.getters['simulationStore/customTable'];
        },
        customColumns() {
            return this.$store.getters['simulationStore/customColumns'];
        },
        excelFileName() {
            return this.$store.getters['simulationStore/excelFileName'];
        },
        tableTitle() {
            return this.$store.getters['simulationStore/tableTitle'];
        }
    },
    data(){
        return {
            separator: 'cell'
        }
    },
    methods:{
          exportTable(){

            const content = [ this.customColumns.map(col => wrapCsvValue(col.label)) ].concat(
            this.customTable.map(row => this.customColumns.map(col => wrapCsvValue(
            typeof col.field === 'function'
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
            col.format
            )).join(','))
        ).join('\r\n')

        const status = exportFile(
            this.excelFileName,
            content,
            'text/csv'
        )

        if (status !== true) {
            this.$q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
            })
        }
      },
    }
    
}
</script>

<style scoped>
.my-sticky-header-table{
  height: 650px;
}

.q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    
    background-color: black
  }
</style>