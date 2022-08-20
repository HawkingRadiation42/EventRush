
from model import SignUp, Login, Register
from fastapi import HTTPException
from pymongo import MongoClient

#mongodb driver
#import motor.motor_asyncio

client = MongoClient("mongodb+srv://hawkingradiation:1234@cluster0.y1uabs9.mongodb.net/?retryWrites=true&w=majority")
db = client.event_rush
#client = motor.motor_asyncio.AsyncIOMotorClient(client, 27017)

collection = db["authentication"]
registeration = db["events"]
print("connection successfull!")



async def register(signup):
    document = signup
    print(document)
    result =  collection.insert_one(document)
    return document


async def signin(login):
    for key, value in login.dict().items():
        email = key
        password = value

    result = collection.find_one({"password": password})
    if not result:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    # return result
    return result


async def register_event(register):
    document = register
    result = registeration.insert_one(document)
    return document