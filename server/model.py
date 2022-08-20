from pydantic import BaseModel
from typing import Optional

class SignUp(BaseModel):
    profile_URL: str
    email: str
    name: str
    password: str
    age: int
    gender: str
    college_name: str 
    c_email: Optional[str]

class Login(BaseModel):
    email: str
    password: str 

class coding_events(BaseModel):
    number_of_events: int
    college_name: str
    event_name: str
    event_type: str
    registeration_left: Optional[bool] = 1


