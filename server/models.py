from sqlalchemy import Column,Integer,Text,String,DateTime

from .database import Base


class Note(Base):
    __tablename__='note'

    note_id = Column(Integer,primary_key=True,autoincrement=True)
    title = Column(String(20))
    create_time = Column(DateTime)
    content = Column(Text)