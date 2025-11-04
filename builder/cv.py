import json
import os
from datetime import datetime

if __name__ == "__main__":
  with open("src/cv/data.json", 'r') as f:
    data = json.load(f)
  
  commit = "<strong style=\"color: #ffffff;\">*</strong>"
  branch = "<strong>|/</strong>"
  nothin = "<strong>|</strong>"

  positions  = []
  pos_ends   = []
  pos_starts = []
  for job in data["jobs"]:
    name = job["name"]
    pos  = job["position"]
    link = job["link"]
    strt = job["start"]
    end  = job["end"]
    
    if end != "ongoing":
      d_end = datetime.strptime(end, "%Y-%m-%d")
    else:
      d_end = end
    d_sta = datetime.strptime(strt, "%Y-%m-%d")


    rand = os.urandom(8).hex()

    job_block = f"<span style=\"color: #10ff42;\">{rand[0:8]}</span> - ({d_sta} - {d_end}) {pos} - <a href=\"{link}\" style=\"color: #aaaaaa;\">{name}</a>"

    pos_starts.append(d_sta)
    pos_ends.append(d_end)

    positions.append(job_block)
  sorted_pos = sorted(positions, key=lambda x: pos_starts[positions.index(x)])
  
  formatted = [f"{commit} {sorted_pos[0]}"]
  
  current_branches = 1
  for i in range(1, len(sorted_pos)):
    if pos_ends[i - 1] == "ongoing" or pos_ends[i - 1] > pos_starts[i]:
      formatted.append((nothin + ' ') * (current_branches - 1) + branch)
      formatted.append(f"{(nothin + ' ') * current_branches}{commit} {sorted_pos[i]}")
      current_branches += 1
    else: 
      current_branches -= 1
      formatted.append(f"{commit} {sorted_pos[i]}")
    if pos_ends[i - 1] != "ongoing" and pos_ends[i - 1] > pos_starts[i]:
      formatted.append((nothin + ' ') * (current_branches - 1) + "<strong>|\\</strong>")

  
  formatted.reverse()

  html = "<pre><code>"
  html += "git@padjokej.dev: Life$ git log\n"
  for x in formatted:
    html += x + '\n'
  html += "git@padjokej.dev: Life$ <span style=\"animation: blink 1s infinite\">|</span>\n"
  html += "</code></pre>"
  
  
  with open("src/cv/cv.html", 'r') as f:
    html_cv = ""
    for line in f.readlines():
      html_cv += line

  html_cv = html_cv.format(content= html, generated_at= datetime.now().strftime("%Y-%m-%d @ %H:%M"))
  
  with open("cv/index.html", 'w') as f:
    f.write(html_cv)
