from pydantic import BaseModel


class SignUp(BaseModel):
    profile_URL: str
    email: str
    password: str
    name: str
    age: int
    gender: str
    college_name: str 
    c_email: str

class Login(BaseModel):
    email: str
    password: str 

class Login_response(BaseModel):
    name: str
    college: str
    mobile: int
    image_url: str

    
