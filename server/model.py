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
    mobile: str

class Login(BaseModel):
    email: str
    password: str 

# class cultural_events(BaseModel):
#     college_name: str
#     event_name: str
#     event_type: str
#     registered_participants: int = 1

# class id(BaseModel):
#     event_id: str

class Register(BaseModel):
    email: str
    name: str
    college_name: str
    event_name: str
    c_email: str
    event_date: str
    event_time: str
    event_type: str
    mobile: str