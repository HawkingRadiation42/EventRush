
from model import Singup, Login, Login_response

#mongodb driver
import motor.motor_asyncio


client = motor.motor_asyncio.AsmoyncIOMotorClient('localhost', 27017)


database = client.Authentication
collection = database.authentication
print("connection successfull!")



async def register(Singup):
    document = Singup
    result = await collection.insert_one(document)
    print(result)
    return document


async def singin(Login):
    document = Login
    result = await collection.insert_one(document)
    print(result)
    return document

async def login_response():
    return 1
    