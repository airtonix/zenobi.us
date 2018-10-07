export default function (...classes) {
    return classes
        .map(klass => {
            return typeof klass == 'string'
                && {[klass]: true}
                || klass;
        })
        .map( klass => {
            return Object
                .keys(klass)
                .filter(key => !!klass[key])
                .map(key => klass[key])
                .join(' ');
        })
        .join(' ');
}