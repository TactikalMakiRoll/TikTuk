import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from "@/router/router.js"
import VIntersection from './directives/VIntersection'

const app = createApp(App)

// подключаем все компоненты в приложение
components.forEach((component)=>{
    app.component(component.name,component)
})

// и директиву для динамической подгрузки (вместо пагинации)
app.directive("intersection",VIntersection);

app
.use(router)
.mount('#app')
