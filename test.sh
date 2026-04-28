uv run builder/navbar.py
uv run builder/cv.py

uv run -m http.server

rm cv/index.html
rm index.html
rm src/nav.html
