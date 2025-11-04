import pytest
from httpx import AsyncClient
from app.main import app


@pytest.mark.asyncio
async def test_register_and_login():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        r = await ac.post("/auth/register", json={"name":"Test","email":"t@test.local","password":"secret","role":"buyer"})
        assert r.status_code == 200
        r2 = await ac.post("/auth/login", json={"email":"t@test.local","password":"secret"})
        assert r2.status_code == 200
