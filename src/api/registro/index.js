import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Registro, { schema } from './model'

const router = new Router()
const { measuring, location } = schema.tree

/**
 * @api {post} /registros Create registro
 * @apiName CreateRegistro
 * @apiGroup Registro
 * @apiParam {Object} location Localización de las mediciones.
 * @apiParam {String} location.latitude Latitud.
 * @apiParam {String} location.longitude Longitud.
 * @apiParam {Object} measuring Mediciones del registro.
 * @apiParam {String} measuring.temperature temperatura.
 * @apiParam {String} measuring.humidity Humedad.
 * @apiParam {String} measuring.pressure Presion.
 * @apiParam {String} measuring.light Light.
 * @apiSuccess {Object} registro Registro data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiParamExample {json} Request-Example:
 * {
 *  "measuring": {
 * 	 "temperature": "32.2",
 * 	 "humidity": "23",
 * 	 "pressure": "{{$randomInt}}",
 * 	 "light": "{{$randomInt}}"
 * 	},
 * 	"location": {
 * 	 "latitude": "28.485446",
 * 	 "longitude": "-105.782067"
 * 	}
 * }
 */
router.post('/',
  body({ measuring, location }),
  create)

/**
 * @api {get} /registros Retrieve registros
 * @apiName RetrieveRegistros
 * @apiGroup Registro
 * @apiUse listParams
 * @apiSuccess {Object[]} registros List of registros.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /registros/:id Retrieve registro
 * @apiName RetrieveRegistro
 * @apiGroup Registro
 * @apiSuccess {Object} registro Registro's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Registro not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /registros/:id Update registro
 * @apiName UpdateRegistro
 * @apiGroup Registro
 * @apiParam measuring Registro's measuring.
 * @apiParam date Registro's date.
 * @apiParam location Registro's location.
 * @apiSuccess {Object} registro Registro's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Registro not found.
 */
router.put('/:id',
  body({ measuring, location }),
  update)

/**
 * @api {delete} /registros/:id Delete registro
 * @apiName DeleteRegistro
 * @apiGroup Registro
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Registro not found.
 */
router.delete('/:id',
  destroy)

export default router
