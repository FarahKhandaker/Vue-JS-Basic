// console.log('hello, Vue');

const app = Vue.createApp({
    // data, functins
    // template: '<h2>I am the tamplate</h2>'
    data() {
        return {
            url: 'http://www.titanassist.com',
            showBooks: true,
            books: [
                {
                    title: 'Myurakkhi',
                    author: 'Humayun Ahmed',
                    img: 'assets/Image1.jpg',
                    isFav: true
                },
                {
                    title: 'Brishtir Thikana',
                    author: 'Jafar Iqbal',
                    img: 'assets/Image2.jpg',
                    isFav: false

                },
                {
                    title: 'Bhishon Oronno',
                    author: 'Rokib Hasan',
                    img: 'assets/Image3.jpg',
                    isFav: true
                },

            ]
            // x: 0,
            // y: 0
        }
    },
    methods: {
        // changeTitle(title) {
        //     console.log('you clicked me');
        //     this.title = title
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        // handleEvent(e, data) {
        //     console.log(e, e.type);
        //     if (data) {
        //         console.log(data);
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')