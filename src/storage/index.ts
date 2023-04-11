
import storage from 'node-persist'


storage.init({
    dir:'/',
    stringify: JSON.stringify,
    parse: JSON.parse,
})

export default storage;