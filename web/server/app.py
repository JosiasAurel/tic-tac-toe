
from fastapi import FastAPI, Response
from pysondb import db

ttt = db.getDb("ttt.json")

app = FastAPI()


@app.route("/")
def _root():
    return {"msg": "Hello World"}
