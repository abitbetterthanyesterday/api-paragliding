# api-paragliding
API for paragliding classified ads

## WINGS
### Create an Ad
POST api/wings/
  Payload: {
    {
    title: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    hours: { type: Number },
    condition: { type: String, enum: conditions },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    localistation: { type: Schema.Types.ObjectId, ref: 'localistation', required: true },
    price: { type: Number, required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  }
}