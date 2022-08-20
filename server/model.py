import email
from pydantic import BaseModel

class singup(BaseModel):
    Name: str
    college: str 
    mobile: int
    email: str
    password: str
    image_url: str


class login(BaseModel):
    email: str
    password: str 

class login_response(BaseModel):
    name: str
    college: str
    mobile: int
    image_url: str

    