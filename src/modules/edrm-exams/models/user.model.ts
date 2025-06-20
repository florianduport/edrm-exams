import { EnduranceSchema, EnduranceModelType } from '@programisto/endurance-core';
import Company from './company.model.js';

enum UserRole {
    // eslint-disable-next-line no-unused-vars
    Admin = 'admin',
    // eslint-disable-next-line no-unused-vars
    Recruiter = 'recruiter',
    // eslint-disable-next-line no-unused-vars
    Candidate = 'candidate'
}

@EnduranceModelType.modelOptions({
    options: {
        allowMixed: EnduranceModelType.Severity.ALLOW
    }
})
class User extends EnduranceSchema {
    @EnduranceModelType.prop({ required: true })
    public firstName!: string;

    @EnduranceModelType.prop({ required: true })
    public lastName!: string;

    @EnduranceModelType.prop({ required: true, unique: true })
    public email!: string;

    @EnduranceModelType.prop({ required: true })
    public password!: string;

    @EnduranceModelType.prop({ required: true, enum: UserRole })
    public role!: UserRole;

    @EnduranceModelType.prop({ ref: () => Company })
    public companyId?: typeof Company;

    public static getModel() {
        return UserModel;
    }
}

const UserModel = EnduranceModelType.getModelForClass(User);
export default UserModel;
