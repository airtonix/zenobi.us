import Vue from 'vue';

Vue.directive({
    bind (el, binding, vnode) {
        const $vm = vnode.componentInstance;

        const options = Object.assign(binding.value, {
            root: null,
            threshold: [0, 0.2],
            rootMargin: '0px 0px 0px 0px'
        })
        const observer = new IntersectionObserver((entries) => {
            const {isIntersecting} = entries[0];
            if (!isIntersecting) {
                $vm.$emit('leave', [entries[0]])
            } else {
                $vm.$emit('enter', [entries[0]])
            }
            $vm.intersecting = isIntersecting;
            $vm.$emit('change', [entries[0]])
        }, options);

        $vm.intersect = {
            options,
            observer
        };
    },

    inserted (el, binding, vnode) {
        const $vm = vnode.componentInstance;
        $vm.intersect.observer.observe($vm.$el)
    },

    unbind (el, binding, vnode) {
        const $vm = vnode.componentInstance;
        $vm.intersect.observer.disconnect()
    }
});