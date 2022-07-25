import Vue from 'vue'
import toastr from 'toastr'

Vue.use(toastr)

export default function ({ app }, inject) {
  inject('toastr', toastr)
}
