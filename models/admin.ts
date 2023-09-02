import mongoose, { Document, Schema } from 'mongoose';

export interface AdminDocument extends Document {
  login: string;
  password: string;
}

const adminSchema = new Schema<AdminDocument>({
  login: { type: String, required: true },
  password: { type: String, required: true },
});

const AdminModel = mongoose.model<AdminDocument>('Admin', adminSchema);

export default AdminModel;
