import mongoose, { Schema } from 'mongoose'
let moment = require('moment')
moment().format()

let timezone = require('moment-timezone')
timezone().tz('America/Chihuahua').format()

// temperature, humidity, pressure, light
const registroSchema = new Schema({
  measuring: {
    type: Object,
    temperature: {
      type: String,
      required: true,
      trim: true
    },
    humidity: {
      type: String,
      required: true,
      trim: true
    },
    pressure: {
      type: String,
      required: true,
      trim: true
    },
    light: {
      type: String,
      required: true,
      trim: true
    }
  },
  hour: {
    type: Date,
    default: Date.now()
  },
  date: {
    type: Date,
    default: Date.now()
  },
  location: {
    type: Object,
    latitude: {
      type: String,
      trim: true
    },
    longitude: {
      type: String,
      trim: true
    }
  }
}, {
  timestamps: true
})

registroSchema.pre('save', function (next) {
  this.timestamp = Date.now()
  this.hour = Date.now()
  this.date = Date.now()
  let _timezone = timezone.tz(this.hour, 'America/Chihuahua').format()
  this.hour = _timezone
  this.date = _timezone
  next()
})

registroSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      measuring: this.measuring,
      hour: formatHour(this.hour),
      date: formatDate(this.date),
      location: this.location,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return view
  }
}

function formatHour (date) {
  const hour = moment(new Date(date).toUTCString())
  return hour.format('h:mm:ss a')
}

function formatDate (date) {
  const _date = moment(new Date(date).toUTCString())
  return _date.format('D MMMM YYYY')
}

const model = mongoose.model('Registro', registroSchema)

export const schema = model.schema
export default model
