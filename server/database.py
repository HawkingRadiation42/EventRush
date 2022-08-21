from model import SignUp, Login, Register
from fastapi import HTTPException
from pymongo import MongoClient

import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import qrcode

#mongodb driver
#import motor.motor_asyncio

client = MongoClient(os.environ.get("MONGODB_KEY"))

db = client.event_rush
#client = motor.motor_asyncio.AsyncIOMotorClient(client, 27017)

collection = db["authentication"]
registeration = db["events"]
print("connection successfull!")



async def register(signup):
    document = signup

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

# async def email_twillo(register):
#     document = register
#     event = register.event_name
#     message = Mail(from_email='hackjklu@sayantanmondal.com',
#                     mobile=register.mobile,
#                     subject='successfully registered for the cultural fest',
#                     plain_text_content='and easy to do anywhere, even with python',
#                     html_content='<strong>and easy to do anywhere, even with Python</strong')

#     try:
#         sg = SendGridAPIClient(os.environ['SENDGRID_API_KEY'])
#         response = sg.send(message)
#         print(response.status_code)
#         print(response.body)
#         print(response.headers)


# async def twillo_response(register):
#     data = register
#     image = qrcode.make(data)
#     return image