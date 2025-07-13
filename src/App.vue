<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import mermaid from 'mermaid'
import { toPng } from 'html-to-image'
import readingTime from 'reading-time'

setTimeout(() => {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    flowchart: {
      htmlLabels: true,
    },
  })
}, 10)
setTimeout(async () => {
  const el = document.querySelector('.mermaid') as HTMLElement
  if (!el) return
  const url = await toPng(el, {
    backgroundColor: `#fff`,
    skipFonts: true,
    pixelRatio: Math.max(window.devicePixelRatio || 1, 2),
    style: {
      margin: `0`,
    },
  })
  console.log(url)
}, 20)
setTimeout(() => {
  const markdownContent = `# Hello Mermaid`
  const readingTimeResult = readingTime(markdownContent)
  console.log(`Reading time: ${readingTimeResult.text}`)
}, 30)
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
