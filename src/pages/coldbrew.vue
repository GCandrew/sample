<template>
    <div>
      <router-link :to="dynamicLink">{{ componentName }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'coldbrew', // 컴포넌트 이름이 파일명과 동일해야 합니다.
    data() {
      return {
        componentName: 'coldbrew', // 파일명과 동일해야 합니다.
      };
    },
    computed: {
      dynamicLink() {
        // Vue Router의 routes 배열에서 현재 컴포넌트 이름과 일치하는 path를 찾아서 반환
        const routes = this.$router.options.routes;
        const route = routes.find(route => route.name === this.componentName);
        return route ? route.path : '/';
      }
    }
  }
  </script>