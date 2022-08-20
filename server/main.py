from http.client import HTTPResponse
from signal import sigpending
from urllib import response
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse
from model import SignUp, Login, coding_events


from database import signin
from database import register
from server.database import register_coding_events 


app = FastAPI()


origins = ['https://localhost:3000']


app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)


@app.post("/register", status_code=201)
async def registering_signup(signup: SignUp):
    response = await register(signup.dict())
    if response:
        print("post successfull!")
        return response
    raise HTTPException(400, "something went wrong/bad request")
    

@app.post("/login", response_model=SignUp, status_code=200) #removed response model as data not fetched from the database 
async def register_login(login:Login):
    # details = login.dict()
    # Email = login.email
    response = await signin(login)
    # if response:
    #     return response
    return response
    # raise HTTPException(400, f"something went wrong/bad request {}")



@app.post("/coding", response_model=coding_events, status_code=200)
async def coding_events_func(event: coding_events):
    response = await register_coding_events(event)
    if response:
        return response
    raise HTTPException(404,f"there is no events ")

