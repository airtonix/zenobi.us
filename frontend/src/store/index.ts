import { registerRootStore } from 'mobx-keystone'

import { AppModel } from './app/AppModel'

export const Store = new AppModel({})

registerRootStore(Store)
