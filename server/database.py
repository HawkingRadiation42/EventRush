from unittest import result
from model import singup, login, login_response

#mongodb driver
import motor.motor_asyncio


client = motor.motor_asyncio.AsyncIOMotorClient('localhost', 27017)


database = client.Authentication
collection = database.authentication
print("connection successfull!")

async def register(singup):
    document = singup
    result = await collection.insert_one(document)
    return document


async def singin(login):
    document = login
    result = await collection.insert_one(document)
    return document

async def login_response():
    return 1
    