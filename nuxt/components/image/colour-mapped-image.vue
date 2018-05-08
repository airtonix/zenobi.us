<template>
<svg xmlns="http://www.w3.org/2000/svg">
    <defs>
        <filter :id="'colors-' + guid ">
        <feColorMatrix
            result="A"
            in="SourceGraphic"
            type="matrix"
            :values="grayScaleMatrix"/>
        </feColorMatrix>
        <feColorMatrix
            color-interpolation-filters="sRGB"
            in="A"
            type="matrix"
            :values="colourMapMatrix"/>
        </feColorMatrix>
      </filter>
    </defs>
    <image
        :filter="`url('#colors-${guid}')`"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        v-bind:xlink:href="src"></image>
  </svg>
</template>

<script>
import uniqid from 'uniqid';


export default {

    props: {
        src: String,
        colour: String,
        guid: {
            default () {
                return uniqid();
            }
        }
    },

    computed: {

        grayScaleMatrix () {

            return [`0.3333 0.3333 0.3333 0 0`,
                    `0.3333 0.3333 0.3333 0 0`,
                    `0.3333 0.3333 0.3333 0 0`,
                    `0      0      0      1 0`].join();
        },

        colourMapMatrix () {
            const short = /[a-f0-9]{1}/ig;
            const long = /[a-f0-9]{2}/ig;
            const colour = this.colour.toLowerCase().replace('#', '');
            const isShort = colour.length == 3;

            const [red, green, blue, alpha = 1] = colour
                .match(isShort && short || long)
                .map( hex => isShort && `${hex}${hex}` || hex)
                .map(hex => parseInt(hex, 16) / 255 );

            return [
                [red, 0, 0, 0, 0].join(' '),
                [0, green, 0, 0, 0].join(' '),
                [0, 0, blue, 0, 0].join(' '),
                [0, 0, 0, alpha, 0].join(' '),
            ].join();
        }
    }
};
</script>