from ast import Str
import email
from pydantic import BaseModel

class Singup(BaseModel):
    profile_url: str
    email: str
    password: str
    Name: str
    age: int
    gender: str
    college_name: str 
    college_email = str



class Login(BaseModel):
    email: str
    password: str 

class Login_response(BaseModel):
    name: str
    college: str
    mobile: int
    image_url: str

    