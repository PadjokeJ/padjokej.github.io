rm ./built.html

touch built.html

echo "<!DOCTYPE html>" >> built.html
echo "<html>" >> built.html

echo -e "$(<header.html)" >> built.html

echo "<body>" >> built.html
echo "  <div id=\"content\">" >> built.html

echo "todo - add parser"

echo "  </div>" >> built.html
echo "</body>" >> built.html

echo "</html>" >> built.html


