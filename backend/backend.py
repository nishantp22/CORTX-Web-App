from config import app, mail
from flask_mail import Message  # Use Message from flask_mail, not from mailbox
from flask import request
from flask_cors import CORS

CORS(app)

@app.route("/send_mail", methods=['GET','POST'])
def send_mail():
    if request.method == 'POST':
        data = request.json
        print(data)

        first_name = data.get('first_name', 'No Name')
        last_name = data.get('last_name', 'No Name')
        email = data.get('email', 'No Email')
        country = data.get('country', 'India')
        subject = data.get('subject', 'No Subject')
        body = data.get('body', '<blank>')
        mail_message = Message(subject, sender=email, recipients=['nishant.pandey3910@gmail.com'])
        mail_message.body = 'Message from CORTX website'+'\n'+'Name : '+first_name+' '+last_name+'\n'+ 'Country : '+country +'\n'+'Email : '+email+'\n'+'Subject : '+subject+'\n'+'Body : '+body
        mail.send(mail_message)
        return "Mail has been sent"
    else:
        return "Invalid request method"

if __name__ == '__main__':
    app.run(debug=True)