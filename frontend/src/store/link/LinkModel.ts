import {
  prop,
  model,
  Model,
} from 'mobx-keystone'

export const LINKMODEL_MODEL_KEY = 'LinkModel'

@model(LINKMODEL_MODEL_KEY)
export class LinkModel extends Model({
  name: prop<string>()
}) {
}
