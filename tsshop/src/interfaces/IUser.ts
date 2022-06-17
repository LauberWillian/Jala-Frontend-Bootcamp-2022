interface IUser {
    name?: string;
    email: string;
    age: string | number;
    birthdate?: string;
    gender: string;
    password: string;
    confirmPass?: string;
    isVerified?: boolean;
}

export default IUser;