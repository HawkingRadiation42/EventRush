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

    