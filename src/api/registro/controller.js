import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Registro } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Registro.create(body)
    .then((registro) => registro.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Registro.find(query, select, cursor)
    .then((registros) => registros.map((registro) => registro.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Registro.findById(params.id)
    .then(notFound(res))
    .then((registro) => registro ? registro.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Registro.findById(params.id)
    .then(notFound(res))
    .then((registro) => registro ? _.merge(registro, body).save() : null)
    .then((registro) => registro ? registro.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Registro.findById(params.id)
    .then(notFound(res))
    .then((registro) => registro ? registro.remove() : null)
    .then(success(res, 204))
    .catch(next)
