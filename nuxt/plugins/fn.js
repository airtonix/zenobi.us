import Vue from 'vue';


Vue.use({
    install (Vue, options) {
        Vue.$fn = {

            debounce (func, wait, immediate) {
                let timeout;
                return function () {
                    let context = this,
                        args = arguments;

                    let later = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };

                    let callNow = immediate && !timeout;

                    clearTimeout(timeout);

                    timeout = setTimeout(later, wait);

                    if (callNow) func.apply(context, args);
                };
            },
        };
        Vue.prototype.$fn = Vue.$fn;

        Vue.$objects = {
            set (object, pathStr, value) {
                var a = pathStr.split('.');
                var o = object;
                for (var i = 0; i < a.length - 1; i++) {
                    var n = a[i];
                    if (n in o) {
                        o = o[n];
                    } else {
                        o[n] = {};
                        o = o[n];
                    }
                }
                o[a[a.length - 1]] = value;
            }

        };
        Vue.prototype.$objects = Vue.$objects;

        Vue.$dates = {
            monthNames: [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ],

            dayNames: [
                'Sunday', 'Monday', "Tuesday",
                "Wednesday", "Thursday", "Friday",
                "Saturday"
            ],

            ordinal (number) {
                var tens = number % 10,
                    thousands = number % 100;
                if (tens == 1 && thousands != 11) {
                    return number + "st";
                }
                if (tens == 2 && thousands != 12) {
                    return number + "nd";
                }
                if (tens == 3 && thousands != 13) {
                    return number + "rd";
                }
                return number + "th";
            },

            dateToJson (dateString) {
                const date = new Date(dateString);
                var day = date.getDate();
                var dayName = this.dayNames[date.getDay()];
                var month = this.monthNames[date.getMonth()];
                var year = date.getFullYear();
                return {day: `${this.ordinal(day)} ${dayName}`, month, year};
            }
        };
        Vue.prototype.$dates = Vue.$dates;

    }
});
