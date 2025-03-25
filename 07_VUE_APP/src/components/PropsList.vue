<template>
    <div>
      <h2>{{ siteName }}</h2>
      <hr />
      <a :href="siteUrl">{{ siteName }}</a>
      <hr />
      <h2>방문 여부: {{ visited }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PropsList',
    props: ['siteName', 'siteUrl', 'visited'],
  };
  </script>