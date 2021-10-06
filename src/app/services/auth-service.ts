import * as jwt from "jsonwebtoken";
import * as md5 from "md5";
import User from "../models/user";

interface Input {
  username: string;
  password: string;
}
// interface User {
//     name: string;
//     username: string;
//     password: string;
//     mobile_number:string;
//     email_id:string;
//     role:string;
//     profile_photo?:string;
//   }
class AuthSerivce {
  static async login(data: Input) {
    try {

      let token: string | undefined;
      data.password = md5(data.password + process.env.HASH_SALT);
      const user = await User.findOneOrFail(data);
      if (user && user.id) {
        token = jwt.sign(
          { expiresIn: "5 days", data: { id: user.id,role:user.role } },
          process.env.JWT_SALT
        );
        return {
          token: token,
          user: user.id,
          role: user.role,
        };
      }
    } catch (error) {
        console.log(error,"error service ")
      throw error;
    }
  }
  static async signup(data: any) {
    try {
      data.password = md5(data.password + process.env.HASH_SALT);
      const user = await User.save(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthSerivce;
