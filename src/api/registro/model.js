import mongoose, { Schema } from 'mongoose'
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
  date: {
    type: Date,
    default: Date.now(),
    required: true
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
  this.hora = Date.now()
  this.fecha = Date.now()
  next()
})

registroSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      measuring: this.measuring,
      date: this.date,
      location: this.location,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return view
  }
}

const model = mongoose.model('Registro', registroSchema)

export const schema = model.schema
export default model
