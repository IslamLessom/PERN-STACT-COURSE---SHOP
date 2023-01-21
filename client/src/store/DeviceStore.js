import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.mds.yandex.net/get-marketpic/5110396/picf3d53d57a57aa5ea4e3e719a2d1fb8d0/orig.png`},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.mds.yandex.net/get-marketpic/5110396/picf3d53d57a57aa5ea4e3e719a2d1fb8d0/orig.png`},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.mds.yandex.net/get-marketpic/5110396/picf3d53d57a57aa5ea4e3e719a2d1fb8d0/orig.png`},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.mds.yandex.net/get-marketpic/5110396/picf3d53d57a57aa5ea4e3e719a2d1fb8d0/orig.png`},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}


