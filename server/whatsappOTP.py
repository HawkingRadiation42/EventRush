from twilio.rest import Client 
 
account_sid = '' 
auth_token = '' 
client = Client(account_sid, auth_token) 
 
message = client.messages.create( 
                              from_='whatsapp:',  
                              body='Can I add an image here?',      
                              to='whatsapp:+919873329055' ,
                              MediaUrl=""
                          ) 
 
print(message.sid)