import mongoose, {Schema} from 'mongoose'

const priceSchema = new Schema({
    psand : {
        type: Number,
        default: 3000
    },
    msand: {
        type: Number,
        default: 3000,
    },
    halfJally: {
        type: Number,
        default:1200,
    },
    oneHalfJally: {
        type: Number,
        default:1300,
    },
    threebyfourJally: {
        type: Number,
        default:1400,
    },
    powder: {
        type: Number,
        default: 800,
    },
    chips: {
        type: Number,
        default: 1100,
    }

})

export default mongoose.models.Price || mongoose.model("Price", priceSchema)
