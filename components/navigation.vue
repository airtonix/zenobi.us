<template>
    <div
        class="navigation"
        :class="['navigation--' + shade]">

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
                to="/stories">
                <span class="navigation-item__label">stories</span>
            </nuxt-link>
            </intersect>

            <intersect
                @change="changed"
                :threshold="[1.0]">
            <nuxt-link
                class="navigation__link"
                v-hide-if-excluded="exclude"
                to="/projects">
                <span class="navigation-item__label">projects</span>
            </nuxt-link>
            </intersect>

            <intersect
                @change="changed"
                :threshold="[1.0]">
            <nuxt-link
                class="navigation__link"
                v-hide-if-excluded="exclude"
                to="/projects">
                <span class="navigation-item__label">projects</span>
            </nuxt-link>
            </intersect>

            <intersect
                @change="changed"
                :threshold="[1.0]">
            <nuxt-link
                class="navigation__link"
                v-hide-if-excluded="exclude"
                to="/projects">
                <span class="navigation-item__label">projects</span>
            </nuxt-link>
            </intersect>

            <intersect
                @change="changed"
                :threshold="[1.0]">
            <nuxt-link
                class="navigation__link"
                v-hide-if-excluded="exclude"
                to="/projects">
                <span class="navigation-item__label">projects</span>
            </nuxt-link>
            </intersect>

            <intersect
                @change="changed"
                :threshold="[1.0]">
            <nuxt-link
                class="navigation__link"
                v-hide-if-excluded="exclude"
                to="/projects">
                <span class="navigation-item__label">projects</span>
            </nuxt-link>
            </intersect>

            <intersect
                @change="changed"
                :threshold="[1.0]">
            <nuxt-link
                class="navigation__link"
                v-hide-if-excluded="exclude"
                to="/projects">
                <span class="navigation-item__label">projects</span>
            </nuxt-link>
            </intersect>

            <intersect
                @change="changed"
                :threshold="[1.0]">
            <nuxt-link
                class="navigation__link"
                v-hide-if-excluded="exclude"
                to="/projects">
                <span class="navigation-item__label">projects</span>
            </nuxt-link>
            </intersect>
                
        </div>

        <div class="navigation__group navigation__group--offscreen">
            <div class="navigation__group-toggle"
                v-if="offscreen.length">
                <span class="material-icons">menu</span>
            </div>
            <div class="navigation__group-items"></div>
            <div class="navigation__badge navigation__badge--count">{{offscreen.length}} offcanvas items</div>
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
                    log('directive.hide-if-excluded', el)
                    el.classList.add('navigation__link--hide')
                }
            }
        }
    },

    props: {
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

<style lang="scss">
@import "~assets/uikit/index";

$border-colour--light: rgba(white, 0.4);
$text-colour--light: rgba(white, 0.8);
$border-colour--dark: rgba(black, 0.4);
$text-colour--dark: rgba(black, 0.8);

.navigation {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    border-width: 1px;
    border-style: solid;
    align-items: center;
    position: relative;
}

.navigation--hero {
    max-width: 80vw;
}

.navigation__group {
    display: flex;
    overflow: hidden;
    align-items: flex-start;
}
.navigation__group--offscreen {
    flex-shrink: 0;
}

.navigation__badge {
    border-radius: 1rem;
    padding: 0 0.5rem;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 12px;
    position: absolute;
    white-space: nowrap;
}
.navigation__badge--count {
    background: hsl(192, 94%, 56%);
    color: hsl(192, 94%, 26%);
    top: -2rem;
    right: 0rem;
}
.navigation__badge--width {
    background: hsl(17, 100%, 74%);
    color: hsl(17, 100%, 44%);
    bottom: -2.5rem;
    left: 0;
    &:before {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        top: -4px;
        right: 16px;
        background: inherit;
        transform: rotate(45deg);
    }
}

.navigation__group-toggle {
    min-width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.navigation--rounded {
    border-radius: 5px;
}
.navigation--toolbar {
    border-top: 0;
    border-left: 0;
    border-right: 0;
}
.navigation__link {
    padding: 1rem;
    text-decoration: none;
    text-align: center;
    border: inherit;
    border-width: 1px;
}
.navigation__link--hide {
    display: none;
}
.navigation__link--intersects {
    visibility: hidden;
}

.navigation--thick {
    border: 2px solid $border-colour--light;
}
.navigation--light {
    border-color: $border-colour--light;
    .navigation__link {
        color: $text-colour--light;
    }
}

.navigation--dark {
    border-color: $border-colour--dark;
    .navigation__link {
        color: $text-colour--dark;
    }
}
@mixin navigation-item-horizontal () {
    .navigation__link {
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: transparent;
        border-right-color: inherit;

        &:first-child {
            border-left-color: transparent;
        }
        &:last-child {
            border-right-color: transparent;
        }
    }
}
@mixin navigation-item-vertical () {
    .navigation__link {
        border-top-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: inherit;

        &:first-child {
            border-top-color: transparent;
        }
        &:last-child {
            border-bottom-color: transparent;
        }
    }
}

.navigation--vertical .navigation__group--onscreen {
    flex-direction: column;
    @include navigation-item-vertical();
}

.navigation--horizontal .navigation__group--onscreen {
    flex-direction: row;
    @include navigation-item-horizontal();
}



@include breakpoint('medium') {
    .navigation {
        width: auto;
    }
    .navigation--vertical\@mediumup {
        flex-direction: column;
        @include navigation-item-vertical();
    }
    .navigation--horizontal\@mediumup {
        flex-direction: row;
        @include navigation-item-horizontal();
    }
}
</style>
