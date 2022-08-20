from ast import Str
import email
from pydantic import BaseModel

class Singup(BaseModel):
    profile_url: str
    Name: str
    college: str 
    mobile: int
    email: str
    password: str
    image_url: str


class Login(BaseModel):
    email: str
    password: str 

class Login_response(BaseModel):
    name: str
    college: str
    mobile: int
    image_url: str

    