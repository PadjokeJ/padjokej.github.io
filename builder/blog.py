def get_metadata(data):
  metadatas = []
  for line in data:
    if line[0] != ">":
      break
    metadatas.append(line[2:-1])
  return metadatas

def treat_metadata(metadata):
  header = {}
  for line in metadata:
    if line.startswith("!title"):
      title = line[line.find('"') + 1: -1]
      header["title"] = title
    if line.startswith("!author"):
      author = line[line.find('"') + 1: -1]
      header["author"] = author
    if line.startswith("!description"):
      description = line[line.find('"') + 1: -1]
      header["description"] = description
  return header

def count_range(data):
  arange = []
  i = 0
  for line in data:
    if line.startswith("<article>"):
      arange.append(i)
    if line.startswith("</article>"):
      arange.append(i)
    i += 1

  return arange

def parse_article(data):
  r = count_range(data)
  article = data[r[0] + 1 : r[1]]
  
  parsed = []

  for line in article:
    if line.startswith("#"):
      i = line.find(" ")
      parsed.append(f"<h{i}>{line[i + 1:-1]}</h{i}>")
    elif line.startswith("-"):
      i = line.find(" ")
      parsed.append(f"<li>{line[i + 1: -1]}</li>")
    elif len(line) == 1:
      parsed.append("<br>")
    else:
      parsed.append(f"<p>{line[:-1]}</p>")
  return parsed

def parse(data):
  metadata = get_metadata(data)
  header = treat_metadata(metadata)
  article = parse_article(data)
  
  html = []
  with open("builder/template.html", 'r') as f:
    html = f.readlines()

  page = insert_data(html, header, article)
  
  with open("blog/test.html", 'w') as f:
    f.write(page)
  
def insert_data(html, header, article):
  page = ""
  for line in html:
    page += line
  
  body = ""
  for line in article:
    body += line

  page = page.format(title = header["title"], description = header["description"], content = body, url = "change this later")
  return page

if __name__ == "__main__":
  data = []
  with open("src/blog/test.md", 'r') as f:
    data = f.readlines()
  parse(data)
