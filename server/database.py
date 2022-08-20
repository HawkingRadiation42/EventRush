
from model import SignUp, Login, Login_response

#mongodb driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('localhost', 27017)


database = client.Authentication
collection = database.authentication
print("connection successfull!")



async def register(signup):
    document = signup
    result = await collection.insert_one(document)
    print(result)
    return document


async def signin(Login):
    document = Login
    result = await collection.insert_one(document)
    return document

async def login_response():
    return 1
    