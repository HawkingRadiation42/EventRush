from http.client import HTTPResponse
from signal import sigpending
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse
from model import signup, login, login_response


from database import(
    register
)
from server.database import singin
app = FastAPI()


origins = ['https://localhost:3000']


app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)


@app.get("/register", response_model=signup)
async def registering_signup(signup: signup):
    response = await register(signup.dict())
    if response:
        return response
    raise HTTPException(400, "something went wrong/bad request")
    


@app.get("/singup", response_model=login)
async def register_login(login:login):
    response = await register(login.dict())
    if response:
        return response 
    raise HTTPException(400, "something went wrong/bad request")
    