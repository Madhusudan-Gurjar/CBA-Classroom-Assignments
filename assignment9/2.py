class Notification:
    def send(self, message):
        print("Sending notification...")


class EmailNotification(Notification):
    def send(self, message):
        print(f"Email Sent: {message}")


class SMSNotification(Notification):
    def send(self, message):
        print(f"SMS Sent: {message}")


class PushNotification(Notification):
    def send(self, message):
        print(f"Push Notification Sent: {message}")


def notify_user(notification):
    notification.send("Your order has been shipped")


notify_user(EmailNotification())
notify_user(SMSNotification())
notify_user(PushNotification())
