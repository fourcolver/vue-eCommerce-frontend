<template>
  <div>
    <Fashion />
    <layoutSetting />
  </div>
</template>

<script>
import layoutSetting from '../components/widgets/layout-setting'
const Fashion = () => import('./shop/fashion')
export default {
  components: {
    Fashion,
    layoutSetting
  }
}
</script>
