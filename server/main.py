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
async def singup(signup: signup):
    response = await register(signup.dict())
    if response:
        return response
    raise HTTPException(400, "something went wrong/bad request")
    