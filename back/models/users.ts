import { Model, Schema, model } from 'mongoose';

export interface IWorker {
    category: string;
    desc: string;
    fileAvatar: string;
    provinceId: string;
    provinceName: string;
    cityId: string;
    cityName: string;
    address?: string;
}
export interface IUser extends Document {
    name: string;
    email: string;
    phone: number;
    password: string;
    worker?: IWorker;
    code?: string;
    verified?: boolean;
    reviews: IReview[];
}

export interface IReview {
    userId: string; // ID del usuario que dejó la reseña
    rating: number; // Calificación de la reseña
    comment: string; // Comentario de la reseña
}



const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "te faltó el nombre"]
    },
    email: {
        type: String,
        required: [true, "te faltó el email"]
    },
    phone: {
        type: Number,
        required: [true, "te faltó el celular"]
    },
    password: {
        type: String,
        required: [true, "te faltó la password"]
    },
     worker:{
            category: {
                type: String,
            },
            fileAvatar: {
                type: String,
            },
            desc: {
                type: String,
            },
            provinceId: {
                type: String,
            },
            provinceName: {
                type: String,
            },
            cityId:{
                type: String,
            },
            cityName:{
                type: String,
            },
            address:{
                type: String,
            },

            /* reviews: [{
                userId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Usuario',
                },
                rating: {
                    type: Number,
                },
                comment: {
                    type: String,
                }
            }] */
              
    }, 
     code:{
        type: String
    },
    verified:{
        type:Boolean,
        default:false
    },

    reviews: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],

});

userSchema.methods.toJSON = function () {
    const { __v, password, code, ...user } = this.toObject();
    return user;
};

const User: Model<IUser> = model<IUser>("Usuario", userSchema);
export default User;
