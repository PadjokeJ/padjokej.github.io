if __name__ != "__main__":
  exit()

pages = [
  { 
    "link": "/cv",
    "title": "Experience"
  }
]

def gen_nav():
  global pages
  navbar = "<div class=\"navbar\">\n"
  
  navbar += "<ul class=\"navul\">\n"
  navbar += "<li class=\"navhome\"><a href=\"/\" class=\"navlink\">PadjokeJ</a></li>\n"
  
  for el in pages:
    navbar += f"<li class=\"navli\"><a href=\"{el["link"]}\" class=\"navlink\">{el["title"]}</a></li>\n"

  navbar += "</ul>\n"

  navbar += "</div>\n"

  with open("src/nav.html", 'w') as f:
    f.write(navbar)

  return navbar

nb = gen_nav()

index = ""
with open("src/index.html", 'r') as f:
  for line in f.readlines():
    index += line

index = index.format(navbar= nb)

with open("index.html", 'w') as f:
  f.write(index)
