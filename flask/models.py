from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
import string, datetime

metadata = MetaData(
    naming_convention={
        "ix": "ix_%(column_0_label)s",
        "uq": "uq_%(table_name)s_%(column_0_name)s",
        "ck": "ck_%(table_name)s_%(constraint_name)s",
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
        "pk": "pk_%(table_name)s",
    }
)
db = SQLAlchemy(metadata=metadata)

class Album(db.Model, SerializerMixin):
    __tablename__ = 'album_table'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    year = db.Column(db.Integer)
    album = db.Column(db.String)
    genre = db.Column(db.String)
    label = db.Column(db.String)
    image = db.Column(db.String)

    tracks = db.relationship('Track', back_populates='album')

class Track(db.Model, SerializerMixin):
    __tablename__= 'track_table'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    duration = db.Column(db.Integer)
    single = db.Column(db.Boolean)
    audio = db.Column(db.String)
    album_id = db.Column(db.Integer, db.ForeignKey('album_table.id'))


    album= db.relationship('Album', back_populates='tracks')