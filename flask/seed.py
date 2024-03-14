from app import app
from models import Track, Album, db
import json
from flask_bcrypt import Bcrypt
import random

if __name__ == "__main__":
    with app.app_context():
        # this will be needed for when we get to passwords
        bcrypt = Bcrypt(app)
        data = {}
        # get the json as a dict
        with open("albums.json") as f:
            data = json.load(f)
        for album in data["paramore-albums"]:
            new_album = Album(
                name=album["album"],
                year=album["year"],
                genre=album["genre"],
                label=album["label"],
                image=album["image"],
            )
            db.session.add(new_album)
            db.session.commit()

            for track in album["tracks"]:
                duration_string = track["duration"]
                minutes = duration_string.split(":")[0]
                seconds = duration_string.split(":")[1]
                time = int(minutes) * 60 + int(seconds)
                new_track = Track(
                    title=track['title'],
                    duration=time,
                    single=track["single"],
                    audio=track["audio"],
                    album = new_album
                )
                db.session.add(new_track)
                db.session.commit()