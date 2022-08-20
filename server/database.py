
from model import SignUp, Login
from fastapi import HTTPException
#mongodb driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('localhost', 27017)


database = client.Authentication
collection = database.authentication
registeration = database.events
print("connection successfull!")



async def register(signup):
    document = signup
    result = await collection.insert_one(document)
    print(result)
    return document


async def signin(login):
    for key, value in login.dict().items():
        email = key
        password = value
    # print(login)
    # print(email)
    # print(password)s
    # Email = login.email
    # print(Email)
    result = await collection.find_one({"password": password})
    if not result:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    # return result
    return result



async def register_cultural_events(event):

    return 1