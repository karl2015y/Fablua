var app = new Vue({
  el: '#app',
  components: {
    agile: VueAgile
  },
  data: function () {
    return {

      menu_open: false,
      scroll_top_offset: null,
    };
  },

  created: function () {
    const vm = this;
    window.onscroll = vm.onscroll;
    vm.scrollParallax()
  },
  methods: {
    onscroll: function () {
      const vm = this;
      vm.scroll_top_offset = window.pageYOffset;
    },
    partElementInViewport : function (el) {
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
    scrollParallax: function (css_selector = 'img.offset-img') {
      const vm = this;
      const handler = (vm, css_selector ) => {
        document.querySelectorAll(css_selector).forEach((el) => {
          if (vm.partElementInViewport (el.parentElement)) {
            el.style.top = `-${el.parentElement.getBoundingClientRect().top}px`
          } else {
            el.style.top = `0px`
          }
        })
      };
      handler(vm,css_selector);
      let time_out = null;
      window.addEventListener('scroll', () => {
        handler(vm,css_selector)
        // if (time_out) {
        //   clearTimeout(time_out);
        // }
        // time_out = setTimeout(()=>{handler(vm,css_selector)}, 1);

      });
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