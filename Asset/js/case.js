var app = new Vue({
    el: '#app',

    data: function () {
        return {
            menu_current:'',
            menu_open: false,
            scroll_top_offset: null,
            company_menu_current: '公司簡介',
        };
    },

    created: function () {
        const vm = this;
        window.onscroll = vm.onscroll;
    },
    methods: {
        allElementInViewport: function (el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top >= window.pageYOffset &&
                left >= window.pageXOffset &&
                (top + height) <= (window.pageYOffset + window.innerHeight) &&
                (left + width) <= (window.pageXOffset + window.innerWidth)
            );
        },
        partElementInViewport: function (el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top < (window.pageYOffset + window.innerHeight) &&
                left < (window.pageXOffset + window.innerWidth) &&
                (top + height) > window.pageYOffset &&
                (left + width) > window.pageXOffset
            );
        },
        onscroll: function () {
            const vm = this;
            vm.scroll_top_offset = window.pageYOffset;
        },
        scroll2View: function (el, isPhone=false) {
            const vm = this;
            vm.company_menu_current = el;
            const yourHeight = document.querySelector('header').clientHeight;
            const node = vm.$refs[el]
            const node_top = node.getClientRects()[0].top
            const touch_scroll_top_offset = vm.$refs.company_menu.getClientRects()[0].top


            let wait_scroll_time = 100;
            let add_animate_time = 750;
            let remove_animate_time = 1500;
            if (isPhone) {
                wait_scroll_time = 280;
                add_animate_time = 500;
                remove_animate_time = 1000;
            }
            if (vm.allElementInViewport(node)) {
                add_animate_time -= wait_scroll_time;
                remove_animate_time -= wait_scroll_time;
            } else {
                setTimeout(() => {
                    // window.scrollTo({
                    //     top: scrolledY + node_top - yourHeight - scroll_top,
                    //     left: 0,
                    //     behavior: 'smooth'
                    // });

                    vm.$smoothScroll({
                        scrollTo: node,
                        offset: (yourHeight + (touch_scroll_top_offset >= 0 ? touch_scroll_top_offset : 0)) * -1
                    });
                }, wait_scroll_time);
            }

            setTimeout(() => {
                node.classList.add('animate__animated', 'animate__headShake');
            }, add_animate_time);
            setTimeout(() => {
                node.classList.remove('animate__animated', 'animate__headShake');
            }, remove_animate_time);

        },
        toTop: function(){
            const vm = this;
            vm.$smoothScroll({
                scrollTo: document.querySelector('#app'),
                offset: 0,
            });
        }
    },
    watch: {
        scroll_top_offset: function (val) {
            const vm = this;
            if (vm.$refs['scroll-top-button']) {
                const footer = document.querySelector('footer');
                if (vm.partElementInViewport(footer)) {
                    vm.$refs['scroll-top-button'].classList.remove('fixed', 'shadow');
                    vm.$refs['scroll-top-button'].classList.add('border');
                } else {
                    vm.$refs['scroll-top-button'].classList.add('fixed', 'shadow');
                    vm.$refs['scroll-top-button'].classList.remove('border');

                }
            }

        }
    }

})