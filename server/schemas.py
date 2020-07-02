from typing import Any, List, Optional

from pydantic import BaseModel

class ItemBase(BaseModel):
    title: str
    content: str


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    note_id:int
    class Config:
        orm_mode = True