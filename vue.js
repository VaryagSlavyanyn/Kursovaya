// // вы можете как угодно изменять программу и код
// // добавлять любые переменные и модели
// // ваша задача реализовать так, как показано на видео, чтобы оно работало
//
// const App = {
//     data() {
//         return {
//             nextButton: 'Вперед',
//             activeIndex: 0, // то, что позволяет определить текущий активный шаг
//             currentButton: true,
//             steps: [
//                 {
//                     title: 'Основы',
//                     text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'
//                 },
//                 {
//                     title: 'Компоненты',
//                     text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'
//                 },
//                 {
//                     title: 'Роутер',
//                     text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'
//                 },
//                 {
//                     title: 'Vuex',
//                     text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'
//                 },
//                 {
//                     title: 'Composition',
//                     text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
//                 },
//             ]
//         }
//     },
//     methods: {
//         prev() {
//             if (this.activeIndex !== 0) {
//                 this.activeIndex -= 1
//                 console.log('<=')
//             }
//         },
//         reset() {
//             this.activeIndex = 0,
//                 this.nextButton = this.nextButton
//         },
//         resetOrNext() {
//             if (this.forwardButton == 'Начать сначала') {
//                 this.reset()
//             } else {
//                 this.nextOfFinish()
//             }
//         },
//         nextOfFinish() {
//             if (this.activeIndex !== 4) {
//                 this.activeIndex += 1
//             }
//         },
//         setActive(idx) {
//             return this.activeIndex = idx
//         },
//         currentStep(idx) {
//             if (this.activeIndex === idx) {
//                 if (this.currentButton === true) {
//                     return 'active'
//                 }
//             } else if (this.activeIndex > idx) {
//                 return 'done'
//             } else {
//                 return ''
//             }
//         },
//     },
//     computed: {
//         currentText() {
//             const i = this.activeIndex
//             return this.steps[i].text
//         },
//         finish() {
//             if (this.activeIndex === 4) {
//                 this.nextButton = 'Начать сначала'
//                 return 'Начать сначала'
//                 console.log('click')
//             } else {
//                 return this.nextButton
//             }
//         },
//     }
// }
//
// Vue.createApp(App).mount('#app')


// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
    data() {
        return {
            nextButton: 'Вперед',
            activeButton: true,
            activeIndex: 0, // то, что позволяет определить текущий активный шаг
            steps: [
                {
                    title: 'Основы',
                    text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'
                },
                {
                    title: 'Компоненты',
                    text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'
                },
                {
                    title: 'Роутер',
                    text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'
                },
                {
                    title: 'Vuex',
                    text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'
                },
                {
                    title: 'Composition',
                    text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
                },
            ]
        }
    },
    methods: {
        setActive(i) {
            return this.activeIndex = i
        },
        prev() {
            if (this.activeIndex !== 0) {
                this.activeIndex -= 1
            }
        },
        currentStep(i) {
            if (this.activeIndex === i) {
                if (this.activeButton === true) {
                    return 'active'
                }
            } else if (this.activeIndex > i) {
                return 'done'
            } else {
                return ''
            }
        },
        reset() {
            this.activeIndex = 0
            this.forwardButton = 'Вперед'
        },
        nextOfFinish() {
            if (this.activeIndex !== 4) {
                this.activeIndex += 1
            }
            console.log('=>')
            // кнопка вперед или закончить
        },
        resetOrNext() {
            if (this.forwardButton == 'Начать сначала') {
                this.reset()
            } else {
                this.nextOfFinish()
            }
        },


    },
    computed: {
        currentText() {
            const i = this.activeIndex
            return this.steps[i].text
        },
        finish() {
            if (this.activeIndex === 4) {
                this.forwardButton = 'Начать сначала'
                return 'Начать сначала'
                console.log('click')
            } else {
                return 'Вперед'
            }
        },
    }
}

Vue.createApp(App).mount('#app')