import { Action, createAction, props } from "@ngrx/store";

export const login=createAction(
    '[Login Page] Login',
    props<{ username: 'email'; password: 'password' }>()
)

export class loginAction implements Action{
    type='login'
}