
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from deta import Deta

deta = Deta("b0idndtb_7T1ci58n9UfVPmzrfhCV28F4gShBD5Yb")

game_db = deta.Base("tic-tac-toe")

app = FastAPI()

# add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def _root():
    return {"msg": "Hello World"}


@app.post("/push-state")
async def _push_state(req: Request):
    body = await req.json()
    print(body)
    return
