from http.client import HTTPResponse

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse
from model import Signup, Login, Login_response


from database import(
    register
)



app = FastAPI()


origins = ['https://localhost:3000']


app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)


@app.post("/register", response_model=Signup, status_code=201)
async def registering_signup(signup: Signup):
    response = await register(signup.dict())
    if response:
        return response
    raise HTTPException(400, "something went wrong/bad request")
    

@app.post("/singup", response_model=Login, status_code=200)
async def register_login(login:Login):
    response = await register(login.dict())
    if response:
        return response 
    raise HTTPException(400, "something went wrong/bad request")
