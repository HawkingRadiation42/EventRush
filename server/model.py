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

class cultural_events(BaseModel):
    college_name: str
    event_name: str
    event_type: str
    registered_participants: int = 1



