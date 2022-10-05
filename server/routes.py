from fastapi import FastAPI
from database import signin, register, register_event
from model import SignUp, Login, Register
from fastapi.responses import HTMLResponse, RedirectResponse


@app.post("/register", status_code=201)
async def registering_signup(signup: SignUp):
    response = await register(signup.dict())
    if response:
        print("post successfull!")
        return 
    raise HTTPException(400, "something went wrong/bad request")
    
