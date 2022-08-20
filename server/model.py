from pydantic import BaseModel


class SignUp(BaseModel):
    profile_URL: str
    email: str
    name: str
    password: str
    age: int
    gender: str
    college_name: str 
    c_email: str

class Login(BaseModel):
    email: str
    password: str 

