import {
  prop,
  model,
  Model,
  Ref
} from 'mobx-keystone'

import { LinkModel } from '../link/LinkModel'

export const APP_MODEL_KEY = 'AppModel'

@model(APP_MODEL_KEY)
export class AppModel extends Model({
  links: prop<Ref<LinkModel>>()
}) {
}
