<template>
    <div
        class="navigation"
        :class="['navigation--' + shade]">
        <div class="navigation__container">

            <div class="navigation__group navigation__group--onscreen">

                <nuxt-link
                    class="navigation__link"
                    v-hide-if-excluded="exclude"
                    to="/">
                    <span class="navigation-item__label"></span>
                    <span class="navigation-item__icon material-icons">gesture</span>
                </nuxt-link>

                <intersect
                    @change="changed"
                    :threshold="[0, 1.0]">
                <nuxt-link
                    class="navigation__link"
                    v-hide-if-excluded="exclude"
                    to="/resume">
                    <span class="navigation-item__label">resume</span>
                </nuxt-link>
                </intersect>

                <intersect
                    @change="changed"
                    :threshold="[1.0]">
                <nuxt-link
                    class="navigation__link"
                    v-hide-if-excluded="exclude"
                    to="/posts">
                    <span class="navigation-item__label">posts</span>
                </nuxt-link>
                </intersect>

            </div>

            <div class="navigation__group navigation__group--offscreen">
                <div class="navigation__group-toggle"
                    v-if="offscreen.length">
                    <span class="material-icons">menu</span>
                </div>
                <div class="navigation__group-items"></div>
                <div class="navigation__badge navigation__badge--count"
                    v-if="debug">{{offscreen.length}} offcanvas items</div>
            </div>

        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import debug from 'debug';

const log = debug('components/navigation');


export default {

    components: {
        intersect: () => import('./intersect.vue')
    },

    directives: {
        'hide-if-excluded': {
            bind (el, binding, vnode) {
                const {to} = vnode.componentInstance;
                if (binding.value.includes(to)) {
                    log('directive.hide-if-excluded', {el, to});
                    el.classList.add('navigation__link--hide');
                }
            }
        }
    },

    props: {

        debug: {
            type: Boolean,
            default () { return false; }
        },

        exclude: {
            type: Array,
            default: () => []
        },
        shade: {
            type: String,
            default () { return 'dark'; }
        },
        arranged: {
            type: String,
            default () { return 'left'; }
        }
    },

    data () {
        return {
            offscreen: []
        }
    },

    methods: {

        changed ([entry]) {
            const isObscured = entry.intersectionRatio < 1;
            const alreadyKnown = this.offscreen.includes(entry.target);
            log('changed', entry.target, alreadyKnown);

            if (isObscured && !alreadyKnown) {
                log('changed.obscured', entry);
                this.offscreen.push(entry.target);
                entry.target.classList.add('navigation__link--intersects')
            }

            if (!isObscured) {
                log('changed.unObscured', entry);
                const index = this.offscreen.findIndex( item => item === entry.target)
                index >=0 && this.offscreen.splice(index, 1);
                entry.target.classList.remove('navigation__link--intersects')

            }
        },

    }
}
</script>

