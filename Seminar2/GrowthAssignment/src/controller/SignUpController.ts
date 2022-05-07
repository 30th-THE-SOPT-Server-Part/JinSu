import { Body, Get, HttpCode, JsonController, Post, Req, Res } from "routing-controllers";
import { Service }                                             from "typedi";
import { Response }                                            from "express";
import HttpState                                               from "../util/HttpState";
import SignUp                                                  from "../model/signup/SignUp";

@JsonController()
@Service()
export default class SignUpController {
    @HttpCode(HttpState.CREATED)
    @Post("/signUp")
    postSignUp(@Body() body: SignUp) {
        return {
            id: body,
            success: true,
            message: "success sign up"
        }
    }
};